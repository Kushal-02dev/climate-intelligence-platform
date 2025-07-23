"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { getMultilingualService } from "@/lib/multilingual-service"

interface LanguageContextType {
  currentLanguage: string
  setLanguage: (language: string) => void
  translate: (key: string) => string
  translateText: (text: string) => Promise<string>
  getDirection: () => "ltr" | "rtl"
  formatNumber: (number: number) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("climate-app-language")
    if (savedLanguage && getMultilingualService().getSupportedLanguages()[savedLanguage]) {
      setCurrentLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLanguage = navigator.language.split("-")[0]
      if (getMultilingualService().getSupportedLanguages()[browserLanguage]) {
        setCurrentLanguage(browserLanguage)
      }
    }
  }, [])

  const setLanguage = (language: string) => {
    setCurrentLanguage(language)
    localStorage.setItem("climate-app-language", language)

    // Update document direction
    document.documentElement.dir = getMultilingualService().getLanguageDirection(language)
    document.documentElement.lang = language
  }

  const translate = (key: string) => {
    return getMultilingualService().translate(key, currentLanguage)
  }

  const translateText = async (text: string) => {
    return await getMultilingualService().translateText(text, currentLanguage)
  }

  const getDirection = () => {
    return getMultilingualService().getLanguageDirection(currentLanguage)
  }

  const formatNumber = (number: number) => {
    return getMultilingualService().formatNumber(number, currentLanguage)
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        translate,
        translateText,
        getDirection,
        formatNumber,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
