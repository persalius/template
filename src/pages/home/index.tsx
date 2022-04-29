import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, TextField, Typography } from '@mui/material'
import useDebounce from 'hooks/useDebounce'
import { getMembersRequest, setMembers } from 'redux/members/reducer'
import { selectMembers, selectMembersError } from 'redux/members/selectors'
import MembersList from './components/MembersList'

const Home = () => {
	const [value, setValue] = useState('')
	const debouncedValue = useDebounce(value)
	const dispatch = useDispatch()

	const members = useSelector(selectMembers)
	const error = useSelector(selectMembersError)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	useEffect(() => {
		if (!debouncedValue) {
			dispatch(setMembers(null))
			return
		}
		dispatch(getMembersRequest({ value: debouncedValue }))
	}, [debouncedValue])

	return (
		<Box>
			<Typography mb={3}>Type names with space</Typography>

			<TextField
				size="small"
				label="Name"
				onChange={handleChange}
				value={value}
			/>

			{members && !error ? <MembersList members={members} /> : null}
			{Boolean(error) && <Typography>{error}</Typography>}
		</Box>
	)
}

export default Home
