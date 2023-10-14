import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
	currentDate = (): string => {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
		const day = ('0' + currentDate.getDate()).slice(-2);
		const formattedDate = year + '-' + month + '-' + day;
		return formattedDate;
	};

	previousDate = (): string => {
		const currentDate = new Date();
		currentDate.setDate(currentDate.getDate() - 1);
		const year = currentDate.getFullYear();
		const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
		const day = ('0' + currentDate.getDate()).slice(-2);
		const formattedDate = year + '-' + month + '-' + day;
		return formattedDate;
	};
}
