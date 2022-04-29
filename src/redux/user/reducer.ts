/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserState, IUserData } from './types'

const initialState: IUserState = {
	loading: false,
	error: null,
	userData: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUserDataRequest: (state) => {
			state.loading = true
			state.error = ''
		},
		getUserDataSuccess: (state, { payload }: PayloadAction<IUserData>) => {
			state.loading = false
			state.userData = payload
		},
		getUserDataFailure: (
			state,
			{ payload }: PayloadAction<{ error: string }>
		) => {
			state.error = payload.error
			state.loading = false
		},
	},
})

export const { getUserDataRequest, getUserDataSuccess, getUserDataFailure } =
	userSlice.actions

export const { reducer } = userSlice
