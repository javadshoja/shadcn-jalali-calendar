'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns-jalali'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { DateRange } from 'react-day-picker'

const JalaliDatePickerWithRange = ({
	className
}: React.HTMLAttributes<HTMLDivElement>) => {
	// Use a simpler approach to state to avoid type issues
	const [fromDate, setFromDate] = React.useState<Date | undefined>(undefined)
	const [toDate, setToDate] = React.useState<Date | undefined>(undefined)

	React.useEffect(() => {
		// Initialize dates only on the client side
		if (!fromDate) {
			setFromDate(new Date())
		}
		if (!toDate) {
			setToDate(addDays(new Date(), 20))
		}
	}, [fromDate, toDate])

	// Construct our date range object
	const dateRange = fromDate
		? {
				from: fromDate,
				to: toDate
		  }
		: undefined

	// Handle selection from the calendar
	const handleSelect = (range: DateRange) => {
		if (range?.from) setFromDate(range.from)
		if (range?.to) setToDate(range.to)
		else if (range?.from && !range.to) setToDate(undefined)
	}

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						dir='rtl'
						variant='outline'
						className={cn(
							'justify-start text-left font-normal',
							!fromDate && 'text-muted-foreground'
						)}
					>
						<CalendarIcon />
						{fromDate ? (
							toDate ? (
								<>
									{format(fromDate, 'dd LLLL y')} - ``
									{format(toDate, 'dd LLLL y')}
								</>
							) : (
								format(fromDate, 'LLL dd, y')
							)
						) : (
							<span>انتخاب تاریخ</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<JalaliCalendar
						mode='range'
						defaultMonth={fromDate}
						selected={dateRange}
						onSelect={handleSelect}
						numberOfMonths={2}
						required
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export { JalaliDatePickerWithRange }
