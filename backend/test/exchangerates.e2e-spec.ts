import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('ExchangeratesController (e2e)', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/exchangerates/getExchange', async () => {
		const res = await request(app.getHttpServer()).get('/exchangerates/getExchange');
		expect(res.statusCode).toEqual(200);
		expect(res.body.base).toBe('USD');
		expect(res.body.rates).toBeDefined();
	});

	it('/exchangerates/getAllRates', async () => {
		const res = await request(app.getHttpServer()).get('/exchangerates/getAllRates');
		expect(res.statusCode).toEqual(200);
		expect(res.body.length).toBeGreaterThan(0);
		expect(res.body[0]._id).toBeDefined();
		expect(res.body[0].sourceСurrency).toBeDefined();
		expect(res.body[0].targetCurrency).toBeDefined();
		expect(res.body[0].value).toBeDefined();
	});

	afterAll(async () => {
		await app.close();
	});
});
