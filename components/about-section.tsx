"use client"

import { useState } from "react"
import { Truck, Users, Package, Headphones, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"


const features = [
  {
    icon: Truck,
    text: "Saha uyumlu hızlı tedarik",
  },
  {
    icon: Users,
    text: "Uzman teknik ekip",
  },
  {
    icon: Package,
    text: "Geniş stok yönetimi",
  },
  {
    icon: Headphones,
    text: "Yerinde destek hizmetleri",
  },
]

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="hakkimizda" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Side */}
          <div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img src="/industrial-mining-team-technicians-equipment-profe.jpg" alt={`${siteConfig.name} Ekibi`} className="w-full h-full object-cover" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 right-0 sm:-right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl z-10">
                <div className="text-4xl font-bold">7/24</div>
                <div className="text-sm opacity-90">Destek Hizmeti</div>
              </div>
            </div>

            {/* Features Grid - Moved here */}
            <div className="grid sm:grid-cols-2 gap-4 mt-16 lg:mt-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl border border-border"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Hakkımızda</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Sektörün Önde Gelen Markalarına <span className="text-primary">7/24 Destek</span>
            </h2>

            <div className={cn("space-y-8 relative", !isExpanded && "line-clamp-3 sm:line-clamp-none overflow-hidden")}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                AlpEnes, 25 yılı aşkın sektör deneyimi ve geniş ürün yelpazesiyle; kaya delme ekipmanları, hidrolik kırıcılar, hidrolik pompalar, motorlar ve çeşitli endüstriyel elektrik aksamları için güvenilir çözümler sunan bir tedarik firmasıdır.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Atlas Copco, Epiroc ve Sandvik ürün gruplarında uzmanlaşan firmamız, müşterilerine 7/24 teknik destek, hızlı tedarik ve stok yönetimi avantajı sağlamaktadır.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Saha uyumlu çözümler, uzman kadro ve müşteri odaklı çalışma prensiplerimiz ile Türkiye’nin birçok bölgesindeki işletmelere kaliteli hizmet sunmaya devam ediyoruz.
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary font-medium mt-2 mb-6 sm:hidden hover:underline"
            >
              {isExpanded ? (
                <>
                  Daha az göster
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Daha fazla göster
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
