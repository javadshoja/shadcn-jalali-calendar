import { Vazirmatn } from 'next/font/google'

const vazirmatn = Vazirmatn({
	variable: '--font-vazirmatn',
	subsets: ['arabic']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fa' dir='rtl'>
			<body
				className={`${vazirmatn.variable} ${vazirmatn.className} antialiased`}
			>
				<div className='transition-property: transform, border-radius; transition-duration: 0.5s; transition-timing-function: cubic-bezier(0.32, 0.72, 0, 1);'>
					{children}
				</div>
			</body>
		</html>
	)
}
