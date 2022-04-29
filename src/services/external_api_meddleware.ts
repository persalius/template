import axios, { AxiosError, AxiosResponse } from 'axios'
import { defaults, isObject, isEmpty } from 'lodash'
import { IApiMiddleware } from './types'

export default function apiMiddleware({
	url = '',
	method = 'GET',
	data = {},
	headers = {},
	transform = true,
	contentType = 'application/json',
}: IApiMiddleware): Promise<string> {
	defaults(headers, {
		Accept: 'application/json; charset=UTF-8',
		'Content-Type': `${contentType}; charset=UTF-8`,
	})

	return axios({
		method,
		url,
		headers,
		params: method === 'GET' && isObject(data) && !isEmpty(data) ? data : {},
		data: transform ? JSON.stringify(data) : data,
	})
		.then((resp: AxiosResponse) => resp.data)
		.catch((er: AxiosError) => {
			const error = JSON.stringify(er?.response?.data)
			const spareMessage = 'Ooops, something went wrong'
			throw new Error(error || spareMessage)
		})
}
