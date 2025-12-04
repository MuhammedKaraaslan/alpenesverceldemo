"use client"

import { ArrowRight, Drill, Bomb, Cog } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function CategoryCards() {
  const { t } = useLanguage()

  const categories = [
    {
      id: 1,
      icon: Drill,
      image: "/kaya-delme.jpg",
    },
    {
      id: 2,
      icon: Bomb,
      image: "/mining-blasting-equipment-industrial-explosive-too.jpg",
    },
    {
      id: 3,
      icon: Cog,
      image: "/yedek-parca.jpg",
    },
  ]
  return (
    <section id="urunler" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">{t.categories.sectionLabel}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            {t.categories.sectionTitle}
          </h2>
        </div>

        {/* Cards List */}
        <div className="flex flex-col gap-12 lg:gap-24">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`group flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-16 items-stretch`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl h-full">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center shrink-0">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{t.categories.items[index].title}</h3>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t.categories.items[index].description}
                    </p>

                    <div className="pt-4">
                      <Link href="#iletisim">
                        <Button
                          variant="outline"
                          className="h-12 px-8 border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group/btn text-base cursor-pointer"
                        >
                          {t.categories.items[index].buttonText}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
