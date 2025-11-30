import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { CategoryCards } from "@/components/category-cards"
import { AboutSection } from "@/components/about-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <CategoryCards />
      <AboutSection />
      <GuaranteeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
