import axios, { AxiosError, AxiosResponse } from 'axios'
import { defaults, isObject, isEmpty } from 'lodash'
import paths from 'navigation/paths'
import { IApiMiddleware } from './types'

const { REACT_APP_BASE_URL: baseURL } = process.env

export default function apiMiddleware({
	url = '/',
	method = 'GET',
	data = {},
	headers = {},
	transform = true,
	contentType = 'application/json',
}: IApiMiddleware): Promise<string> {
	defaults(headers, {
		Accept: 'application/json; charset=UTF-8',
		'Content-Type': `${contentType}; charset=UTF-8`,
		Authorization: `Bearer ${localStorage.getItem('your.token')}`, // add your locale storage item name
	})

	return axios({
		baseURL,
		method,
		url,
		headers,
		params: method === 'GET' && isObject(data) && !isEmpty(data) ? data : {},
		data: transform ? JSON.stringify(data) : data,
	})
		.then((resp: AxiosResponse) => resp.data)
		.catch((er: AxiosError) => {
			if (er?.response?.status === 401) {
				localStorage.removeItem('your.token') // add your locale storage item name
				window.location.href = paths.auth
			}
			const error = JSON.stringify(er?.response?.data.detail) // please check error data
			const spareMessage = 'Ooops, something went wrong'
			throw new Error(error || spareMessage)
		})
}
