import axios from 'axios';

export default class ExchangeRateController {
	static async getGiphy(from: string, to: string) {
		return await axios.get('http://localhost:3000/api/currency/getRates', {
			params: { from, to },
		});
	}
}
