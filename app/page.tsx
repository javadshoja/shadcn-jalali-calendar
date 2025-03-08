import JalaliCalendarSection from '@/components/jalali-calendar-section'
import ThemeMenuButton from '@/components/theme-menu-button'
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

export default function Home() {
	return (
		<>
			<main className='relative mx-auto flex h-svh max-w-[90vw] items-center justify-center overflow-hidden sm:max-w-screen-md sm:p-10'>
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
					<h1 className='mb-3 w-full text-3xl font-bold text-center sm:w-96 '>
						تقویم جلالی
						<span className='block text-lg mt-1'>Jalali Calendar</span>
					</h1>
					<p className='mb-8 w-full text-center text-sm sm:w-96'>
						کامپوننت‌های تقویم جلالی برای استفاده در پروژه‌های ری‌اکت و
						نکست‌جی‌اس
						<span className='block mt-1'>
							Jalali (Persian) calendar components for React and Next.js using
							shadcn/ui
						</span>
					</p>

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
