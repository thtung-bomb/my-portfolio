import { HomeHeroSection } from '../common/component'


function page() {
  return (
    <div className='absolute inset-0 flex flex-col'>
      <main className="xl:flex-1 flex flex-col items-center justify-center text-amber-50 origin-center">
        {/* Hero sections */}
        <HomeHeroSection />
      </main>
    </div>
  )
}

export default page
