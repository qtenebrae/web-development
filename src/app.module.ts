import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiphyModule } from './giphy/giphy.module';
import { ExchangeratesModule } from './exchangerates/exchangerates.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot(), GiphyModule, ExchangeratesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
