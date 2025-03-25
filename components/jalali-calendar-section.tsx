'use client'

import React from 'react'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import { ShikiStyles } from '@/components/ui/shiki-code-block'
import { JalaliTabs } from './jalali-calendar/jalali-tabs'
import { JalaliTabContent } from './jalali-calendar/jalali-tab-content'
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
					<JalaliTabs defaultValue='calendar'>
						<JalaliTabContent
							value='calendar'
							componentName='jalali-calendar'
							title='(Jalali Calendar) تقویم جلالی'
							codeContent={CALENDAR_CODE}
							previewComponent={<JalaliCalendar />}
						/>

						<JalaliTabContent
							value='date-picker'
							componentName='jalali-date-picker'
							title='(Date Picker) انتخاب تاریخ'
							codeContent={DATE_PICKER_CODE}
							previewComponent={<JalaliDatePicker />}
						/>

						<JalaliTabContent
							value='range-picker'
							componentName='jalali-date-picker-with-range'
							title='(Range Picker) انتخاب محدوده'
							codeContent={DATE_PICKER_RANGE_CODE}
							previewComponent={<JalaliDatePickerWithRange />}
						/>
					</JalaliTabs>
				</div>
			</div>
		</>
	)
}
