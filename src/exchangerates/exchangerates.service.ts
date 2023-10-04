import { Injectable } from '@nestjs/common';
import axios from 'axios';
import ResponseExchangeDTO from './dto/response-exchange.dto';
import { InjectModel } from '@m8a/nestjs-typegoose';
import { ExchangeratesModel } from './exchangerates.model/exchangerates.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';

@Injectable()
export class ExchangeratesService {
	constructor(
		@InjectModel(ExchangeratesModel)
		private readonly exchangeratesModel: ModelType<ExchangeratesModel>,
	) {}

	async getExchange(base: string, symbols: string[], date: string): Promise<ResponseExchangeDTO> {
		const res = await axios.get<ResponseExchangeDTO>(
			`${process.env.EXCHANGE_RATES_URL}/api/historical/${date}.json
			?app_id=${process.env.EXCHANGE_RATES_APP_ID}&base=${base}&symbols=${symbols.join(',')}`,
		);
		this.exchangeratesModel.create({
			sourceСurrency: base,
			targetCurrency: symbols[0],
			value: res.data.rates[symbols[0]],
		});
		return {
			base: res.data.base,
			rates: res.data.rates,
		};
	}

	async getAllRates(): Promise<DocumentType<ExchangeratesModel>[]> {
		return this.exchangeratesModel.find().exec();
	}
}
