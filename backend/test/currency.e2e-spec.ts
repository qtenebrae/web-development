import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';
import { CurrencyResponseDTO } from 'src/currency/dto/response-currency.dto';

describe('CurrencyController (e2e)', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/currency/getRates', async () => {
		const res = await request(app.getHttpServer())
			.get('/currency/getRates')
			.query({ from: 'USD', to: 'RUB' });
		expect(res.statusCode).toEqual(200);

		const response: CurrencyResponseDTO = res.body;
		expect(response.title).toBeDefined();
		expect(response.url).toBeDefined();
	});

	afterAll(async () => {
		await app.close();
	});
});
