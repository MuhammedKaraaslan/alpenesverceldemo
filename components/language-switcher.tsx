"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Globe2 } from "lucide-react"

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr')
    }

    return (
        <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="relative flex items-center gap-2 h-10 px-3 min-w-[90px] justify-center bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 hover:border-primary/30 rounded-full transition-all duration-300 group"
            aria-label="Toggle language"
        >
            <Globe2
                size={24}
                className="text-primary group-hover:rotate-12 transition-transform duration-300"
                style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px' }}
            />
            <span className="text-sm font-semibold uppercase text-primary transition-all duration-300">
                {language === 'tr' ? 'EN' : 'TR'}
            </span>
        </Button>
    )
}
