import { IUserState } from './user/types'
import { IMembersState } from './members/types'

export interface IStore {
	user: IUserState
	members: IMembersState
}
