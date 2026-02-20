import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
	id?: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	github: string;
	live: string;
	icon: string;
}

function ProjectCard({ id, title, description, image, technologies, github, live, icon }: ProjectCardProps) {
	return (
		<div key={id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-indigo-600/50 hover:shadow-2xl hover:shadow-indigo-600/10">
			{/* Image Container */}
			<div className="relative h-48 w-full overflow-hidden bg-linear-gradient-to-br from-indigo-600/20 to-slate-900">
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="text-6xl opacity-60 transition-transform group-hover:scale-110">
						{icon}
					</div>
				</div>
				{image ? (
					<Image
						src={image}
						alt={title}
						width={500}
						height={300}
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				) : (
					<div className="h-48 w-full rounded-t-xl bg-linear-to-br from-indigo-600/20 to-slate-900 flex items-center justify-center">
						<span className="text-3xl font-bold text-indigo-400/40 text-center">
							{title}
						</span>
					</div>
				)}
				{/* Overlay */}
				<div className="absolute inset-0 bg-linear-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

				{/* Action Buttons */}
				<div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
					{github && (
						<Link
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-indigo-600 hover:border-indigo-600"
						>
							<FontAwesomeIcon icon={faGithub} className='size-5' />
						</Link>
					)}
					{live && (
						<Link
							href={live}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-indigo-600 hover:border-indigo-600"
						>
							<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='size-5' />
						</Link>
					)}
				</div>
			</div>

			{/* Content */}
			<div className="flex flex-col gap-4 p-6">
				<div>
					<h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-indigo-400">
						{title}
					</h3>
					<p className="line-clamp-2 text-sm text-slate-400 transition-colors group-hover:text-slate-300">
						{description}
					</p>
				</div>

				{/* Technologies */}
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<span
							key={tech}
							className="inline-flex items-center rounded-full border border-indigo-600/30 bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-400 transition-colors hover:border-indigo-600/60 hover:bg-indigo-600/20"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
