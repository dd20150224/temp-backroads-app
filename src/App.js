import AboutSection from '@/sections/aboutSection'
import BannerSection from '@/sections/bannerSection'
import Footer from '@/sections/footer'
import ServicesSection from '@/sections/servicesSection'
import ToursSection from '@/sections/toursSection'
import Navbar from './sections/navbar'

function App() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <ToursSection />
      <Footer />
    </>
  )
}

export default App
