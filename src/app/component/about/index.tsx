import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../nav-menu';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function AboutPage() {
	return (
		<main className="relative min-h-screen w-full bg-slate-950">
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

			{/* Navigation */}
			<Navigation />

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
								<div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10">
									<div className="flex items-center gap-3">
										<div className="flex h-2 w-2 rounded-full bg-green-500">
											<span className="animate-pulse absolute h-2 w-2 rounded-full bg-green-500" />
										</div>
										<div>
											<p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
												Status
											</p>
											<p className="text-sm font-medium text-white">
												Available for Strategic Roles
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
									Professional Profile
								</div>

								<h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
									Architecting <span className="bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
										Solutions
									</span> with Code.
								</h1>
							</div>

							{/* Description */}
							<div className="space-y-6 text-slate-400 leading-relaxed text-base md:text-lg">
								<p>
									I specialize in transforming complex business requirements into scalable, high-performance digital ecosystems. My journey has evolved from writing clean code to engineering entire platforms that thrive under pressure.
								</p>

								<p>
									With a focus on <span className="text-white font-medium">complex systems</span> and <span className="text-white font-medium">high-availability architecture</span>, I bridge the gap between abstract business goals and concrete technical reality. I don&rsquo;t just build apps; I engineer experiences that scale.
								</p>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-2 gap-4">
								<div className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-600/30 transition-colors">
									<span className="text-3xl font-black text-white tracking-tight">
										8+
									</span>
									<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Years Experience
									</span>
								</div>

								<div className="flex flex-col gap-2 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-600/30 transition-colors">
									<span className="text-3xl font-black text-white tracking-tight">
										100%
									</span>
									<span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
										Uptime Track
									</span>
								</div>
							</div>

							{/* CTA and Social Links */}
							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
								<button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition-colors group">
									Contact Me
									<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
								</button>

								<div className="flex items-center gap-4">
									<a
										href="#"
										className="h-11 w-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-white/10"
										aria-label="GitHub"
									>
										<FontAwesomeIcon icon={faGithub} className='size-5' />
									</a>

									<a
										href="#"
										className="h-11 w-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-white/10"
										aria-label="LinkedIn"
									>
										<FontAwesomeIcon icon={faLinkedin} className='size-5' />
									</a>

									<a
										href="#"
										className="h-11 w-11 flex items-center justify-center rounded-full bg-white/5 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all border border-white/10"
										aria-label="Email"
									>
										<FontAwesomeIcon icon={faEnvelope} className='size-5' />
									</a>
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
									title: 'Full-Stack Development',
									description: 'React, Node.js, TypeScript, and modern cloud infrastructure',
								},
								{
									title: 'System Design',
									description: 'Scalable architectures for high-traffic applications',
								},
								{
									title: 'Performance Optimization',
									description: 'Database optimization, caching strategies, and load balancing',
								},
								{
									title: 'DevOps & Infrastructure',
									description: 'Docker, Kubernetes, CI/CD pipelines, and cloud deployment',
								},
								{
									title: 'API Development',
									description: 'RESTful and GraphQL APIs with robust error handling',
								},
								{
									title: 'Mentorship & Leadership',
									description: 'Building high-performing teams and code standards',
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

			{/* Footer */}
			<footer className="relative z-10 border-t border-white/10 px-6 py-8 md:px-12 mt-20">
				<div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs font-medium tracking-widest uppercase text-slate-500">
						© 2024 TungPortfolio — All Rights Reserved
					</p>
					<div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-slate-500">
						<span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
						Remote Based • Worldwide
					</div>
				</div>
			</footer>
		</main>
	);
}
