import { Controller, Get } from '@nestjs/common';
import { ExchangeratesService } from './exchangerates.service';

@Controller('exchangerates')
export class ExchangeratesController {
	constructor(private readonly exchangeratesService: ExchangeratesService) {}

	@Get('getExchange')
	async getExchange(): Promise<any> {
		return this.exchangeratesService.getExchange('USD', ['AUD', 'EUR', 'RUB']);
	}
}
