import { Controller, Get, Inject, Query, Req } from '@nestjs/common';
import { ExchangeratesService } from 'src/exchangerates/exchangerates.service';
import { GiphyService } from 'src/giphy/giphy.service';
import { HelperService } from 'src/helper/helper.service';
import { CurrencyResponseDTO } from './dto/response-currency.dto';
import { RequestBodyDTO } from './dto/request-body.dto';
import { ApiOperation, ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Controller('currency')
@ApiTags('currency')
export class CurrencyController {
	constructor(
		@Inject(ExchangeratesService)
		private readonly exchangeratesService: ExchangeratesService,
		@Inject(GiphyService) private readonly giphyService: GiphyService,
		@Inject(HelperService) private readonly helperService: HelperService,
	) {}

	@Get('getRates')
	@ApiQuery({ name: 'from' })
	@ApiQuery({ name: 'to' })
	@ApiOperation({ summary: 'Get gif' })
	@ApiResponse({ status: 200, description: 'Return gif' })
	async getRates(@Query() query: RequestBodyDTO): Promise<CurrencyResponseDTO> {
		console.log(query);
		const current = await this.exchangeratesService.getExchange(
			query.from,
			[query.to],
			this.helperService.currentDate(),
		);
		const previous = await this.exchangeratesService.getExchange(
			query.from,
			[query.to],
			this.helperService.previousDate(),
		);
		if (current.rates[query.to] < previous.rates[query.to]) {
			const gif = await this.giphyService.getGiphyByTag('happy');
			if (!(gif instanceof Error)) {
				return gif[getRandomInt(0, gif.length - 1)];
			}
		} else {
			const gif = await this.giphyService.getGiphyByTag('sad');
			if (!(gif instanceof Error)) {
				return gif[getRandomInt(0, gif.length - 1)];
			}
		}
	}
}
