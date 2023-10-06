export class ResponseGiphyDTO {
	title: string;
	images:{original:{url:string}}
}

export class ResponseGiphyAPI {
	data: ResponseGiphyDTO[];
}

export class GiphyServiceResponse {
	title: string;
	url:string;
}