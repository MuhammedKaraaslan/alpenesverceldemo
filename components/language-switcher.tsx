"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe2, Check, ChevronDown } from "lucide-react"
import type { Language } from "@/lib/i18n"

const languages = [
    { code: 'tr' as Language, name: 'TR', fullName: 'Türkçe', flag: '🇹🇷' },
    { code: 'en' as Language, name: 'EN', fullName: 'English', flag: '🇬🇧' },
    { code: 'ru' as Language, name: 'RU', fullName: 'Русский', flag: '🇷🇺' },
]

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

    return (
        <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative flex items-center gap-2 h-10 px-3 min-w-[100px] justify-center bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 border border-primary/20 hover:border-primary/30 rounded-full transition-all duration-300 group"
                    aria-label="Change language"
                >
                    <Globe2
                        size={24}
                        className="text-primary group-hover:rotate-12 transition-transform duration-300"
                        style={{ width: '24px', height: '24px', minWidth: '24px', minHeight: '24px' }}
                    />
                    <span className="text-sm font-semibold text-primary transition-all duration-300">
                        {currentLanguage.name}
                    </span>
                    <ChevronDown
                        size={16}
                        className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-0 w-[100px] p-1">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className="flex items-center justify-between cursor-pointer px-2 py-1.5"
                    >
                        <span>{lang.name}</span>
                        {language === lang.code && (
                            <Check size={14} className="text-primary" />
                        )}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
