// This is a server component
import * as React from 'react'
import JalaliCalendarSection from '@/components/jalali-calendar-section'

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
	return (
		<div className='max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8'>
			<header className='flex flex-col gap-1'>
				<h1 className='text-3xl font-bold tracking-tight'>
					Jalali Calendar Registry
				</h1>
				<p className='text-muted-foreground'>
					A custom registry for Jalali (Persian) calendar components using
					shadcn/ui.
				</p>
			</header>
			<main className='flex flex-col flex-1 gap-8'>
				{/* Load Jalali components */}
				<JalaliCalendarSection />
			</main>
		</div>
	)
}
