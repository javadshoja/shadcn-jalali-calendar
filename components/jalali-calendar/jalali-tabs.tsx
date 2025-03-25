import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface JalaliTabsProps {
	defaultValue: string
	children: React.ReactNode
}

export function JalaliTabs({ defaultValue, children }: JalaliTabsProps) {
	return (
		<Tabs defaultValue={defaultValue} className='w-full'>
			<TabsList className='grid w-full grid-cols-3 mb-4'>
				<TabsTrigger value='range-picker'>انتخاب محدوده</TabsTrigger>
				<TabsTrigger value='date-picker'>انتخاب تاریخ</TabsTrigger>
				<TabsTrigger value='calendar'>تقویم پایه</TabsTrigger>
			</TabsList>
			{children}
		</Tabs>
	)
}
