'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PremiumHero from '@/components/template/PremiumHero'
import WhoItsFor from '@/components/template/WhoItsFor'
import Problem from '@/components/template/Problem'
import Process from '@/components/template/Process'
import Benefits from '@/components/template/Benefits'
import Portfolio from '@/components/template/Portfolio'
import Trust from '@/components/template/Trust'
import FinalCTA from '@/components/template/FinalCTA'

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-neutral-950">
      <Navbar />
      
      <PremiumHero />
      
      <div id="about">
        <WhoItsFor />
      </div>

      <Problem />

      <div id="services">
        <Process />
      </div>

      <Benefits />

      <div id="work">
        <Portfolio />
      </div>

      <Trust />
      
      <div id="contact">
        <FinalCTA />
      </div>
      
      <Footer />
    </main>
  )
}
