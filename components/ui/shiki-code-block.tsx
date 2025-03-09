'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { highlightCode } from '@/lib/shiki'

interface ShikiCodeBlockProps {
	code: string
	language: string
	className?: string
}

export function ShikiCodeBlock({
	code,
	language,
	className
}: ShikiCodeBlockProps) {
	const { resolvedTheme } = useTheme()
	const [html, setHtml] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function highlight() {
			try {
				setLoading(true)
				const isDark = resolvedTheme === 'dark'
				const highlightedCode = await highlightCode(code, language, isDark)
				setHtml(highlightedCode)
			} catch (error) {
				console.error('Error highlighting code:', error)
			} finally {
				setLoading(false)
			}
		}

		highlight()
	}, [code, language, resolvedTheme])

	if (loading) {
		return (
			<div className='p-4 border rounded-lg bg-gray-100 dark:bg-zinc-900 animate-pulse h-[400px] w-full' />
		)
	}

	return (
		<div
			className={`shiki-container overflow-auto max-h-[400px] rounded-lg ${
				className || ''
			}`}
			dangerouslySetInnerHTML={{ __html: html }}
		/>
	)
}

// Add a CSS reset to make sure Shiki styles are properly applied
export function ShikiStyles() {
	return (
		<style jsx global>{`
			.shiki-container {
				position: relative;
			}

			.shiki {
				overflow: auto;
				padding: 1rem;
				border-radius: 0.5rem;
				font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
					'Liberation Mono', 'Courier New', monospace;
				font-size: 0.875rem;
				line-height: 1.5;
			}

			.shiki code {
				counter-reset: line;
			}

			.shiki .line::before {
				counter-increment: line;
				content: counter(line);
				display: inline-block;
				width: 1.5rem;
				margin-right: 1.5rem;
				text-align: right;
				color: rgba(115, 138, 148, 0.4);
			}

			.shiki .line.highlighted {
				background-color: rgba(255, 255, 255, 0.1);
				width: 100%;
			}

			.dark .shiki {
				background-color: #0d1117 !important;
			}

			.light .shiki {
				background-color: #ffffff !important;
			}
		`}</style>
	)
}
