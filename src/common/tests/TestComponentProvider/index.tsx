import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from 'redux/config'

const TestComponentProvider = (component: JSX.Element) => (
	<Provider store={configureStore()}>
		<Router>{component}</Router>
	</Provider>
)

export default TestComponentProvider
