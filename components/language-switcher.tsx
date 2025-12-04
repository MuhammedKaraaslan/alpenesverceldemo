"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr')
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="relative h-9 w-9"
            aria-label="Toggle language"
        >
            <Languages className="h-4 w-4" />
            <span className="absolute -bottom-1 -right-1 text-[10px] font-bold uppercase bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center">
                {language}
            </span>
        </Button>
    )
}
