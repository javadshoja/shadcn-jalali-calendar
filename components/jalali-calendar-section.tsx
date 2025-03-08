'use client'

import React from 'react'
import { OpenInV0Button } from '@/components/open-in-v0-button'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'

export default function JalaliCalendarSection() {
	// Use useEffect to ensure this only runs on the client
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	// Only render the calendar components after client-side hydration
	if (!mounted) {
		return (
			<div className='w-full flex flex-col items-center p-4'>
				<div className='h-8 w-72 bg-gray-200 rounded-full animate-pulse mb-8'></div>
				<div className='h-64 w-72 bg-gray-100 rounded-lg animate-pulse'></div>
			</div>
		)
	}

	return (
		<div className='w-full'>
			<Tabs defaultValue='calendar' className='w-full max-w-lg mx-auto'>
				<TabsList className='grid w-full grid-cols-3 mb-4'>
					<TabsTrigger value='calendar'>تقویم پایه</TabsTrigger>
					<TabsTrigger value='date-picker'>انتخابگر تاریخ</TabsTrigger>
					<TabsTrigger value='range-picker'>انتخابگر محدوده</TabsTrigger>
				</TabsList>

				<div className='text-xs text-muted-foreground mb-4 flex items-center gap-2'>
					<Info className='h-3 w-3' />
					<span>
						These components require react-day-picker@latest and date-fns-jalali
					</span>
				</div>

				<TabsContent value='calendar' className='flex flex-col items-center'>
					<div className='flex items-center justify-between w-full mb-4'>
						<OpenInV0Button name='jalali-calendar' className='w-fit' />
						<h2 className='text-sm font-medium'>
							تقویم جلالی (Jalali Calendar)
						</h2>
					</div>
					<div
						className={cn(
							'rounded-lg p-4 border',
							'flex items-center justify-center'
						)}
					>
						<JalaliCalendar />
					</div>
				</TabsContent>

				<TabsContent value='date-picker' className='flex flex-col items-center'>
					<div className='flex items-center justify-between w-full mb-4'>
						<OpenInV0Button name='jalali-date-picker' className='w-fit' />
						<h2 className='text-sm font-medium'>انتخاب تاریخ (Date Picker)</h2>
					</div>
					<div
						className={cn(
							'rounded-lg p-4 border',
							'flex items-center justify-center'
						)}
					>
						<JalaliDatePicker />
					</div>
				</TabsContent>

				<TabsContent
					value='range-picker'
					className='flex flex-col items-center'
				>
					<div className='flex items-center justify-between w-full mb-4'>
						<OpenInV0Button
							name='jalali-date-picker-with-range'
							className='w-fit'
						/>
						<h2 className='text-sm font-medium'>
							انتخاب محدوده (Range Picker)
						</h2>
					</div>
					<div
						className={cn(
							'rounded-lg p-4 border',
							'flex items-center justify-center'
						)}
					>
						<JalaliDatePickerWithRange />
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
