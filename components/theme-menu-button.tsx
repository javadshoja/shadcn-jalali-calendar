'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Check, Moon, Sun } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export interface ThemeMenuButtonProps {
	className?: string
}

export default function ThemeMenuButton({ className }: ThemeMenuButtonProps) {
	const { theme, setTheme } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className={cn('rounded-full', className)}
				>
					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme('light')} dir='rtl'>
					<Sun className='ml-2 h-4 w-4' />
					<span>روشن</span>
					{theme === 'light' && <Check className='ml-auto h-4 w-4' />}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('dark')} dir='rtl'>
					<Moon className='ml-2 h-4 w-4' />
					<span>تیره</span>
					{theme === 'dark' && <Check className='ml-auto h-4 w-4' />}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme('system')} dir='rtl'>
					<span className='ml-2'>💻</span>
					<span>سیستم</span>
					{theme === 'system' && <Check className='ml-auto h-4 w-4' />}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
