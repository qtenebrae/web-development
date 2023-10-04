import { Controller, Get, Inject } from '@nestjs/common';
import { ExchangeratesService } from './exchangerates.service';
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { ExchangeratesModel } from './exchangerates.model/exchangerates.model';
import { HelperService } from 'src/helper/helper.service';

@Controller('exchangerates')
export class ExchangeratesController {
	constructor(
		private readonly exchangeratesService: ExchangeratesService,
		@Inject(HelperService) private readonly helperService: HelperService,
	) {}

	@Get('getExchange')
	async getExchange(): Promise<any> {
		return this.exchangeratesService.getExchange(
			'USD',
			['AUD', 'EUR', 'RUB'],
			this.helperService.currentDate(),
		);
	}

	@Get('getAllRates')
	async getAll(): Promise<DocumentType<ExchangeratesModel>[]> {
		return this.exchangeratesService.getAllRates();
	}
}
