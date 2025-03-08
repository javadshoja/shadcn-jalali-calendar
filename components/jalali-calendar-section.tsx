'use client'

import React from 'react'
import { OpenInV0Button } from '@/components/open-in-v0-button'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'

export default function JalaliCalendarSection() {
	return (
		<div className='flex flex-col gap-8'>
			{/* Calendar Component */}
			<div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative'>
				<div className='flex items-center justify-between'>
					<h2 className='text-sm text-muted-foreground sm:pl-3'>
						تقویم جلالی (Jalali Calendar)
					</h2>
					<OpenInV0Button name='jalali-calendar' className='w-fit' />
				</div>
				<div className='flex items-center justify-center min-h-[400px] relative'>
					<div className='flex flex-col gap-4 items-center justify-center'>
						<h3 className='text-lg font-medium'>پایه (Basic)</h3>
						<JalaliCalendar />
					</div>
				</div>
			</div>

			{/* Date Picker Component */}
			<div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[250px] relative'>
				<div className='flex items-center justify-between'>
					<h2 className='text-sm text-muted-foreground sm:pl-3'>
						انتخابگر تقویم جلالی (Jalali Date Picker)
					</h2>
					<OpenInV0Button name='jalali-date-picker' className='w-fit' />
				</div>
				<div className='flex items-center justify-center min-h-[200px] relative'>
					<div className='flex flex-col gap-4 items-center justify-center'>
						<h3 className='text-lg font-medium'>
							انتخاب تاریخ (Date Selection)
						</h3>
						<JalaliDatePicker />
					</div>
				</div>
			</div>

			{/* Date Range Picker Component */}
			<div className='flex flex-col gap-4 border rounded-lg p-4 min-h-[250px] relative'>
				<div className='flex items-center justify-between'>
					<h2 className='text-sm text-muted-foreground sm:pl-3'>
						انتخابگر محدوده تقویم جلالی (Jalali Date Range Picker)
					</h2>
					<OpenInV0Button
						name='jalali-date-picker-with-range'
						className='w-fit'
					/>
				</div>
				<div className='flex items-center justify-center min-h-[200px] relative'>
					<div className='flex flex-col gap-4 items-center justify-center'>
						<h3 className='text-lg font-medium'>
							انتخاب محدوده تقویم (Date Range Selection)
						</h3>
						<JalaliDatePickerWithRange />
					</div>
				</div>
			</div>
		</div>
	)
}
