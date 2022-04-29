import { reducer as userReducer } from './user/reducer'
import { reducer as membersReducer } from './members/reducer'

export const rootReducer = {
	user: userReducer,
	members: membersReducer,
}
