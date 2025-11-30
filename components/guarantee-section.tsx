import { Check, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

const guarantees = [
  "25 yılı aşkın sektör tecrübesi",
  "7/24 hizmet verebilen uzman ekip",
  "10.000'den fazla ürün seçeneği",
  "Çözüm odaklı teknik danışmanlık",
]

export function GuaranteeSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">AlpEnes Güvencesi</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              <span className="text-primary">25+ Yıllık</span> Sektör Deneyimi ile
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              AlpEnes olarak, endüstriyel ekipman alanındaki deneyimimizle işletmelerinizin tüm süreçlerine güvenilir
              destek sağlıyoruz.
            </p>

            {/* Guarantees List */}
            <div className="space-y-4 mb-8">
              {guarantees.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#iletisim" className="cursor-pointer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 cursor-pointer w-full sm:w-auto">
                  <Phone className="w-4 h-4" />
                  İletişime Geç
                </Button>
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button
                  variant="outline"
                  className="border-green-600 text-green-500 hover:bg-green-600 hover:text-white px-8 bg-transparent cursor-pointer w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Destek
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground text-sm">Yıllık Deneyim</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground text-sm">Stok Ürün</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">7/24</div>
              <div className="text-muted-foreground text-sm">Hizmet</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
