import React from 'react'
import PublicLayout from 'layouts/PublicLayout'
import { IRouteParams } from './types'

const PublicRoute = ({ component }: IRouteParams) => (
	<PublicLayout>{component}</PublicLayout>
)

export default PublicRoute
