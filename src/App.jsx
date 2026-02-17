import { lazy, Suspense } from 'react'
import { BrowserRouter } from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsCanvas from './components/canvas/Stars'
import Footer from './components/Footer'

const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Tech = lazy(() => import('./components/Tech'))
const Works = lazy(() => import('./components/Works'))
const Certificates = lazy(() => import('./components/Certificates'))
const Feedbacks = lazy(() => import('./components/Feedbacks'))
const Contact = lazy(() => import('./components/Contact'))

const SectionFallback = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-8 h-8 border-4 border-[#915eff] border-t-transparent rounded-full animate-spin" />
  </div>
)

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Works />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Certificates />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Feedbacks />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App