'use client'

import React, { Suspense } from 'react'
import { ShikiCodeBlock } from '@/components/ui/shiki-code-block'

// Loading placeholder component
const CodeLoadingPlaceholder = () => (
	<div className='p-4 border rounded-lg bg-gray-100 dark:bg-zinc-900 animate-pulse h-[400px] w-full'></div>
)

interface CodeBlockProps {
	code: string
	language?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
	code,
	language = 'tsx'
}) => {
	return (
		<Suspense fallback={<CodeLoadingPlaceholder />}>
			<ShikiCodeBlock language={language} code={code} />
		</Suspense>
	)
}
