import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GiphyService {
	async getGiphyByTag(key_word: string): Promise<any> {
		try {
			const res = await axios.get(
				`${process.env.GIPHY_URL}/v1/gifs/search?api_key=${process.env.GIPHY_APP_KEY}
			&limit=50&q=${key_word}`,
			);

			return res.data.data.map((item) => {
				return { title: item.title, id: item.id, embed_url: item.embed_url };
			});
		} catch (e) {
			return `ERROR: ${e}`;
		}
	}
}
