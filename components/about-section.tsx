"use client"

import { useState } from "react"
import { Truck, Users, Package, Headphones, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"


export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { t } = useLanguage()

  const features = [
    {
      icon: Truck,
      text: t.about.features[0],
    },
    {
      icon: Users,
      text: t.about.features[1],
    },
    {
      icon: Package,
      text: t.about.features[2],
    },
    {
      icon: Headphones,
      text: t.about.features[3],
    },
  ]

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
                <div className="text-4xl font-bold">{t.about.supportBadgeTitle}</div>
                <div className="text-sm opacity-90">{t.about.supportBadgeSubtitle}</div>
              </div>
            </div>

            {/* Features Grid - Moved here */}
            <div className="grid sm:grid-cols-2 gap-4 mt-16 lg:mt-16">
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
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t.about.sectionLabel}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              {t.about.sectionTitle} <span className="text-primary">{t.about.sectionTitleHighlight}</span>
            </h2>

            <div className={cn("space-y-8 relative", !isExpanded && "line-clamp-3 sm:line-clamp-none overflow-hidden")}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.paragraph1}
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.paragraph2}
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.about.paragraph3}
              </p>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary font-medium mt-2 mb-6 sm:hidden hover:underline"
            >
              {isExpanded ? (
                <>
                  {t.about.showLess}
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  {t.about.showMore}
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
