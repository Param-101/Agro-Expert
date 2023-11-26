import Image from 'next/image'
import { Hero, Navbar, Footer, AboutSection } from '@/components'

export default function Home() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <AboutSection />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
