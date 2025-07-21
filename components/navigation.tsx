"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/hooks/use-language"
import { Cloud, Leaf, BarChart3, Home, Menu, Globe } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { currentLanguage, setLanguage, translate } = useLanguage()

  const navItems = [
    { href: "/", label: translate("home"), icon: Home },
    { href: "/dashboard", label: translate("dashboard"), icon: BarChart3 },
    { href: "/weather", label: translate("prediction"), icon: Cloud },
    { href: "/carbon", label: translate("carbonAnalysis"), icon: Leaf },
  ]

  const NavContent = () => (
    <div className="flex flex-col space-y-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              isActive ? "bg-[#A3C9A8] text-[#0F2027]" : "text-gray-300 hover:bg-[#A3C9A8]/20 hover:text-white"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        )
      })}
    </div>
  )

  return (
    <nav className="bg-[#0F2027] border-b border-[#A3C9A8]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#A3C9A8] to-[#BFA2DB] rounded-lg flex items-center justify-center">
              <Globe className="h-4 w-4 text-[#0F2027]" />
            </div>
            <span className="text-white font-bold text-lg">ClimateAI</span>
            <Badge className="bg-[#FF6A00] text-white text-xs">Beta</Badge>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? "bg-[#A3C9A8] text-[#0F2027]" : "text-gray-300 hover:bg-[#A3C9A8]/20 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Language Selector & Mobile Navigation */}
          <div className="flex items-center gap-2">
            <LanguageSelector currentLanguage={currentLanguage} onLanguageChange={setLanguage} />

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-[#0F2027] border-[#A3C9A8]/20">
                  <div className="flex items-center gap-2 mb-8">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#A3C9A8] to-[#BFA2DB] rounded-lg flex items-center justify-center">
                      <Globe className="h-4 w-4 text-[#0F2027]" />
                    </div>
                    <span className="text-white font-bold text-lg">ClimateAI</span>
                  </div>
                  <NavContent />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
