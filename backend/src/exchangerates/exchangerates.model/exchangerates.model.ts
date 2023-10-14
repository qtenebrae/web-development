import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface ExchangeratesModel extends Base {}
export class ExchangeratesModel extends TimeStamps {
	@prop()
	sourceСurrency: string;

	@prop()
	targetCurrency: string;

	@prop()
	value: number;
}
