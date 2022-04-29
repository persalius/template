import React, { Suspense } from 'react'
import { IPageLayoutProps } from './types'

const ProtectedLayout = ({ children }: IPageLayoutProps) => (
	<Suspense fallback={false}>{children}</Suspense>
)

export default ProtectedLayout
