'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const skillsData = [
	{
		category: 'Frontend Development',
		number: '01',
		icon: '⬡',
		accent: 'from-indigo-500 to-violet-500',
		accentBg: 'bg-indigo-500/10',
		accentBorder: 'border-indigo-500/20',
		accentText: 'text-indigo-400',
		accentBar: 'from-indigo-500 to-violet-400',
		skills: [
			{ name: 'React / Next.js', level: 80 },
			{ name: 'TypeScript', level: 75 },
			{ name: 'Tailwind CSS', level: 85 },
		],
		tags: ['Responsive Design', 'Component Architecture', 'REST API Integration'],
	},
	{
		category: 'Backend Fundamentals',
		number: '02',
		icon: '⬡',
		accent: 'from-cyan-500 to-blue-500',
		accentBg: 'bg-cyan-500/10',
		accentBorder: 'border-cyan-500/20',
		accentText: 'text-cyan-400',
		accentBar: 'from-cyan-500 to-blue-400',
		skills: [
			{ name: 'Rust', level: 30 },
			{ name: 'Cargo', level: 30 },
			{ name: 'Postgres SQL', level: 50 },
		],
		tags: ['Rust', 'Cargo', 'Basic Authentication', 'CRUD Systems'],
	},
	{
		category: 'Tools & Workflow',
		number: '03',
		icon: '⬡',
		accent: 'from-violet-500 to-purple-500',
		accentBg: 'bg-violet-500/10',
		accentBorder: 'border-violet-500/20',
		accentText: 'text-violet-400',
		accentBar: 'from-violet-500 to-purple-400',
		skills: [
			{ name: 'Git / GitHub', level: 85 },
			{ name: 'Figma (UI Implementation)', level: 70 },
			{ name: 'Debugging & Testing Basics', level: 65 },
		],
		tags: ['VS Code', 'Bun / npm', 'Postman', 'Agile Basics'],
	},
];

const currentlyLearning = ['Rust', 'Docker', 'CI/CD Pipelines', 'System Design', 'gRPC', 'GraphQL'];

function AnimatedBar({ level, barGradient }: { level: number; barGradient: string }) {
	const [width, setWidth] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setTimeout(() => setWidth(level), 100);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [level]);

	return (
		<div ref={ref} className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
			<div
				className={`h-full rounded-full bg-linear-to-r ${barGradient} transition-all duration-700 ease-out`}
				style={{ width: `${width}%` }}
			/>
		</div>
	);
}

