import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ResponseGiphyAPI, ResponseGiphyDTO } from './dto/response-giphy.dto';

@Injectable()
export class GiphyService {
	async getGiphyByTag(key_word: string): Promise<ResponseGiphyDTO[] | Error> {
		try {
			const res = await axios.get<ResponseGiphyAPI>(
				`${process.env.GIPHY_URL}/v1/gifs/search?api_key=${process.env.GIPHY_APP_KEY}
			&limit=50&q=${key_word}`,
			);
			return res.data.data.map((item) => {
				return { title: item.title, embed_url: item.embed_url };
			});
		} catch (e) {
			return e;
		}
	}
}
