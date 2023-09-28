import { Injectable } from '@nestjs/common';
import axios from 'axios';
import ResponseExchangeDTO from './dto/response-exchange.dto';

@Injectable()
export class ExchangeratesService {
	async getExchange(base: string, symbols: string[]): Promise<ResponseExchangeDTO> {
		const res = await axios.get<ResponseExchangeDTO>(
			`${process.env.EXCHANGE_RATES_URL}/api/historical/2023-09-23.json
			?app_id=${process.env.EXCHANGE_RATES_APP_ID}&base=${base}&symbols=${symbols.join(',')}`,
		);
		return {
			base: res.data.base,
			rate: res.data.rate,
		};
	}
}
