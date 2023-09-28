import { Module } from '@nestjs/common';
import { ExchangeratesController } from './exchangerates.controller';
import { ExchangeratesService } from './exchangerates.service';

@Module({
	controllers: [ExchangeratesController],
	providers: [ExchangeratesService],
})
export class ExchangeratesModule {}
