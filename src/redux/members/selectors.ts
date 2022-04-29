import { createSelector } from '@reduxjs/toolkit'
import { IStore } from '../types'

export const selectMembers = createSelector(
	(state: IStore) => state.members,
	(members) => members.membersList
)

export const selectMembersLoading = createSelector(
	(state: IStore) => state.members,
	(members) => members.loading
)

export const selectMembersError = createSelector(
	(state: IStore) => state.members,
	(members) => members.error
)
