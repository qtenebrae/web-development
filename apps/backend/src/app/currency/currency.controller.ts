import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ExchangeratesService } from '../exchangerates/exchangerates.service';
import { GiphyService } from '../giphy/giphy.service';
import { HelperService } from '../helper/helper.service';
import { GiphyServiceResponse } from '../giphy/dto/response-giphy.dto';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

@Controller('currency')
export class CurrencyController {
  constructor(
    @Inject(ExchangeratesService)
    private readonly exchangeratesService: ExchangeratesService,
    @Inject(GiphyService) private readonly giphyService: GiphyService,
    @Inject(HelperService) private readonly helperService: HelperService
  ) {}

  @Get('getRates')
  async getRates(@Req() request:{query:{base:string, symbol:string}}): Promise<GiphyServiceResponse> {
    const current = await this.exchangeratesService.getExchange(
      request.query.base,
      [request.query.symbol],
      this.helperService.currentDate()
    );
    const previous = await this.exchangeratesService.getExchange(
      request.query.base,
      [request.query.symbol],
      this.helperService.previousDate()
    );
    if (current.rates[request.query.symbol] < previous.rates[request.query.symbol]) {
      const gif = await this.giphyService.getGiphyByTag('happy');
      if (!(gif instanceof Error)) {
        return gif[getRandomInt(0, gif.length - 1)];
      }
    } else {
      const gif = await this.giphyService.getGiphyByTag('sad');
      if (!(gif instanceof Error)) {
        return gif[getRandomInt(0, gif.length - 1)];
      }
    }
  }
}
