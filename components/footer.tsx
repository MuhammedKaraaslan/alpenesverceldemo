import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-12 h-12">
                <img
                  src="/logo_alpenes.png"
                  alt={siteConfig.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-foreground">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Ürünler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Kaya Delme Makineleri
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Patlatma Ekipmanları
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Yedek Parçalar
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Teknik Servis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>{siteConfig.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>{siteConfig.contact.email}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div className="flex flex-col gap-1">
                  {siteConfig.contact.addresses.map((address, index) => (
                    <span key={index}>{address}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Gizlilik Politikası
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
