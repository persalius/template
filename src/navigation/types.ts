export interface IRouteParams {
	component: JSX.Element
}

export interface IAppRouterProps {
	path: string
	element: JSX.Element
	rest?: Record<string, unknown>
}
