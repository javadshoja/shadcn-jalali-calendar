'use client'

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface InstallationSectionProps {
	componentName: string
}

export const InstallationSection: React.FC<InstallationSectionProps> = ({
	componentName
}) => {
	const [packageManager, setPackageManager] = useState<
		'pnpm' | 'npm' | 'yarn' | 'bun'
	>('pnpm')
	const [hasCopied, setHasCopied] = useState(false)

	useEffect(() => {
		if (hasCopied) {
			const timer = setTimeout(() => setHasCopied(false), 2000)
			return () => clearTimeout(timer)
		}
	}, [hasCopied])

	const commands = {
		pnpm: `pnpm dlx shadcn@latest add ${
			process.env.NEXT_PUBLIC_URL
		}/r/${componentName.toLowerCase()}.json`,
		npm: `npx shadcn@latest add ${
			process.env.NEXT_PUBLIC_URL
		}/r/${componentName.toLowerCase()}.json`,
		yarn: `npx shadcn@latest add ${
			process.env.NEXT_PUBLIC_URL
		}/r/${componentName.toLowerCase()}.json`,
		bun: `bunx --bun shadcn@latest add ${
			process.env.NEXT_PUBLIC_URL
		}/r/${componentName.toLowerCase()}.json`
	}

	const copyCommand = () => {
		const command = commands[packageManager]
		if (!command) {
			return
		}
		navigator.clipboard.writeText(command)
		setHasCopied(true)
	}

	return (
		<div className='relative mt-6 max-h-[650px] overflow-x-auto rounded-xl bg-zinc-950 dark:bg-zinc-900'>
			<Tabs
				value={packageManager}
				onValueChange={value => {
					setPackageManager(value as 'pnpm' | 'npm' | 'yarn' | 'bun')
				}}
			>
				<div className='flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-3 pt-2.5'>
					<TabsList className='h-7 translate-y-[2px] gap-3 bg-transparent p-0 pl-1'>
						{Object.entries(commands).map(([key]) => (
							<TabsTrigger
								key={key}
								value={key}
								className='rounded-none border-b border-transparent bg-transparent p-0 pb-1.5 font-mono text-zinc-400 data-[state=active]:border-b-zinc-50 data-[state=active]:bg-transparent data-[state=active]:text-zinc-50'
							>
								{key}
							</TabsTrigger>
						))}
					</TabsList>
				</div>
				{Object.entries(commands).map(([key, value]) => (
					<TabsContent key={key} value={key} className='mt-0'>
						<pre className='px-4 py-5'>
							<code
								className='relative font-mono text-sm leading-none text-zinc-50'
								data-language='bash'
							>
								{value}
							</code>
						</pre>
					</TabsContent>
				))}
			</Tabs>
			<button
				className='absolute right-2.5 top-2 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 rounded-md flex items-center justify-center'
				onClick={copyCommand}
				aria-label='Copy code'
				title='Copy code'
			>
				{hasCopied ? (
					<svg
						width='15'
						height='15'
						viewBox='0 0 15 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='h-3 w-3'
					>
						<path
							d='M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z'
							fill='currentColor'
							fillRule='evenodd'
							clipRule='evenodd'
						></path>
					</svg>
				) : (
					<svg
						width='15'
						height='15'
						viewBox='0 0 15 15'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='h-3 w-3'
					>
						<path
							d='M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z'
							fill='currentColor'
							fillRule='evenodd'
							clipRule='evenodd'
						></path>
					</svg>
				)}
			</button>
		</div>
	)
}
