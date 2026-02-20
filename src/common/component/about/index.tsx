'use client'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
	const router = useRouter()
	return (
		<div className="relative w-full">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-40">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 px-6 pt-32 pb-20 md:px-12">
				<div className="mx-auto max-w-6xl">
					{/* Grid Layout */}
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
						{/* Left Column: Image */}
						<div className="relative group flex items-center justify-center">
							{/* Decorative Glow */}
							<div className="absolute -inset-4 bg-indigo-600/20 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

							{/* Image Container */}
							<div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-2xl">
								<Image
									width={500}
									height={500}
									alt="Professional Portrait"
									className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
									src="/about-portrait.jpg"
								/>

								{/* Status Badge */}
								<div className="absolute bottom-6 left-6 right-6 p-4 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10">
									<div className="flex items-center gap-3">
										<div className="relative flex items-center justify-center h-3 w-3">
											{/* Ping Effect */}
											<span className="absolute inline-flex h-full w-full rounded-full bg-[#6764f2] opacity-75 animate-ping"></span>

											{/* Solid Center Dot */}
											<span className="relative inline-flex h-3 w-3 rounded-full bg-[#6764f2]"></span>
										</div>
										<div>
											<p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
												Status
											</p>
											<p className="text-sm font-medium text-white">
												Available for Junior / Fresher Opportunities
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Content */}
						<div className="flex flex-col gap-8">
							{/* Header */}
							<div className="space-y-4">
								<div className="flex items-center gap-2 text-indigo-400 font-bold tracking-widest text-xs uppercase">
									<span className="h-px w-8 bg-indigo-600" />
									About Me
								</div>

								<h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
									Turning Ideas into <span className="bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
										Scalable Applications
									</span>
								</h1>
							</div>

							{/* Description */}
							<div className="space-y-6 text-slate-400 leading-relaxed text-base md:text-lg">
								<p>
									I am a passionate software developer at the beginning of my professional journey.
									I focus on building solid foundations in Full-stack development and writing clean, maintainable code.
								</p>

								<p>
									My goal is to grow into a strong engineer by solving real-world problems, understanding system design fundamentals,
									and continuously improving through hands-on projects. I value discipline, consistency, and long-term growth over shortcuts.
								</p>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-2 gap-4">
								<div className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-600/30 transition-colors">
									<span className="text-3xl font-black text-white tracking-tight">
										2025
									</span>
									<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Software Engineering Graduate
									</span>
								</div>

								<div className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-600/30 transition-colors">
									<span className="text-3xl font-black text-white tracking-tight">
										Daily
									</span>
									<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Coding & Learning Habit
									</span>
								</div>
							</div>

							{/* CTA and Social Links */}
							<div className="flex sm:flex-row align-middle items-center sm:items-center gap-6 pt-4">
								<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors group cursor-pointer"
									onClick={() => router.push('/contact')}
								>
									Contact Me
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-2 w-2 group-hover:translate-x-1 transition-transform' />
								</button>

								<div className="flex items-center gap-4">
									<Link
										href="https://github.com/thtung-bomb"
										target='_blank'
										className="h-11 w-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-white/10"
										aria-label="GitHub"
									>
										<FontAwesomeIcon icon={faGithub} className='size-5' />
									</Link>

									<Link
										href="https://www.linkedin.com/in/thanhtung35/"
										target="_blank"
										className="h-11 w-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-white/10"
										aria-label="LinkedIn"
									>
										<FontAwesomeIcon icon={faLinkedin} className='size-5' />
									</Link>

									<Link
										href="https://mail.google.com/mail/?view=cm&to=thanhtung3523@gmail.com"
										target="_blank"
										className="h-11 w-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-white/10"
										aria-label="Email"
									>
										<FontAwesomeIcon icon={faEnvelope} className='size-5' />
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Expertise Section */}
					<div className="mt-24 pt-20 border-t border-white/10">
						<h2 className="text-2xl md:text-3xl font-black text-white mb-10">
							Core Expertise
						</h2>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{[
								{
									title: 'Frontend Development',
									description:
										'Building responsive user interfaces using React, Next.js, and TypeScript with clean and maintainable structure.',
								},
								{
									title: 'Backend Fundamentals',
									description:
										'Developing RESTful APIs using Golang and working with relational databases.',
								},
								{
									title: 'Problem Solving',
									description:
										'Strong foundation in data structures, algorithms, and logical thinking to approach real-world challenges.',
								},
								{
									title: 'Project-Based Learning',
									description:
										'Actively building full-stack projects to improve architecture thinking and production-level mindset.',
								},
								{
									title: 'Clean Code Practices',
									description:
										'Writing readable, structured, and scalable code with attention to naming, modularity, and reusability.',
								},
								{
									title: 'Continuous Improvement',
									description:
										'Committed to long-term growth through disciplined learning, feedback, and consistent daily practice.',
								},
							].map((item, index) => (
								<div
									key={index}
									className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-indigo-600/30 transition-colors"
								>
									<h3 className="text-lg font-bold text-white mb-2">
										{item.title}
									</h3>
									<p className="text-sm text-slate-400">
										{item.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
