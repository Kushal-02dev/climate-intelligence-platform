"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, CheckCircle } from "lucide-react"
import { getMultilingualService } from "@/lib/multilingual-service"

interface MultilingualAlertProps {
  type: "warning" | "info" | "success"
  title: string
  message: string
  region?: string
  eventType?: string
  language: string
  actions?: string[]
}

export function MultilingualAlert({
  type,
  title,
  message,
  region,
  eventType,
  language,
  actions = [],
}: MultilingualAlertProps) {
  const direction = getMultilingualService().getLanguageDirection(language)
  const regionalAlert = region && eventType ? getMultilingualService().getRegionalAlert(region, eventType, language) : ""

  const getIcon = () => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
      case "success":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getColorClasses = () => {
    switch (type) {
      case "warning":
        return "border-[#FF6A00]/50 bg-[#FF6A00]/10 text-[#FF6A00]"
      case "success":
        return "border-[#A3C9A8]/50 bg-[#A3C9A8]/10 text-[#A3C9A8]"
      default:
        return "border-[#BFA2DB]/50 bg-[#BFA2DB]/10 text-[#BFA2DB]"
    }
  }

  return (
    <Alert className={getColorClasses()} dir={direction}>
      {getIcon()}
      <AlertDescription className="text-white">
        <div className="space-y-3">
          <div>
            <strong>{title}</strong>
          </div>
          <div>{message}</div>
          {regionalAlert && (
            <div className="p-3 bg-[#0F2027]/50 rounded-lg border border-current/20">
              <Badge className="mb-2 bg-current text-[#0F2027]">
                {getMultilingualService().translate("regionalAlert", language)}
              </Badge>
              <p className="text-sm">{regionalAlert}</p>
            </div>
          )}
          {actions.length > 0 && (
            <div className="space-y-2">
              <div className="font-semibold text-sm">
                {getMultilingualService().translate("recommendedActions", language)}:
              </div>
              <ul className="space-y-1">
                {actions.map((action, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1 h-1 bg-current rounded-full mt-2 flex-shrink-0"></div>
                    {action}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </AlertDescription>
    </Alert>
  )
}
