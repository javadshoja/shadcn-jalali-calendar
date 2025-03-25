'use client'

import * as React from 'react'
import { format } from 'date-fns-jalali'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'

function JalaliDatePicker() {
	const [date, setDate] = React.useState<Date>()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					dir='rtl'
					variant='outline'
					className={cn(
						'w-[240px] justify-start text-left font-normal',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon />
					{date ? format(date, 'PPP') : <span>انتخاب تاریخ</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-auto p-0' align='start'>
				<JalaliCalendar mode='single' selected={date} onSelect={setDate} />
			</PopoverContent>
		</Popover>
	)
}

export { JalaliDatePicker }
