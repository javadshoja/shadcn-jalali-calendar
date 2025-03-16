'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import { ShikiStyles } from '@/components/ui/shiki-code-block'
import { ComponentPreview } from './jalali-calendar/component-preview'
import {
	CALENDAR_CODE,
	DATE_PICKER_CODE,
	DATE_PICKER_RANGE_CODE
} from './jalali-calendar/code-snippets'

export default function JalaliCalendarSection() {
	return (
		<>
			<ShikiStyles />
			<div className='w-full overflow-y-auto'>
				<div className='w-full max-w-lg mx-auto'>
					<Tabs defaultValue='calendar' className='w-full'>
						<TabsList className='grid w-full grid-cols-3 mb-4'>
							<TabsTrigger value='range-picker'>انتخاب محدوده</TabsTrigger>
							<TabsTrigger value='date-picker'>انتخاب تاریخ</TabsTrigger>
							<TabsTrigger value='calendar'>تقویم پایه</TabsTrigger>
						</TabsList>

						{/* Calendar Tab */}
						<TabsContent value='calendar'>
							<ComponentPreview
								componentName='jalali-calendar'
								title='(Jalali Calendar) تقویم جلالی'
								codeContent={CALENDAR_CODE}
								previewComponent={<JalaliCalendar />}
							/>
						</TabsContent>

						{/* Date Picker Tab */}
						<TabsContent value='date-picker'>
							<ComponentPreview
								componentName='jalali-date-picker'
								title='(Date Picker) انتخاب تاریخ'
								codeContent={DATE_PICKER_CODE}
								previewComponent={<JalaliDatePicker />}
							/>
						</TabsContent>

						{/* Range Picker Tab */}
						<TabsContent value='range-picker'>
							<ComponentPreview
								componentName='jalali-date-picker-with-range'
								title='(Range Picker) انتخاب محدوده'
								codeContent={DATE_PICKER_RANGE_CODE}
								previewComponent={<JalaliDatePickerWithRange />}
							/>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	)
}
