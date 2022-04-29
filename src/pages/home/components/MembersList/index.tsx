import { List } from '@mui/material'
import MemberListItem from '../MemberListItem'
import { IMembersList } from './types'

const MembersList = ({ members }: IMembersList) => (
	<List>
		{members.map((member) => (
			<MemberListItem data={member} key={member.name} />
		))}
	</List>
)

export default MembersList
