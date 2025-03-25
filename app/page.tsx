import JalaliCalendarSection from '@/components/jalali-calendar-section'
import ThemeMenuButton from '@/components/theme-menu-button'
import GridPattern from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'
import { Info } from 'lucide-react'

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
				<div className='z-10 flex w-full flex-col items-center rounded-lg border px-5  backdrop-blur-md supports-[backdrop-filter]:bg-background/40 py-2 sm:py-4'>
					<div className='grid grid-cols-2 gap-4 h-[600px] w-full'>
						<div className='flex items-start flex-col py-2 w-full'>
							<h1 className='mb-3 w-full text-3xl font-bold text-center sm:w-96'>
								تقویم جلالی
								<span className='block text-lg mt-1'>Jalali Calendar</span>
							</h1>
							<p className='mb-4 w-full text-center text-sm sm:w-96'>
								کامپوننت‌های تقویم جلالی برای استفاده در پروژه‌های ری‌اکت و
								نکست‌جی‌اس
								<span className='block mt-1'>
									Jalali (Persian) calendar components for React and Next.js
									using shadcn/ui
								</span>
							</p>
						</div>

						{/* Calendar components section */}
						<div className='w-full'>
							<JalaliCalendarSection />
						</div>
					</div>
				</div>
			</main>

			<footer className='fixed bottom-4 left-1/2 w-screen -translate-x-1/2'>
				<p className='text-center text-sm text-muted-foreground'>
					ساخته شده توسط{' '}
					<a
						href='https://jbrave.ir/'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						javadshoja
					</a>{' '}
					کد منبع در{' '}
					<a
						href='https://github.com/javadshoja/shadcn-jalali-calender'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						GitHub
					</a>{' '}
					با الهام از سایت{' '}
					<a
						href='https://linguatime.nainglinnkhant.com/'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						Lingua Time
					</a>
				</p>
			</footer>
		</>
	)
}
