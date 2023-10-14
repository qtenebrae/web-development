import { TypegooseModuleOptions } from '@m8a/nestjs-typegoose';
import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	return {
		uri: getMongoString(configService),
	};
};

const getMongoString = (configService: ConfigService): string =>
	'mongodb://' +
	configService.get('MONGO_LOGIN') +
	':' +
	configService.get('MONGO_PASSWORD') +
	'@' +
	configService.get('MONGO_HOST') +
	':' +
	configService.get('MONGO_PORT') +
	'/' +
	configService.get('MONGO_AUTHDATABASE');
