import { Typography, ListItem } from '@mui/material'
import useStyles from './styles'
import { IMemberListItem } from './types'

const MemberListItem = ({ data }: IMemberListItem) => {
	const { age, name } = data
	const classes = useStyles()

	return (
		<ListItem className={classes.root}>
			<Typography>Name: {name}</Typography>
			<Typography>Age: {age || 'unknown'}</Typography>
		</ListItem>
	)
}

export default MemberListItem
