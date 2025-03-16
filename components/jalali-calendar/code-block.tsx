'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { ShikiCodeBlock } from '@/components/ui/shiki-code-block'

// Loading placeholder component
const CodeLoadingPlaceholder = () => (
	<div className='p-4 border rounded-lg bg-gray-100 dark:bg-zinc-900 animate-pulse h-[400px] w-full'></div>
)

interface CodeBlockProps {
	code: string
	language?: string
	isActive: boolean
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	language = 'tsx',
	isActive
}) => {
	const [shouldRender, setShouldRender] = useState(isActive)

	// Only render the code block if it's active or has been active before
	useEffect(() => {
		if (isActive && !shouldRender) {
			setShouldRender(true)
		}
	}, [isActive, shouldRender])

	if (!shouldRender) {
		return null
	}

	return (
		<Suspense fallback={<CodeLoadingPlaceholder />}>
			{isActive && <ShikiCodeBlock language={language} code={code} />}
		</Suspense>
	)
}
