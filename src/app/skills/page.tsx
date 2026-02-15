'use client';


const skillsData = [
	{
		category: 'Frontend Development',
		icon: '💻',
		skills: [
			{ name: 'React / Next.js', level: 80 },
			{ name: 'TypeScript', level: 75 },
			{ name: 'Tailwind CSS', level: 85 },
		],
		tags: ['Responsive Design', 'Component Architecture', 'REST API Integration'],
	},
	{
		category: 'Backend Fundamentals',
		icon: '⚙️',
		skills: [
			{ name: 'Node.js', level: 70 },
			{ name: 'Express.js', level: 70 },
			{ name: 'PostgreSQL / SQL', level: 65 },
		],
		tags: ['Python', 'Prisma', 'Basic Authentication', 'CRUD Systems'],
	},
	{
		category: 'Tools & Workflow',
		icon: '🛠️',
		skills: [
			{ name: 'Git / GitHub', level: 85 },
			{ name: 'Figma (UI Implementation)', level: 70 },
			{ name: 'Debugging & Testing Basics', level: 65 },
		],
		tags: ['VS Code', 'Bun / npm', 'Postman', 'Agile Basics'],
	},
];

export default function SkillsPage() {
	return (
		<main className="relative min-h-screen w-full overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
			<div className="pointer-events-none absolute inset-0 opacity-30">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.08) 1px, transparent 1px)',
						backgroundSize: '40px 40px',
					}}
				/>
			</div>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center justify-center px-4 py-20">
				{/* Header Section */}
				<div className="mb-16 max-w-3xl text-center">
					<h1 className="mb-6 text-5xl font-black leading-tight tracking-tighter text-white md:text-6xl">
						Technical{' '}
						<span className="bg-linear-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text">
							Expertise
						</span>
					</h1>
					<p className="text-base font-medium leading-relaxed text-slate-400 md:text-lg">
						I am building strong foundations in modern web development,
						focusing on clean code, scalable structure, and real-world project experience.
						Continuous learning and hands-on practice drive my growth.
					</p>
				</div>

				{/* Skills Grid */}
				<div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
					{skillsData.map((skillGroup) => (
						<div
							key={skillGroup.category}
							className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-indigo-600/50 hover:shadow-lg hover:shadow-indigo-600/20"
						>
							{/* Icon and Title */}
							<div className="mb-8 flex items-center gap-4">
								<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-600/20 text-2xl">
									{skillGroup.icon}
								</div>
								<h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
							</div>

							{/* Skills with Progress Bars */}
							<div className="space-y-6 mb-8">
								{skillGroup.skills.map((skill) => (
									<div key={skill.name} className="space-y-2">
										<div className="flex items-center justify-between">
											<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
												{skill.name}
											</span>
											<span className="text-xs font-bold text-indigo-400">{skill.level}%</span>
										</div>
										<div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
											<div
												className="h-full rounded-full bg-linear-gradient-to-r from-indigo-600 to-indigo-500 transition-all duration-500"
												style={{ width: `${skill.level}%` }}
											/>
										</div>
									</div>
								))}
							</div>

							{/* Tags */}
							<div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
								{skillGroup.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-lg bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-600/20 transition-colors hover:bg-indigo-600/20"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="max-w-3xl text-center">
					<div className="rounded-2xl border border-indigo-600/30 bg-indigo-600/10 p-12 backdrop-blur-sm">
						<h2 className="mb-4 text-3xl font-bold text-white">Let&#39;s Build Together</h2>
						<p className="mb-8 text-slate-400">
							Interested in collaborating? I&#39;m always excited to work on innovative projects that push the boundaries of web development.
						</p>
						<button className="group flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-10 py-4 font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 mx-auto">
							Get in Touch
							<svg
								className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
					</div>
				</div>
			</div>
		</main>
	);
}
