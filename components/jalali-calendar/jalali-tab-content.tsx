import React from 'react'
import { TabsContent } from '@/components/ui/tabs'
import { ComponentPreview } from './component-preview'

interface JalaliTabContentProps {
	value: string
	componentName: string
	title: string
	codeContent: string
	previewComponent: React.ReactNode
}

export function JalaliTabContent({
	value,
	componentName,
	title,
	codeContent,
	previewComponent
}: JalaliTabContentProps) {
	return (
		<TabsContent value={value}>
			<ComponentPreview
				componentName={componentName}
				title={title}
				codeContent={codeContent}
				previewComponent={previewComponent}
			/>
		</TabsContent>
	)
}
