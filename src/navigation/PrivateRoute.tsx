import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import ProtectedLayout from 'layouts/ProtectedLayout'
import { IRouteParams } from './types'
import paths from './paths'

const PrivateRoute = ({ component }: IRouteParams) => {
	const isAuth = true // temp
	const location = useLocation()

	return isAuth ? (
		<ProtectedLayout>{component}</ProtectedLayout>
	) : (
		<Navigate to={paths.auth} state={{ from: location }} />
	)
}

export default PrivateRoute
