import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './sagas'
import { rootReducer } from './reducers'

export default function configStore() {
	const sagaMiddleware = createSagaMiddleware()

	const store = configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: false,
				serializableCheck: false,
			}).concat(sagaMiddleware),
		devTools: true,
	})

	sagaMiddleware.run(rootSaga)

	return store
}
