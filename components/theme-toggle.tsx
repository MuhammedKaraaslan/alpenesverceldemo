"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="h-8 w-16 lg:h-10 lg:w-20 bg-muted rounded-full animate-pulse" />
        )
    }

    const isLight = theme === "light"

    return (
        <button
            onClick={() => setTheme(isLight ? "dark" : "light")}
            className="relative h-8 w-16 lg:h-10 lg:w-20 bg-secondary/30 dark:bg-secondary/20 rounded-full p-0.5 lg:p-1 transition-all duration-300 hover:bg-secondary/40 dark:hover:bg-secondary/30 flex items-center border border-border my-auto"
            aria-label="Toggle theme"
        >
            {/* Icons Background */}
            <div className="relative w-full h-full flex items-center justify-between px-2 lg:px-2.5 overflow-hidden">
                <Sun className={`h-3.5 w-3.5 lg:h-4 lg:w-4 z-10 transition-colors ${isLight ? 'text-primary' : 'text-muted-foreground/40'}`} />
                <Moon className={`h-3.5 w-3.5 lg:h-4 lg:w-4 z-10 transition-colors ${!isLight ? 'text-primary' : 'text-muted-foreground/40'}`} />
            </div>

            {/* Switch Knob */}
            <div
                className={`absolute top-1/2 -translate-y-1/2 left-0.5 lg:left-1 h-7 w-7 lg:h-8 lg:w-8 bg-primary rounded-full shadow-md transition-all duration-300 ${isLight ? 'translate-x-0' : 'translate-x-8 lg:translate-x-10'
                    }`}
            >
                <div className="w-full h-full flex items-center justify-center">
                    {isLight ? (
                        <Sun className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary-foreground" />
                    ) : (
                        <Moon className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-primary-foreground" />
                    )}
                </div>
            </div>
        </button>
    )
}
