import { Test, TestingModule } from '@nestjs/testing';
import { GiphyService } from './giphy.service';
import axios from 'axios';
import { ConfigModule } from '@nestjs/config';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GiphyService', () => {
	let service: GiphyService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GiphyService],
			imports: [ConfigModule.forRoot()],
		}).compile();

		service = module.get<GiphyService>(GiphyService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should return an array of GiphyServiceResponseDTO', async () => {
		// Mock успешного ответа от axios.get
		const response = {
			data: {
				data: [
					{
						title: 'GIF 1',
						images: {
							original: {
								url: 'https://example.com/gif1.gif',
							},
						},
					},
					{
						title: 'GIF 2',
						images: {
							original: {
								url: 'https://example.com/gif2.gif',
							},
						},
					},
				],
			},
		};
		mockedAxios.get.mockResolvedValue(response);

		// Вызываем функцию getGiphyByTag
		const result = await service.getGiphyByTag('cat');

		// Проверяем результат
		expect(result).toEqual([
			{ title: 'GIF 1', url: 'https://example.com/gif1.gif' },
			{ title: 'GIF 2', url: 'https://example.com/gif2.gif' },
		]);

		// Проверяем, что axios.get был вызван с правильными аргументами
		expect(mockedAxios.get).toHaveBeenCalledWith(
			'https://api.giphy.com/v1/gifs/search?api_key=AOk1bWf4UKBCe59mkHeHLNhweaQWNJiw&limit=50&q=cat',
		);
	});

	it('should return an error if axios.get throws an error', async () => {
		// Mock ошибки от axios.get
		const error = new Error('Request failed');
		mockedAxios.get.mockRejectedValue(error);

		// Вызываем функцию getGiphyByTag
		const result = await service.getGiphyByTag('cat');

		// Проверяем, что результат - объект ошибки
		expect(result).toBeInstanceOf(Error);

		// Проверяем, что axios.get был вызван с правильными аргументами
		expect(mockedAxios.get).toHaveBeenCalledWith(
			'https://api.giphy.com/v1/gifs/search?api_key=AOk1bWf4UKBCe59mkHeHLNhweaQWNJiw&limit=50&q=cat',
		);
	});
});
