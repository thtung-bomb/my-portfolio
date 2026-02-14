import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function HomeFooter() {
	return (
		<div className='py-4'>
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

				{/* Left */}
				<div className="text-center md:text-left">
					<p className="font-medium text-slate-300">
						Building modern web applications with clean architecture.
					</p>
					<p className="mt-1 text-[#6764f2]">
						Software Architect
					</p>
				</div>

				{/* Right */}
				<div className="flex flex-col md:flex-row items-center gap-4">
					<Link
						href="https://github.com/thtung-bomb"
						target="_blank"
						className="text-amber-50/80 hover:text-amber-200 transition-colors size-6"
					>
						<FontAwesomeIcon icon={faSquareGithub} />
					</Link>

					<Link
						href="https://www.linkedin.com/in/thanhtung35/"
						target="_blank"
						className="text-amber-50/80 hover:text-amber-200 transition-colors size-6"
					>
						<FontAwesomeIcon icon={faSquareLinkedin} />
					</Link>

					<Link
						href="mailto:thanhtung3523@gmail.com"
						className="text-amber-50/80 hover:text-amber-200 transition-colors size-6"
					>
						<FontAwesomeIcon icon={faAt} />
					</Link>
				</div>
			</div>

			{/* Bottom Line */}
			<div className="text-center mt-6 text-xs text-slate-500">
				© {new Date().getFullYear()} Nguyen Thanh Tung. Built with Next.js & TailwindCSS.
			</div>
		</div>
	)
}

export default HomeFooter
