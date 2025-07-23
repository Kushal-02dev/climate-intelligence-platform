"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { getMultilingualService } from "@/lib/multilingual-service"
import { Thermometer, Droplets, Wind, Eye } from "lucide-react"

interface MultilingualWeatherCardProps {
  weatherData: {
    temperature: number
    humidity: number
    windSpeed: number
    visibility: number
    severityScore: number
    riskLevel: string
  }
  region: string
  language: string
}

export function MultilingualWeatherCard({ weatherData, region, language }: MultilingualWeatherCardProps) {
  const direction = getMultilingualService().getLanguageDirection(language)

  const formatNumber = (num: number) => getMultilingualService().formatNumber(num, language)

  const translateRiskLevel = async (level: string) => {
    return await getMultilingualService().translateText(level, language)
  }

  return (
    <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20" dir={direction}>
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <span>{getMultilingualService().translate("weather", language)}</span>
          <Badge className="bg-[#FF6A00] text-white ml-auto">
            {getMultilingualService().translate("liveData", language)}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Conditions */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-[#FF6A00]" />
              <div>
                <div className="text-white font-semibold">{formatNumber(weatherData.temperature)}°C</div>
                <div className="text-gray-300 text-xs">{getMultilingualService().translate("temperature", language)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-[#BFA2DB]" />
              <div>
                <div className="text-white font-semibold">{formatNumber(weatherData.humidity)}%</div>
                <div className="text-gray-300 text-xs">{getMultilingualService().translate("humidity", language)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-[#A3C9A8]" />
              <div>
                <div className="text-white font-semibold">{formatNumber(weatherData.windSpeed)} km/h</div>
                <div className="text-gray-300 text-xs">{getMultilingualService().translate("windSpeed", language)}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-[#D89F7B]" />
              <div>
                <div className="text-white font-semibold">{formatNumber(weatherData.visibility)} km</div>
                <div className="text-gray-300 text-xs">{getMultilingualService().translate("visibility", language)}</div>
              </div>
            </div>
          </div>

          {/* Severity Score */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm">{getMultilingualService().translate("severityScore", language)}</span>
              <span className="text-[#FF6A00] font-semibold">{formatNumber(weatherData.severityScore)}/10</span>
            </div>
            <Progress value={weatherData.severityScore * 10} className="h-2" />
          </div>

          {/* Risk Level */}
          <div className="flex items-center justify-between">
            <span className="text-gray-300 text-sm">{getMultilingualService().translate("riskLevel", language)}</span>
            <Badge
              className={`${
                weatherData.riskLevel === "High"
                  ? "bg-[#FF6A00]"
                  : weatherData.riskLevel === "Medium"
                    ? "bg-[#D89F7B]"
                    : "bg-[#A3C9A8]"
              } text-white`}
            >
              {weatherData.riskLevel}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
