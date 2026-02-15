function HomeHeroSection() {
	return (
		<div className='flex flex-col justify-center items-center w-fit'>
			{/* badge */}
			<div className="inline-flex items-center gap-2 px-6 py-1 rounded-full bg-[#6764f2]/10 border border-[#6764f2]/20 text-[#6764f2] text-xs font-bold uppercase tracking-widest mb-8">
				<span className="relative flex h-2 w-2">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6764f2] opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6764f2]"></span>
				</span>
				Ready for the next challenge
			</div>

			{/* main content */}
			<section>
				<h1 className='text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-white mb-6'>
					Crafting Scalable <br />
					<span className='text-transparent bg-clip-text bg-linear-to-r from-[#6764f2]/20 to-indigo-400'>
						Digital Solutions
					</span>
				</h1>
			</section>

			{/* sub content */}
			<p className='text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-medium text-center'>
				I am currently seeking a junior software engineer role where I can contribute to real products, learn from experienced engineers, and grow into a strong backend/frontend specialist.
			</p>
		</div>
	)
}

export default HomeHeroSection
