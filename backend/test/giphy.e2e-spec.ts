import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from 'src/app.module';

describe('GiphyController (e2e)', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/giphy/getGiphy', async () => {
		const res = await request(app.getHttpServer()).get('/giphy/getGiphy');
		expect(res.statusCode).toEqual(200);
		expect(res.body.length).toBeGreaterThan(0);
		expect(res.body[0].title).toBeDefined();
		expect(res.body[0].url).toBeDefined();
	});

	afterAll(async () => {
		await app.close();
	});
});
