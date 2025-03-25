import type { Metadata } from 'next'
import { Geist, Geist_Mono, Vazirmatn } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

const vazirmatn = Vazirmatn({
	variable: '--font-vazirmatn',
	subsets: ['arabic']
})

export const metadata: Metadata = {
	title: 'تقویم جلالی - shadcn/ui',
	description: 'Jalali (Persian) Calendar Components powered by shadcn/ui'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fa' dir='rtl' suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} ${vazirmatn.className} antialiased`}
				suppressHydrationWarning
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
