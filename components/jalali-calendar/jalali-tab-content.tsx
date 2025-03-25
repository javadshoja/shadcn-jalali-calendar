import React from 'react'
import { TabsContent } from '@/components/ui/tabs'
import { ComponentPreview } from './component-preview'

interface JalaliTabContentProps {
	value: string
	componentName: string
	title: string
	codeContent: string
	codeDescription?: React.ReactNode
	previewComponent: React.ReactNode
}

export function JalaliTabContent({
	value,
	componentName,
	title,
	codeContent,
	codeDescription,
	previewComponent
}: JalaliTabContentProps) {
	return (
		<TabsContent value={value}>
			<ComponentPreview
				componentName={componentName}
				title={title}
				codeContent={codeContent}
				codeDescription={codeDescription}
				previewComponent={previewComponent}
			/>
		</TabsContent>
	)
}
