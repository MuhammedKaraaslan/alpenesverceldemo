"use client"

import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { sendEmail } from "@/actions/send-email"
import { toast } from "sonner"

export function ContactSection() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)

    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(null, formData)

    if (result.success) {
      toast.success(result.message)
      event.currentTarget.reset()
    } else {
      toast.error(result.message)
    }
    setLoading(false)
  }

  return (
    <section id="iletisim" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">İletişim</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Hızlı İletişim
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sorularınız ve talepleriniz için bizimle iletişime geçin. Uzman ekibimiz size en kısa sürede dönüş
              yapacaktır.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={siteConfig.contact.phoneLink}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">Telefon</div>
                  <div className="text-foreground font-semibold">{siteConfig.contact.phone}</div>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-green-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                  <WhatsAppIcon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">WhatsApp</div>
                  <div className="text-foreground font-semibold">{siteConfig.contact.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm">E-posta</div>
                  <div className="text-foreground font-semibold">{siteConfig.contact.email}</div>
                </div>
              </a>

              {siteConfig.contact.addresses.map((address, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">Adres</div>
                    <div className="text-foreground font-semibold">{address}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{siteConfig.buttons.requestQuote}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Ad Soyad</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="+90 5XX XXX XX XX"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">E-posta</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Konu</label>
                <select
                  name="subject"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                >
                  <option value="">Seçiniz</option>
                  <option value="kaya-delme">Kaya Delme Makineleri</option>
                  <option value="patlatma">Patlatma Ekipmanları</option>
                  <option value="yedek-parca">Yedek Parçalar</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Mesajınız</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  placeholder="Talebinizi detaylı olarak yazınız..."
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 cursor-pointer"
              >
                {loading ? "Gönderiliyor..." : siteConfig.buttons.requestQuote}
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-3 leading-relaxed">
                Formu göndererek kişisel verilerinizin işlenmesini kabul etmiş olursunuz.
                Bilgileriniz yalnızca talebinize yanıt vermek amacıyla kullanılacak ve üçüncü
                şahıslarla paylaşılmayacaktır.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
