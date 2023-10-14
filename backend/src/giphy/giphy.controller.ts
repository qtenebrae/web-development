import { Controller, Get } from '@nestjs/common';
import { GiphyService } from './giphy.service';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('giphy')
@ApiTags('giphy')
export class GiphyController {
	constructor(private readonly giphyService: GiphyService) {}

	@Get('getGiphy')
	@ApiOperation({ summary: 'Get gif array ' })
	@ApiResponse({ status: 200, description: 'Return gif array' })
	async getGiphy(): Promise<any> {
		return this.giphyService.getGiphyByTag('Cat');
	}
}
