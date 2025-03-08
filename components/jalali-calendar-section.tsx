'use client'

import { OpenInV0Button } from '@/components/open-in-v0-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import React, { Suspense, lazy } from 'react'
// Lazy-loaded code content components to improve performance
const CalendarCode = lazy(() =>
	Promise.resolve({
		default: () => (
			<pre className='p-4 border rounded-lg overflow-auto text-sm bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 max-h-[650px]'>
				<code>{`import { JalaliCalendar } from '~/components/ui/jalali-calendar'

export default function Home() {
 const [date, setDate] = useState<Date | undefined>(new Date())

 return (
  <JalaliCalendar
	 mode='single'
	 selected={date}
	 onSelect={setDate}
	 className='rounded-md border'
	/>
 )
}
`}</code>
			</pre>
		)
	})
)

const DatePickerCode = lazy(() =>
	Promise.resolve({
		default: () => (
			<pre className='p-4 border rounded-lg overflow-auto text-sm bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 max-h-[650px]'>
				<code>{`'use client'

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

export { JalaliDatePicker }`}</code>
			</pre>
		)
	})
)

const DatePickerRangeCode = lazy(() =>
	Promise.resolve({
		default: () => (
			<pre className='p-4 border rounded-lg overflow-auto text-sm bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-50 max-h-[650px]'>
				<code>{`'use client'

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

// Simple interface for our component
interface MyDateRange {
	from: Date
	to?: Date | undefined
}

const JalaliDatePickerWithRange = ({
	className
}: React.HTMLAttributes<HTMLDivElement>) => {
	const [fromDate, setFromDate] = React.useState<Date | undefined>(new Date())
	const [toDate, setToDate] = React.useState<Date | undefined>(addDays(new Date(), 20))

	// Construct our date range object
	const dateRange = fromDate
		? {
				from: fromDate,
				to: toDate
		  }
		: undefined

	// Handle selection from the calendar
	const handleSelect = (range: any) => {
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
							'w-[300px] justify-start text-left font-normal',
							!fromDate && 'text-muted-foreground'
						)}
					>
						<CalendarIcon />
						{fromDate ? (
							toDate ? (
								<>
									{format(fromDate, 'dd LLLL y')} -{' '}
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
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export { JalaliDatePickerWithRange }`}</code>
			</pre>
		)
	})
)

// Loading placeholder component
const CodeLoadingPlaceholder = () => (
	<div className='p-4 border rounded-lg bg-gray-100 dark:bg-zinc-900 animate-pulse h-[400px] w-full'></div>
)

export default function JalaliCalendarSection() {
	// Use useEffect to ensure this only runs on the client
	const [activeCodeTabs, setActiveCodeTabs] = React.useState({
		calendar: false,
		datePicker: false,
		rangePicker: false
	})

	return (
		<div className='w-full overflow-y-auto'>
			<div className='w-full max-w-lg mx-auto'>
				<Tabs defaultValue='calendar' className='w-full'>
					<TabsList className='grid w-full grid-cols-3 mb-4'>
						<TabsTrigger value='range-picker'>انتخاب محدوده</TabsTrigger>
						<TabsTrigger value='date-picker'>انتخاب تاریخ</TabsTrigger>
						<TabsTrigger value='calendar'>تقویم پایه</TabsTrigger>
					</TabsList>

					<TabsContent
						value='calendar'
						className='flex flex-col items-center space-y-8'
					>
						<div className='flex items-center justify-between w-full mb-4'>
							<OpenInV0Button name='jalali-calendar' className='w-fit' />
							<h2 className='text-sm font-medium'>
								(Jalali Calendar) تقویم جلالی
							</h2>
						</div>

						{/* Preview and Code tabs */}
						<Tabs
							defaultValue='preview'
							className='w-full'
							onValueChange={value => {
								if (value === 'code') {
									setActiveCodeTabs(prev => ({ ...prev, calendar: true }))
								}
							}}
						>
							<TabsList
								className='w-full justify-start rounded-none border-b bg-transparent p-0'
								dir='rtl'
							>
								<TabsTrigger
									value='preview'
									className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
								>
									پیش‌نمایش
								</TabsTrigger>
								<TabsTrigger
									value='code'
									className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
								>
									کد
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value='preview'
								className='flex flex-col items-center'
							>
								<div
									className={cn(
										'rounded-lg p-4 border',
										'flex items-center justify-center'
									)}
								>
									<JalaliCalendar />
								</div>
							</TabsContent>

							<TabsContent value='code' className='flex flex-col'>
								<Suspense fallback={<CodeLoadingPlaceholder />}>
									{activeCodeTabs.calendar && <CalendarCode />}
								</Suspense>
							</TabsContent>
						</Tabs>
					</TabsContent>

					<TabsContent
						value='date-picker'
						className='flex flex-col items-center space-y-8'
					>
						<div className='flex items-center justify-between w-full mb-4'>
							<OpenInV0Button name='jalali-date-picker' className='w-fit' />
							<h2 className='text-sm font-medium'>
								(Date Picker) انتخاب تاریخ
							</h2>
						</div>

						{/* Preview and Code tabs */}
						<Tabs
							defaultValue='preview'
							className='w-full'
							onValueChange={value => {
								if (value === 'code') {
									setActiveCodeTabs(prev => ({ ...prev, datePicker: true }))
								}
							}}
						>
							<TabsList
								className='w-full justify-start rounded-none border-b bg-transparent p-0'
								dir='rtl'
							>
								<TabsTrigger
									value='preview'
									className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
								>
									پیش‌نمایش
								</TabsTrigger>
								<TabsTrigger
									value='code'
									className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
								>
									کد
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value='preview'
								className='flex flex-col items-center'
							>
								<div
									className={cn(
										'rounded-lg p-4 border',
										'flex items-center justify-center'
									)}
								>
									<JalaliDatePicker />
								</div>
							</TabsContent>

							<TabsContent value='code' className='flex flex-col'>
								<Suspense fallback={<CodeLoadingPlaceholder />}>
									{activeCodeTabs.datePicker && <DatePickerCode />}
								</Suspense>
							</TabsContent>
						</Tabs>
					</TabsContent>

					<TabsContent
						value='range-picker'
						className='flex flex-col items-center space-y-8'
					>
						<div className='flex items-center justify-between w-full mb-4'>
							<OpenInV0Button
								name='jalali-date-picker-with-range'
								className='w-fit'
							/>
							<h2 className='text-sm font-medium'>
								(Range Picker) انتخاب محدوده
							</h2>
						</div>

						{/* Preview and Code tabs */}
						<Tabs
							defaultValue='preview'
							className='w-full'
							onValueChange={value => {
								if (value === 'code') {
									setActiveCodeTabs(prev => ({ ...prev, rangePicker: true }))
								}
							}}
						>
							<TabsList
								className='w-full justify-start rounded-none border-b bg-transparent p-0'
								dir='rtl'
							>
								<TabsTrigger
									value='preview'
									className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
								>
									پیش‌نمایش
								</TabsTrigger>
								<TabsTrigger
									value='code'
									className='relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none'
								>
									کد
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value='preview'
								className='flex flex-col items-center'
							>
								<div
									className={cn(
										'rounded-lg p-4 border',
										'flex items-center justify-center'
									)}
								>
									<JalaliDatePickerWithRange />
								</div>
							</TabsContent>

							<TabsContent value='code' className='flex flex-col'>
								<Suspense fallback={<CodeLoadingPlaceholder />}>
									{activeCodeTabs.rangePicker && <DatePickerRangeCode />}
								</Suspense>
							</TabsContent>
						</Tabs>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}
