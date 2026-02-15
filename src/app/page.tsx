import { HomeHeroSection, SkillList } from '../common/component'


function page() {
  return (
    <div className='absolute inset-0 flex flex-col'>
      <main className="flex-1 flex flex-col items-center justify-center text-amber-50">
        {/* Hero sections */}
        <HomeHeroSection />

        {/* Skills */}
        <SkillList />
      </main>
    </div>
  )
}

export default page
