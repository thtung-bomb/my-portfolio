'use client';

import { faBars, faTerminal, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();


	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Projects', href: '/projects' },
		{ label: 'Skills', href: '/skills' },
		{ label: 'Contact', href: '/contact' },
	];

	return (
		<header className="fixed top-0 z-50 w-full">
			<nav className="mx-auto max-w-6xl px-6 py-8">
				<div className="flex items-center justify-between rounded-4xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">
					{/* Logo */}
					<div className="flex items-center gap-2">
						<div className="flex size-8 items-center justify-center rounded-full bg-indigo-600 ">
							<FontAwesomeIcon icon={faTerminal} className='text-white' />
						</div>
						<span className="text-lg font-bold tracking-tight text-white">
							ThanhTungPortfolio
						</span>
					</div>

					{/* Desktop Navigation Links */}
					<div className="hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className={`text-sm font-medium transition-all duration-300 ${pathname === link.href
									? 'bg-[#6764f2] bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(99,102,241,0.6)] underline underline-offset-4'
									: 'text-slate-400 hover:text-white'
									}`}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Right Section - Button and Avatar */}
					<div className="flex items-center gap-4">
						<button className="rounded-4xl cursor-pointer bg-[#6764f2] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#6764f2]/60"
							onClick={() => window.open('/resume.pdf', '_blank')}
						>
							My Resume
						</button>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden"
							onClick={() => setIsOpen(!isOpen)}
							aria-label="Toggle menu"
						>
							{isOpen ? (
								<FontAwesomeIcon icon={faX} className='size-6 text-amber-50' />
							) : (
								<FontAwesomeIcon icon={faBars} className='size-6 text-[#6764f2]' />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Navigation Menu */}
				{isOpen && (
					<div className="mt-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md md:hidden">
						<div className="flex flex-col gap-4 px-6 py-4">
							{navLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									className={`text-sm font-medium transition-colors ${link.label === 'Home'
										? 'bg-linear-to-r from-indigo-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]'
										: 'text-slate-400 hover:text-white'
										}`}
									onClick={() => setIsOpen(false)}
								>
									{link.label}
								</a>
							))}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
