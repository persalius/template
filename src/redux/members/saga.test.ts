import { call, put } from 'redux-saga/effects'
import api from 'services/external_api_meddleware'
import app_config from 'config/app_config'
import { getMembersSaga } from './saga'
import { IMemberData } from './types'
import { getMembersSuccess } from './reducer'
import { createParamsOptions } from './utils'

const value = 'michael'
const options = createParamsOptions(value)
const apiParams = { url: app_config.agify(options) }
const action = {
	payload: { value },
	type: 'project/getMembersRequest',
}
const membersList: IMemberData[] = [{ name: 'michael', age: 30, count: 100 }]

describe('Members', () => {
	it('Fetch members list', () => {
		const generator = getMembersSaga(action)
		const callApi = generator.next()
		const putMembers = generator.next(membersList)
		const { done } = generator.next()

		expect(callApi.value).toEqual(call(api, apiParams))
		expect(putMembers.value).toEqual(put(getMembersSuccess(membersList)))
		expect(done).toEqual(true)
	})
})
