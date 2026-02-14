import { HomeFooter, HomeHeroSection, NavMenu, SkillList } from './component'


function page() {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavMenu />

      <main className="flex-1 flex flex-col items-center justify-center text-amber-50">
        {/* Hero sections */}
        <HomeHeroSection />

        {/* Skills */}
        <SkillList />
      </main>

      {/* line */}
      <div className="h-px w-full max-w-6xl mx-auto bg-linear-to-r from-transparent via-amber-200/40 to-transparent" />

      <footer>
        <HomeFooter />
      </footer>
    </div>
  )
}

export default page
