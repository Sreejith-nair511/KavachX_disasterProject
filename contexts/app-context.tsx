"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/dummy-data"

type Language = "en" | "hi" | "ta"
type DataMode = "simulated" | "realtime"

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  dataMode: DataMode
  setDataMode: (mode: DataMode) => void
  t: any // Translations for current language
  isMounted: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [dataMode, setDataMode] = useState<DataMode>("simulated")
  const [isMounted, setIsMounted] = useState(false)

  // Only run on client-side
  useEffect(() => {
    setIsMounted(true)

    // Get stored language preference
    try {
      const storedLang = localStorage.getItem("kavachx-language") as Language | null
      if (storedLang) {
        setLanguageState(storedLang)
      }
    } catch (error) {
      console.error("LocalStorage not available:", error)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)

    // Only try to access localStorage on the client
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("kavachx-language", lang)
      } catch (error) {
        console.error("LocalStorage not available:", error)
      }
    }
  }

  // Get translations for current language
  const t = translations[language]

  // Provide initial values during SSR to avoid hydration mismatch
  const value = {
    language,
    setLanguage,
    dataMode,
    setDataMode,
    t: translations.en, // Always use English during SSR
    isMounted,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
