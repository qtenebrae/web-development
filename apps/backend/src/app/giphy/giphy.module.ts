import { Module } from '@nestjs/common';
import { GiphyController } from './giphy.controller';
import { GiphyService } from './giphy.service';

@Module({
	controllers: [GiphyController],
	providers: [GiphyService],
	exports: [GiphyService],
})
export class GiphyModule {}