export default function SkillsPage() {
	const router = useRouter();
	const [mounted] = useState(true);

	return (
		<main className="relative min-h-screen w-full overflow-hidden bg-[#05050f]">

			{/* ── Background layer ─────────────────────────── */}
			<div className="pointer-events-none absolute inset-0">
				{/* dot grid */}
				<div
					className="absolute inset-0 opacity-40"
					style={{
						backgroundImage:
							'radial-gradient(circle at 1px 1px, rgba(103,100,242,0.07) 1px, transparent 0)',
						backgroundSize: '48px 48px',
					}}
				/>
				{/* center glow */}
				<div className="absolute left-1/2 top-0 h-125 w-200 -translate-x-1/2 rounded-full bg-indigo-600/8 blur-[120px]" />
				{/* side accent */}
				<div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/6 blur-[100px]" />
				<div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-cyan-600/6 blur-[100px]" />
			</div>

			{/* ── Page content ─────────────────────────────── */}
			<div className="relative z-10 mx-auto max-w-6xl px-6 py-28">

				{/* Section label */}
				<div
					className={`mb-6 flex justify-center transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
				>
					<span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-indigo-400">
						<span className="relative flex h-1.5 w-1.5">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
							<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
						</span>
						Technical Profile
					</span>
				</div>

				{/* Headline */}
				<div
					className={`mb-6 text-center transition-all duration-700 delay-100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
				>
					<h1 className="font-serif text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
						My Technical{' '}
						<span className="bg-linear-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
							Foundation
						</span>
					</h1>
				</div>

				{/* Subheading */}
				<div
					className={`mb-20 text-center transition-all duration-700 delay-150 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
				>
					<p className="mx-auto max-w-xl text-base font-normal leading-relaxed text-slate-400 md:text-lg">
						Building practical skills in modern web development — focusing on clean code, clear structure, and hands-on project experience.
					</p>
				</div>

				{/* Skills grid */}
				<div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{skillsData.map((group, i) => (
						<div
							key={group.category}
							className={`group relative hover:${group.accent} rounded-2xl border border-white/6 bg-white/3 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/12 hover:bg-white/5 hover:shadow-2xl delay-[${200 + i * 80}ms] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
						>
							{/* Card top accent line */}
							{/* <div className={`absolute inset-x-0 top-0 h-px rounded-t-2xl bg-linear-to-r ${group.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} /> */}

							{/* Card number watermark */}
							<span className="absolute right-6 top-5 font-mono text-4xl font-black text-white/4 select-none">
								{group.number}
							</span>

							{/* Category title */}
							<div className="mb-8 flex items-start gap-4">
								<div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${group.accentBg} border ${group.accentBorder}`}>
									<span className={`font-mono text-xl font-bold ${group.accentText}`}>
										{group.number}
									</span>
								</div>
								<div>
									<h3 className="text-base font-bold leading-tight tracking-tight text-white">
										{group.category}
									</h3>
									<p className={`mt-0.5 font-mono text-[11px] font-semibold uppercase tracking-widest ${group.accentText} opacity-70`}>
										{group.skills.length} skills
									</p>
								</div>
							</div>

							{/* Progress bars */}
							<div className="mb-8 space-y-5">
								{group.skills.map((skill) => (
									<div key={skill.name}>
										<div className="mb-2 flex items-center justify-between">
											<span className="text-xs font-semibold tracking-wide text-slate-400">
												{skill.name}
											</span>
											<span className={`font-mono text-xs font-bold ${group.accentText}`}>
												{skill.level}
												<span className="opacity-50">%</span>
											</span>
										</div>
										<AnimatedBar level={skill.level} barGradient={group.accentBar} />
									</div>
								))}
							</div>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 border-t border-white/5 pt-5">
								{group.tags.map((tag) => (
									<span
										key={tag}
										className={`rounded-md ${group.accentBg} border ${group.accentBorder} px-2.5 py-1 font-mono text-[11px] font-semibold ${group.accentText} transition-colors duration-200 hover:opacity-80`}
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* ── Currently Learning strip ─────────────── */}
				<div
					className={`mb-24 transition-all duration-700 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
				>
					<div className="rounded-2xl border border-white/6 bg-white/2 px-8 py-6">
						<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-center gap-3">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
								</span>
								<span className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-400">
									Currently Learning
								</span>
							</div>
							<div className="flex flex-wrap gap-3">
								{currentlyLearning.map((item) => (
									<span
										key={item}
										className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-emerald-400"
									>
										{item}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* ── CTA ──────────────────────────────────── */}
				<div
					className={`text-center transition-all duration-700 delay-600 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
				>
					<div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-12 backdrop-blur-sm">
						{/* glow behind */}
						<div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[80px]" />

						<div className="relative">
							<p className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
								Open to opportunities
							</p>
							<h2 className="mb-4 font-serif text-3xl font-black tracking-tight text-white md:text-4xl">
								Early in My Career. Serious About My Craft.
							</h2>
							<p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-slate-400">
								I&apos;m seeking a junior role where I can work on real systems, write clean code, and improve every day.
							</p>

							<div className="flex flex-wrap items-center justify-center gap-3">
								<button
									onClick={() => router.push('/contact')}
									className="hover:cursor-pointer group flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:shadow-indigo-600/50 hover:scale-[1.03]"
								>
									Get in Touch
									<svg
										className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											d="M13 7l5 5m0 0l-5 5m5-5H6"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
										/>
									</svg>
								</button>
								<button
									onClick={() => router.push('/projects')}
									className="rounded-xl border border-white/8 bg-white/4 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.07] cursor-pointer hover:scale-[1.02]"
								>
									View Projects
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}