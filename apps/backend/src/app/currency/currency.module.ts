import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';
import { ExchangeratesModule } from '../exchangerates/exchangerates.module';
import { GiphyModule } from '../giphy/giphy.module';
import { HelperModule } from '../helper/helper.module';

@Module({
  controllers: [CurrencyController],
  imports: [ExchangeratesModule, GiphyModule, HelperModule],
})
export class CurrencyModule {}
