import { createSelector } from '@reduxjs/toolkit'
import { IStore } from '../types'

export const selectUserData = createSelector(
	(state: IStore) => state.user,
	(user) => user.userData
)
