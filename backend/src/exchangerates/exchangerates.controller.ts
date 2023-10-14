import { Controller, Get, Inject } from '@nestjs/common';
import { ExchangeratesService } from './exchangerates.service';
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { ExchangeratesModel } from './exchangerates.model/exchangerates.model';
import { HelperService } from 'src/helper/helper.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('exchangerates')
@ApiTags('exchangerates')
export class ExchangeratesController {
	constructor(
		private readonly exchangeratesService: ExchangeratesService,
		@Inject(HelperService) private readonly helperService: HelperService,
	) {}

	@Get('getExchange')
	@ApiOperation({ summary: 'Get rates' })
	@ApiResponse({ status: 200, description: 'Return rates' })
	async getExchange(): Promise<any> {
		return this.exchangeratesService.getExchange(
			'USD',
			['AUD', 'EUR', 'RUB'],
			this.helperService.currentDate(),
		);
	}

	@Get('getAllRates')
	@ApiOperation({ summary: 'Get all rates' })
	@ApiResponse({ status: 200, description: 'Return all rates' })
	async getAll(): Promise<DocumentType<ExchangeratesModel>[]> {
		return this.exchangeratesService.getAllRates();
	}
}
