'use client'

import { ProjectCard } from "@/common/component";
import { useRouter } from "next/navigation";

const projects = [
	{
		id: 3,
		title: 'Tay Ninh Historical Sites Website',
		description:
			'A responsive website introducing historical landmarks in Tay Ninh. Applied SEO best practices including meta tags, structured headings, and sitemap optimization for improved search visibility.',
		image: '',
		technologies: ['Next.js', 'TailwindCSS', 'SEO Optimization'],
		github: 'https://github.com/thtung-bomb/SEP490_Travelogue_Frontend.git',
		live: '',
		icon: '🏛️',
	},
	{
		id: 1,
		title: 'Pregnancy Growth Tracking System',
		description:
			'A healthcare tracking web application that allows mothers to monitor pregnancy growth data in real-time. Built responsive, mobile-first UI and integrated RESTful APIs for dynamic health metrics visualization.',
		image: '',
		technologies: ['React', 'Next.js', 'TailwindCSS', 'REST API'],
		github: 'https://github.com/thtung-bomb/pregnancy-growth-tracking-system.git',
		live: '',
		icon: '🩺',
	},
	{
		id: 2,
		title: 'E-Learning Platform (Internship Project)',
		description:
			'An interactive online learning platform inspired by Udemy. Implemented complex state management using Redux-Saga and built modular reusable UI components integrated with RESTful APIs.',
		image: '',
		technologies: ['ReactJS', 'Redux-Saga', 'Styled Components'],
		github: '#',
		live: '',
		icon: '🎓',
	},
];

export default function ProjectsPage() {

	const navigate = useRouter()

	return (
		<div className="relative w-full">
			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_50%)]" />
				<div className="absolute top-0 right-0 h-96 w-96 bg-indigo-600/20 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-600/10 rounded-full blur-3xl" />
				<div className="pointer-events-none absolute inset-0 opacity-30">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.05) 1px, transparent 1px)',
							backgroundSize: '40px 40px',
						}}
					/>
				</div>
			</div>

			{/* Content */}
			<div className="relative z-10 pt-32">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					{/* Header */}
					<div className="mb-16 space-y-4">
						<div className="inline-flex items-center gap-2 rounded-full border border-indigo-600/30 bg-indigo-600/10 px-3 py-1">
							<span className="h-2 w-2 rounded-full bg-indigo-600" />
							<span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
								Featured Work
							</span>
						</div>

						<h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
							Selected{' '}
							<span className="bg-linear-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text">
								Projects
							</span>
						</h1>

						<p className="max-w-2xl text-base text-slate-400 sm:text-lg">
							Real-world projects built during university and internship,
							focusing on responsive UI, API integration, and clean React architecture.
						</p>
					</div>

					{/* Filter Buttons */}
					<div className="mb-12 flex flex-wrap gap-2">
						{['All Projects', 'Frontend', 'Backend', 'Web3', 'DevTools'].map((category) => (
							<button
								key={category}
								className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${category === 'All Projects'
									? 'border-indigo-600 bg-indigo-600/20 text-indigo-300'
									: 'border-white/10 text-slate-400 hover:border-indigo-600/50 hover:text-white'
									}`}
							>
								{category}
							</button>
						))}
					</div>

					{/* Projects Grid */}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
						{projects.map((project) => (
							<ProjectCard
								id={project.id}
								key={project.id}
								title={project.title}
								description={project.description}
								image={project.image}
								technologies={project.technologies}
								github={project.github}
								live={project.live}
								icon={project.icon}
							/>
						))}
					</div>

					{/* CTA Section */}
					<div className="rounded-2xl border border-indigo-600/20 bg-linear-gradient-to-r from-indigo-600/10 to-slate-900/50 p-8 text-center backdrop-blur-sm sm:p-12">
						<h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
							Open to Frontend Intern & Junior Opportunities
						</h2>
						<p className="mb-6 text-slate-300">
							I&apos;m actively looking for opportunities to contribute, learn fast,
							and grow within a strong engineering team.
						</p>
						<button className="rounded-lg bg-indigo-600 px-8 py-3 font-bold text-white shadow-xl shadow-indigo-600/20 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40 cursor-pointer"
							onClick={() => navigate.push('/contact')}
						>
							Contact Me
						</button>
					</div>
				</div>
			</div>
		</div >
	);
}
