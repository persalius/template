import { Suspense } from 'react'

interface ILangProviderProps {
	children: JSX.Element
}

const LangProvider = ({ children }: ILangProviderProps) => (
	<Suspense fallback={null}>{children}</Suspense>
)

export default LangProvider
