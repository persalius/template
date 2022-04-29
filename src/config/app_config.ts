const externalApi = {
	agify: (params: string) =>
		`https://api.agify.io/?${new URLSearchParams(params)}`,
}

const common = {
	services: {
		getUserData: '/users/me',
	},
}

const dev = {}

const staging = {}

const prod = {}

let envConfig = dev

if (process.env.REACT_APP_ENVIRONMENT === 'stage') envConfig = staging
if (process.env.REACT_APP_ENVIRONMENT === 'prod') envConfig = prod

export default { ...common, ...envConfig, ...externalApi }
