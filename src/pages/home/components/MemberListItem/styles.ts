import { createStyles, makeStyles } from '@mui/styles'

export default makeStyles(() =>
	createStyles({
		root: {
			display: 'flex',
			columnGap: 10,
			borderBottom: '1px solid #000',
		},
	})
)
