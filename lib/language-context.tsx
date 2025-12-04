"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getTranslations } from './i18n'

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: ReturnType<typeof getTranslations>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('tr')
    const [t, setT] = useState(getTranslations('tr'))

    useEffect(() => {
        // Load language from localStorage on mount
        const savedLang = localStorage.getItem('language') as Language
        if (savedLang && (savedLang === 'tr' || savedLang === 'en' || savedLang === 'ru')) {
            setLanguageState(savedLang)
            setT(getTranslations(savedLang))
        } else {
            // If no language is saved, default to Turkish
            localStorage.setItem('language', 'tr')
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        setT(getTranslations(lang))
        localStorage.setItem('language', lang)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
