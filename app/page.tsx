import localFont from 'next/font/local'
import JalaliCalendarSection from '@/components/jalali-calendar-section'
import ThemeMenuButton from '@/components/theme-menu-button'
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'
import { ArrowDownToLine } from 'lucide-react'

// You can add this font later or use a Google font alternative
const calSans = { className: 'font-bold' }

export default function Home() {
	return (
		<>
			<main className='relative mx-auto flex h-svh max-w-[90vw] items-center justify-center overflow-hidden sm:max-w-screen-lg sm:p-10'>
				<GridPattern
					squares={[
						[4, 4],
						[5, 1],
						[8, 2],
						[5, 3],
						[5, 5],
						[10, 10],
						[12, 15],
						[15, 10],
						[10, 15],
						[15, 10],
						[10, 15],
						[15, 10]
					]}
					className={cn(
						'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)] sm:[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]',
						'inset-x-0 skew-y-12'
					)}
				/>
				<ThemeMenuButton className='fixed right-[5vw] top-5 flex-1 md:right-5' />
				<div className='z-10 flex w-full flex-col items-center rounded-lg border px-5 py-8 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 sm:py-12'>
					<h1
						className={cn(
							'mb-3 w-full text-3xl font-bold text-center sm:w-96',
							calSans.className
						)}
					>
						تقویم جلالی
						<span className='block text-lg mt-1'>Jalali Calendar</span>
					</h1>
					<p className='mb-4 w-full text-center text-sm sm:w-96'>
						کامپوننت‌های تقویم جلالی برای استفاده در پروژه‌های ری‌اکت و
						نکست‌جی‌اس
						<span className='block mt-1'>
							Jalali (Persian) calendar components for React and Next.js using
							shadcn/ui
						</span>
					</p>

					<div className='mb-8 p-3 border border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-900 rounded-md text-amber-800 dark:text-amber-200 text-xs max-w-md'>
						<div className='flex items-center gap-2'>
							<ArrowDownToLine className='h-4 w-4 flex-shrink-0' />
							<p>
								<strong>Important:</strong> Please install the latest version of
								react-day-picker for these components to work properly:
								<code className='block mt-1 bg-amber-100 dark:bg-amber-900 p-1 rounded'>
									pnpm add react-day-picker@latest date-fns-jalali
								</code>
							</p>
						</div>
					</div>

					{/* Calendar components section */}
					<div className='w-full'>
						<JalaliCalendarSection />
					</div>
				</div>
			</main>

			<footer className='fixed bottom-4 left-1/2 w-screen -translate-x-1/2'>
				<p className='text-center text-sm text-muted-foreground'>
					ساخته شده با{' '}
					<a
						href='https://ui.shadcn.com'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						shadcn/ui
					</a>
					. کد منبع در{' '}
					<a
						href='https://github.com/your-username/shadcn-jalali-calendar'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>
				</p>
			</footer>
		</>
	)
}
