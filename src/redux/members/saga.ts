import { call, put } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import api from 'services/external_api_meddleware'
import app_config from 'config/app_config'
import { getMembersSuccess, getMembersFailure } from 'redux/members/reducer'
import { IMembersRequest, IMemberData } from 'redux/members/types'
import { createParamsOptions } from './utils'

export function* getMembersSaga({ payload }: PayloadAction<IMembersRequest>) {
	const { value } = payload
	const options = createParamsOptions(value)

	try {
		const members: IMemberData[] = yield call(api, {
			url: app_config.agify(options),
		})
		yield put(getMembersSuccess(members))
	} catch (e) {
		const error = e as { message: string }
		const errorMessage = JSON.parse(error.message).error
		yield put(getMembersFailure({ error: errorMessage }))
	}
}
