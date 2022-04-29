import { Method } from 'axios'

export interface IApiMiddleware {
	url: string
	method?: Method
	data?: unknown
	headers?: Record<string, string>
	transform?: boolean
	noExpirationCheck?: boolean
	contentType?: string
}
