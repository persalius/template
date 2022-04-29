import { call, put } from 'redux-saga/effects'
import api from 'services/api_middleware'
import app_config from 'config/app_config'
import { getUserDataSuccess, getUserDataFailure } from 'redux/user/reducer'
import { IUserData } from 'redux/user/types'

export function* getUserDataSaga() {
	try {
		const userData: IUserData = yield call(api, {
			url: app_config.services.getUserData,
		})
		yield put(getUserDataSuccess(userData))
	} catch (e) {
		const error = e as { message: string }
		yield put(getUserDataFailure({ error: error.message }))
	}
}
