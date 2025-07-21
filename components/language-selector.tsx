"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"
import { multilingualService } from "@/lib/multilingual-service"

interface LanguageSelectorProps {
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const supportedLanguages = multilingualService.getSupportedLanguages()

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-[#A3C9A8]/30 text-white hover:bg-[#A3C9A8]/20 bg-transparent">
          <Globe className="h-4 w-4 mr-2" />
          {supportedLanguages[currentLanguage]?.nativeName || "English"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0F2027] border-[#A3C9A8]/30 min-w-[200px]">
        {Object.entries(supportedLanguages).map(([code, language]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => {
              onLanguageChange(code)
              setIsOpen(false)
            }}
            className="text-white hover:bg-[#A3C9A8]/20 cursor-pointer"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-gray-400">{language.name}</span>
              </div>
              {currentLanguage === code && <Check className="h-4 w-4 text-[#A3C9A8]" />}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
