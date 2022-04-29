import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import ErrorPageNotFound from 'pages/errors/PageNotFound'
import { IAppRouterProps } from './types'
import paths from './paths'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const Home = lazy(() => import('pages/home'))
const Auth = lazy(() => import('pages/auth'))

const protectedRoutes: IAppRouterProps[] = [
	{
		path: paths.home,
		element: <PrivateRoute component={<Home />} />,
	},
	{
		path: paths.notFound,
		element: <PrivateRoute component={<ErrorPageNotFound />} />,
	},
]

const publicRoutes: IAppRouterProps[] = [
	{
		path: paths.auth,
		element: <PublicRoute component={<Auth />} />,
	},
]

const routes = [...publicRoutes, ...protectedRoutes]

export const Routes = () => {
	const routesList = useRoutes(routes)
	return <div>{routesList}</div>
}
