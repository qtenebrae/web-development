import { Module } from '@nestjs/common';
import { ExchangeratesController } from './exchangerates.controller';
import { ExchangeratesService } from './exchangerates.service';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { ExchangeratesModel } from './exchangerates.model/exchangerates.model';

@Module({
	controllers: [ExchangeratesController],
	providers: [ExchangeratesService],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ExchangeratesModel,
				schemaOptions: {
					collection: 'Exchangerates',
				},
			},
		]),
	],
})
export class ExchangeratesModule {}
