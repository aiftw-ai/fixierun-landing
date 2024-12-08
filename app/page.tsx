import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  )
}
