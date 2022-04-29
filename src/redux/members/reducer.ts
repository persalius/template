/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMembersState, IMemberData, IMembersRequest } from './types'

const initialState: IMembersState = {
	loading: false,
	error: null,
	membersList: null,
}

const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		getMembersRequest: (state, { payload }: PayloadAction<IMembersRequest>) => {
			state.loading = true
			state.error = ''
		},
		getMembersSuccess: (state, { payload }: PayloadAction<IMemberData[]>) => {
			state.loading = false
			state.membersList = payload
		},
		getMembersFailure: (
			state,
			{ payload }: PayloadAction<{ error: string }>
		) => {
			state.error = payload.error
			state.loading = false
		},
		setMembers: (state, { payload }: PayloadAction<IMemberData[] | null>) => {
			state.membersList = payload
			state.loading = false
			state.error = ''
		},
	},
})

export const {
	getMembersRequest,
	getMembersSuccess,
	getMembersFailure,
	setMembers,
} = membersSlice.actions

export const { reducer } = membersSlice
