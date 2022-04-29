import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import LangProvider from 'localization/LangProvider'
import configStore from 'redux/config'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'localization/i18n'

const container = document.getElementById('root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<Provider store={configStore()}>
				<LangProvider>
					<App />
				</LangProvider>
			</Provider>
		</StrictMode>
	)
}

reportWebVitals()
