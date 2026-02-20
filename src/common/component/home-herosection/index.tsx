'use client'

import { useEffect, useState } from "react";

function HeroSection() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const t = setTimeout(() => setVisible(true), 100);
		return () => clearTimeout(t);
	}, []);

	return (
		<section
			className="relative min-h-[calc(100vh-300px)] md:min-h-screen flex flex-col items-center justify-center 
                 px-6 sm:px-10 lg:px-20 
                 pt-32 md:pb-20 text-center overflow-hidden"
		>
			{/* Grid Background */}
			<div
				className="absolute inset-0 bg-[linear-gradient(rgba(103,100,242,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(103,100,242,0.04)_1px,transparent_1px)]
                   bg-size-[60px_60px]
                   mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,black_0%,transparent_100%)]"
			/>

			{/* Glowing Orb 1 */}
			<div className="absolute w-100 h-100 lg:w-125 lg:h-125
                      rounded-full
                      bg-[radial-gradient(circle,rgba(103,100,242,0.15)_0%,transparent_70%)]
                      top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]
                      pointer-events-none" />

			{/* Glowing Orb 2 */}
			<div className="absolute w-62.5 h-62.5 lg:w-75 lg:h-75
                      rounded-full
                      bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)]
                      top-[30%] right-[10%]
                      pointer-events-none" />

			{/* Badge */}
			<div
				className={`
          inline-flex items-center gap-2 px-5 py-1.5 rounded-full
          bg-indigo-500/10 border border-indigo-500/30
          text-indigo-300 text-[11px] font-bold uppercase tracking-[0.12em]
          mb-8 relative z-10 font-sans
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
			>
				<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6764f2] animate-pulse" />
				Ready for the next challenge
			</div>

			{/* Headline */}
			<h1
				className={`
          text-[clamp(2.8rem,9vw,6.5rem)]
          font-black leading-[1.05] tracking-[-0.04em]
          text-white mb-6 relative z-10 font-serif
          transition-all duration-700 delay-100
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
			>
				Aspiring{" "}
				<span className="bg-linear-to-br from-[#6764f2] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
					Full-Stack
				</span>
				<br />
				Software Engineer
			</h1>

			{/* Subtitle */}
			<p
				className={`
          text-[clamp(1rem,2.5vw,1.2rem)]
          text-slate-400/85
          max-w-155
          leading-[1.75]
          md:mb-12
          font-sans relative z-10
          transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
			>
				I&#39;m seeking a junior software engineer role where I can contribute to real products,
				learn from experienced engineers, and grow into a strong backend/frontend specialist.
			</p>
		</section>
	);
}

export default HeroSection