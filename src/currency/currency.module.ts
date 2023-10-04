import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { ExchangeratesModule } from 'src/exchangerates/exchangerates.module';
import { GiphyModule } from 'src/giphy/giphy.module';
import { HelperModule } from 'src/helper/helper.module';

@Module({
	controllers: [CurrencyController],
	imports: [ExchangeratesModule, GiphyModule, HelperModule],
})
export class CurrencyModule {}
