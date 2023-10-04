import { Controller, Get, Inject } from '@nestjs/common';
import { ExchangeratesService } from 'src/exchangerates/exchangerates.service';
import { GiphyService } from 'src/giphy/giphy.service';
import { HelperService } from 'src/helper/helper.service';

function getRandomInt(min: number, max: number): number {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Controller('currency')
export class CurrencyController {
	constructor(
		@Inject(ExchangeratesService)
		private readonly exchangeratesService: ExchangeratesService,
		@Inject(GiphyService) private readonly giphyService: GiphyService,
		@Inject(HelperService) private readonly helperService: HelperService,
	) {}

	@Get('getRates')
	async getRates(): Promise<any> {
		const target = ['RUB'];
		const current = await this.exchangeratesService.getExchange(
			'USD',
			target,
			this.helperService.currentDate(),
		);
		const previous = await this.exchangeratesService.getExchange(
			'USD',
			target,
			this.helperService.previousDate(),
		);
		if (current.rates[target[0]] < previous.rates[target[0]]) {
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
