'use client'

import React from 'react'
import { OpenInV0Button } from '@/components/open-in-v0-button'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'

export default function JalaliCalendarSection() {
	// Use useEffect to ensure this only runs on the client
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	// Only render the calendar components after client-side hydration
	if (!mounted) {
		return (
			<div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
				<div className='flex items-center justify-between'>
					<h2 className='text-sm text-muted-foreground sm:pl-3'>
						Jalali Calendar Components
					</h2>
					<div className='flex gap-2'>
						<span className='w-20 h-8 bg-gray-200 animate-pulse rounded'></span>
						<span className='w-20 h-8 bg-gray-200 animate-pulse rounded'></span>
						<span className='w-20 h-8 bg-gray-200 animate-pulse rounded'></span>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center gap-6 min-h-[400px] relative p-4'>
					<div className='w-full h-32 bg-gray-100 animate-pulse rounded'></div>
					<div className='w-full h-32 bg-gray-100 animate-pulse rounded'></div>
					<div className='w-full h-32 bg-gray-100 animate-pulse rounded'></div>
				</div>
			</div>
		)
	}

	return (
		<div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
			<div className='flex items-center justify-between'>
				<h2 className='text-sm text-muted-foreground sm:pl-3'>
					Jalali Calendar Components
				</h2>
				<div className='flex gap-2'>
					<OpenInV0Button name='jalali-calendar' className='w-fit' />
					<OpenInV0Button name='jalali-date-picker' className='w-fit' />
					<OpenInV0Button
						name='jalali-date-picker-with-range'
						className='w-fit'
					/>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center gap-6 min-h-[400px] relative p-4'>
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-medium'>Jalali Calendar</h3>
					<div className='flex justify-center'>
						<JalaliCalendar />
					</div>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-medium'>Jalali Date Picker</h3>
					<div className='flex justify-center'>
						<JalaliDatePicker />
					</div>
				</div>
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-medium'>Jalali Date Picker with Range</h3>
					<div className='flex justify-center'>
						<JalaliDatePickerWithRange />
					</div>
				</div>
			</div>
		</div>
	)
}
