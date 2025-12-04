"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { WhatsAppIcon } from "./icons"

const slides = [
  {
    id: 1,
    brand: "Atlas Copco",
    image: "/slide-1.jpg",
  },
  {
    id: 2,
    brand: "Epiroc",
    image: "/slide-2.jpg",
  },
  {
    id: 3,
    brand: "Sandvik",
    image: "/slide-3.jpg",
  },
  {
    id: 4,
    brand: "Sandvik",
    image: "/slide-4.jpg",
  },
  {
    id: 5,
    brand: "Sandvik",
    image: "/slide-5.jpg",
  },
  {
    id: 6,
    brand: "Sandvik",
    image: "/slide-6.png",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] pt-16 lg:pt-20 overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-background/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Brand Badge */}
            {/*<div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">{slides[currentSlide].brand}</span>
            </div>*/}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Endüstriyel Kaya Delme Ekipmanlarında <span className="text-primary">Güvenilir Çözüm Ortağınız</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Atlas Copco, Epiroc ve Sandvik ürün gruplarında hızlı tedarik, geniş stok ve uzman destek.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                {siteConfig.buttons.reviewProducts}
              </Button> */}
              <Link href="#iletisim">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-500 hover:bg-green-600 hover:text-white px-8 bg-transparent"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {siteConfig.buttons.getQuote}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-32 md:bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 rounded-full ${index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors text-foreground"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors text-foreground"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
