import { Controller, Get } from '@nestjs/common';
import { GiphyService } from './giphy.service';

@Controller('giphy')
export class GiphyController {
	constructor(private readonly giphyService: GiphyService) {}

	@Get('getGiphy')
	async getGiphy(): Promise<any> {
		return this.giphyService.getGiphyByTag('Cat');
	}
}
