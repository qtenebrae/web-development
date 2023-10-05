import { Module } from '@nestjs/common';
import { ExchangeratesController } from './exchangerates.controller';
import { ExchangeratesService } from './exchangerates.service';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { ExchangeratesModel } from './exchangerates.model/exchangerates.model';
import { HelperModule } from '../helper/helper.module';

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
    HelperModule,
  ],
  exports: [ExchangeratesService],
})
export class ExchangeratesModule {}
