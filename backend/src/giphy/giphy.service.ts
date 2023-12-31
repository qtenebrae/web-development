import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ResponseGiphyAPI } from './dto/response-giphy.dto';
import { GiphyServiceResponseDTO } from './dto/response-service.dto';

@Injectable()
export class GiphyService {
	async getGiphyByTag(key_word: string): Promise<GiphyServiceResponseDTO[] | Error> {
		try {
			const res = await axios.get<ResponseGiphyAPI>(
				`${process.env.GIPHY_URL}/v1/gifs/search?api_key=${process.env.GIPHY_APP_KEY}&limit=50&q=${key_word}`,
			);
			return res.data.data.map((item) => {
				return { title: item.title, url: item.images.original.url };
			});
		} catch (e) {
			return e;
		}
	}
}
