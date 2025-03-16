'use client'

import React, { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { OpenInV0Button } from '@/components/open-in-v0-button'
import { cn } from '@/lib/utils'
import { InstallationSection } from './installation-section'
import { CodeBlock } from './code-block'

interface ComponentPreviewProps {
	componentName: string
	title: string
	codeContent: string
	previewComponent: ReactNode
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
	componentName,
	title,
	codeContent,
	previewComponent
}) => {
	return (
		<div className='flex flex-col items-center space-y-8'>
			<div className='flex items-center justify-between w-full mb-4'>
				<OpenInV0Button name={componentName} className='w-fit' />
				<h2 className='text-sm font-medium'>{title}</h2>
			</div>

			<Tabs defaultValue='preview' className='w-full'>
				<TabsList
					className='w-full justify-start rounded-none border-b bg-transparent p-0'
					dir='rtl'
				>
					<TabsTrigger
						value='preview'
						className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
					>
						پیش‌نمایش
					</TabsTrigger>
					<TabsTrigger
						value='installation'
						className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
					>
						نصب
					</TabsTrigger>
					<TabsTrigger
						value='code'
						className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
					>
						کد
					</TabsTrigger>
				</TabsList>

				<TabsContent value='installation' className='flex flex-col'>
					<InstallationSection componentName={componentName} />
				</TabsContent>

				<TabsContent value='preview' className='flex flex-col items-center'>
					<div
						className={cn(
							'rounded-lg p-4 border',
							'flex items-center justify-center'
						)}
					>
						{previewComponent}
					</div>
				</TabsContent>

				<TabsContent value='code' className='flex flex-col'>
					{/* We'll use a dynamic import for the code content */}
					<CodeBlock code={codeContent} language='tsx' isActive={true} />
				</TabsContent>
			</Tabs>
		</div>
	)
}
