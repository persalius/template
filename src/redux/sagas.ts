import { all, takeLatest } from 'redux-saga/effects'

import { getUserDataRequest } from './user/reducer'
import { getUserDataSaga } from './user/saga'

import { getMembersRequest } from './members/reducer'
import { getMembersSaga } from './members/saga'

export default function* root() {
	yield all([takeLatest(getUserDataRequest, getUserDataSaga)])
	// members
	yield all([takeLatest(getMembersRequest, getMembersSaga)])
}
