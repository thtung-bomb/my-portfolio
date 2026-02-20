import { faSquareGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function HomeFooter({ className = "" }) {
	return (
		<footer className={`w-full py-4 bg-transparent ${className}`}>
			{/* line */}
			<div className="h-px w-full max-w-6xl my-6 mx-auto bg-linear-to-r from-transparent via-amber-200/40 to-transparent" />
			<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

				{/* Left */}
				<div className="text-center md:text-left">
					<p className="font-medium text-slate-300">
						Building modern web applications with clean architecture.
					</p>
					<p className="mt-1 text-[#6764f2]">
						Software Engineer
					</p>
				</div>

				{/* Right */}
				<div className="flex flex-row items-center gap-4">
					<Link
						href="https://github.com/thtung-bomb"
						target="_blank"
						className="text-amber-50/80 hover:text-amber-200 transition-colors size-6 text-2xl"
					>
						<FontAwesomeIcon icon={faSquareGithub} />
					</Link>

					<Link
						href="https://www.linkedin.com/in/thanhtung35/"
						target="_blank"
						className="text-amber-50/80 hover:text-amber-200 transition-colors size-6 text-2xl"
					>
						<FontAwesomeIcon icon={faSquareLinkedin} />
					</Link>

					<Link
						href="mailto:thanhtung3523@gmail.com"
						className="text-amber-50/80 hover:text-amber-200 transition-colors size-6 text-2xl"
					>
						<FontAwesomeIcon icon={faAt} />
					</Link>
				</div>
			</div>

			{/* Bottom Line */}
			<div className="text-center mt-6 text-xs text-slate-500">
				© {new Date().getFullYear()} Nguyen Thanh Tung &#9679; Software Engineer
			</div>
		</footer>

	)
}

export default HomeFooter
