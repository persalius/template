import { render, screen } from '@testing-library/react'
import TestComponentProvider from 'common/tests/TestComponentProvider'
import { IMemberData } from 'redux/members/types'
import MemberListItem from './index'

const data: IMemberData = { name: 'michael', age: 30, count: 100 }

describe('Member list item', () => {
	it('Render member list item', () => {
		render(TestComponentProvider(<MemberListItem data={data} />))
		const listItem = screen.getByRole('listitem')
		expect(listItem).toBeInTheDocument()
		expect(listItem).toHaveTextContent(data.name)
	})
})
