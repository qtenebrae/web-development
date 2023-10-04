import { Controller, Get } from '@nestjs/common';
import { ExchangeratesService } from './exchangerates.service';
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { ExchangeratesModel } from './exchangerates.model/exchangerates.model';
import { currentDate } from 'src/helpers/dates.helper';

@Controller('exchangerates')
export class ExchangeratesController {
	constructor(private readonly exchangeratesService: ExchangeratesService) {}

	@Get('getExchange')
	async getExchange(): Promise<any> {
		return this.exchangeratesService.getExchange('USD', ['AUD', 'EUR', 'RUB'], currentDate());
	}

	@Get('getAllRates')
	async getAll(): Promise<DocumentType<ExchangeratesModel>[]> {
		return this.exchangeratesService.getAllRates();
	}
}
