import React, { Suspense } from 'react'
import { IPageLayoutProps } from './types'

const PublicLayout = ({ children }: IPageLayoutProps) => (
	<Suspense fallback={false}>{children}</Suspense>
)

export default PublicLayout
