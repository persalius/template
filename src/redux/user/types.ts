export interface IUserState {
	loading: boolean
	error: string | null
	userData: IUserData | null
}

export interface IUserData {
	id: string
}
