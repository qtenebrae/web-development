import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExchangeratesService {
	async getExchange(base: string, symbols: string[]): Promise<any> {
		const res = await axios.get(
			`${process.env.EXCHANGE_RATES_URL}/api/historical/2023-09-23.json
			?app_id=${process.env.EXCHANGE_RATES_APP_ID}&base=${base}&symbols=${symbols.join(',')}`,
		);
		return res.data;
	}
}
