"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

import { siteConfig } from "@/lib/site-config"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, language } = useLanguage()

  const navItems = [
    { label: t.navItems.home, href: "/" },
    { label: t.navItems.products, href: "#urunler" },
    { label: t.navItems.about, href: "#hakkimizda" },
    { label: t.navItems.contact, href: "#iletisim" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <img
                src="/logo_alpenes.png"
                alt={siteConfig.name}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">{t.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t.buttons.support}</span>
            </a>
            <Link href="#iletisim">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">{t.buttons.getQuote}</Button>
            </Link>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 py-2">
                <span className="text-muted-foreground text-sm">Dil / Language:</span>
                <LanguageSwitcher />
              </div>
              <Link href="#iletisim" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">{t.buttons.getQuote}</Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
