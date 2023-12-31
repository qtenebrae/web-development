import { Module } from '@nestjs/common';
import { GiphyModule } from './giphy/giphy.module';
import { ExchangeratesModule } from './exchangerates/exchangerates.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConfig } from './configs/mongo.config';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { CurrencyModule } from './currency/currency.module';
import { HelperModule } from './helper/helper.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		GiphyModule,
		ExchangeratesModule,
		CurrencyModule,
		HelperModule,
	],
})
export class AppModule {}
