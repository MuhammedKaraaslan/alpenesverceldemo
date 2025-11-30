"use client"

import { siteConfig } from "@/lib/site-config"
import { WhatsAppIcon } from "@/components/icons"

export function WhatsAppButton() {
    return (
        <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 lg:gap-0 hover:gap-2 bg-[#25D366] shadow-lg transition-all duration-300 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-auto sm:justify-start sm:rounded-full sm:p-3 sm:hover:pr-6 sm:hover:pl-2 group"
            aria-label="WhatsApp ile iletişime geçin"
        >
            <div className="absolute inset-0 sm:rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40" />
            <div className="relative z-10 flex items-center justify-center w-8 h-8">
                <WhatsAppIcon className="w-8 h-8 text-white" />
            </div>
            <span className="overflow-hidden whitespace-nowrap text-white font-medium transition-all duration-300 relative z-10 max-w-none sm:max-w-0 sm:group-hover:max-w-xs">
                İletişime Geç
            </span>
        </a>
    )
}
