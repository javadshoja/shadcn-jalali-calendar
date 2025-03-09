'use client'

import { OpenInV0Button } from '@/components/open-in-v0-button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { JalaliCalendar } from '@/registry/new-york/jalali-calendar/jalali-calendar'
import { JalaliDatePickerWithRange } from '@/registry/new-york/jalali-date-picker-with-range/jalali-date-picker-with-range'
import { JalaliDatePicker } from '@/registry/new-york/jalali-date-picker/jalali-date-picker'
import React, { Suspense, lazy } from 'react'
import { ShikiCodeBlock, ShikiStyles } from '@/components/ui/shiki-code-block'
// Lazy-loaded code content components to improve performance
const CalendarCode = lazy(() =>
	Promise.resolve({
		default: () => (
			<ShikiCodeBlock
				language='tsx'
				code={`'use client'

import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { fa } from 'date-fns/locale'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export type JalaliCalendarProps = React.ComponentProps<typeof DayPicker>

function JalaliCalendar({
	className,
	classNames,
	showOutsideDays = true,
	...props
}: JalaliCalendarProps) {
	return (
		<DayPicker
			dir="rtl"
			locale={fa}
			showOutsideDays={showOutsideDays}
			className={cn('p-3', className)}
			classNames={{
				months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
				month: 'space-y-4',
				caption: 'flex justify-between pt-1 relative items-center',
				caption_label: 'text-sm font-medium',
				nav: 'space-x-1 flex items-center',
				nav_button: cn(
					buttonVariants({ variant: 'outline' }),
					'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100'
				),
				nav_button_previous: 'absolute left-1',
				nav_button_next: 'absolute right-1',
				table: 'w-full border-collapse space-y-1',
				head_row: 'flex',
				head_cell:
					'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
				row: 'flex w-full mt-2',
				cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
				day: cn(
					buttonVariants({ variant: 'ghost' }),
					'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
				),
				day_range_end: 'day-range-end',
				day_selected:
					'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
				day_today: 'bg-accent text-accent-foreground',
				day_outside:
					'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
				day_disabled: 'text-muted-foreground opacity-50',
				day_range_middle:
					'aria-selected:bg-accent aria-selected:text-accent-foreground',
				day_hidden: 'invisible',
				...classNames
			}}
			components={{
				IconLeft: ({ ...props }) =>
					props.orientation === 'left' ? (
						<ChevronRight {...props} className='h-4 w-4' />
					) : (
						<ChevronLeft {...props} className='h-4 w-4' />
					)
			}}
			{...props}
		/>
	)
}

JalaliCalendar.displayName = 'JalaliCalendar'

export { JalaliCalendar }`}
			/>
		)
	})
)

const DatePickerCode = lazy(() =>
	Promise.resolve({
		default: () => (
			<ShikiCodeBlock
				language='tsx'
				code={`'use client'

import * as React from 'react'
import { format } from 'date-fns-jalali'
import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { JalaliCalendar } from '@/components/ui/jalali-calendar'
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
					variant={'outline'}
					className={cn(
						'w-[240px] justify-start text-left font-normal',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, 'PPP') : <span>انتخاب تاریخ</span>}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<JalaliCalendar
					mode="single"
					selected={date}
					onSelect={setDate}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}`}
			/>
		)
	})
)

const DatePickerRangeCode = lazy(() =>
	Promise.resolve({
		default: () => (
			<ShikiCodeBlock
				language='tsx'
				code={`'use client'

import * as React from 'react'
import { addDays, format } from 'date-fns-jalali'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { JalaliCalendar } from '@/components/ui/jalali-calendar'
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

export { JalaliDatePickerWithRange }`}
			/>
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
		</>
	)
}
