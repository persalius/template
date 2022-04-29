export interface IMembersState {
	loading: boolean
	error: string | null
	membersList: IMemberData[] | null
}

export interface IMemberData {
	name: string
	age?: number
	count: number
}

export interface IMembersRequest {
	value: string
}
