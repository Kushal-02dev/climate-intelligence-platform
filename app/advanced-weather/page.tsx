"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AdvancedWeatherDashboard } from "@/components/advanced-weather-dashboard"
import { Satellite, Brain, Database, Zap } from "lucide-react"

export default function AdvancedWeatherPage() {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("")
  const [customParameters, setCustomParameters] = useState({
    timeHorizon: "72",
    confidenceThreshold: "80",
    economicModel: "standard",
    populationData: "",
  })
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)

  const regions = [
    "Mumbai, Maharashtra",
    "Chennai, Tamil Nadu",
    "Kolkata, West Bengal",
    "Bhubaneswar, Odisha",
    "Visakhapatnam, Andhra Pradesh",
    "Kochi, Kerala",
    "Panaji, Goa",
    "Ahmedabad, Gujarat",
    "Thiruvananthapuram, Kerala",
    "Puducherry, Puducherry",
  ]

  const eventTypes = [
    "Cyclone",
    "Flood",
    "Drought",
    "Heatwave",
    "Heavy Rainfall",
    "Storm Surge",
    "Coastal Erosion",
    "Lightning Storm",
  ]

  const handleAdvancedPrediction = async () => {
    if (!selectedRegion || !selectedEvent) return

    setLoading(true)

    try {
      const response = await fetch("/api/weather/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          region: selectedRegion,
          eventType: selectedEvent,
          parameters: customParameters,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate prediction")
      }

      const data = await response.json()
      setPrediction(data)
    } catch (error) {
      console.error("Prediction error:", error)
    } finally {
      setLoading(false)
    }
  }

  const exportReport = () => {
    if (!prediction) return

    const reportData = {
      region: selectedRegion,
      eventType: selectedEvent,
      prediction,
      generatedAt: new Date().toISOString(),
    }

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `weather-report-${selectedRegion.replace(/,\s*/g, "-")}-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-[#0F2027] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#BFA2DB] to-[#A3C9A8] rounded-lg flex items-center justify-center">
              <Satellite className="h-5 w-5 text-[#0F2027]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Advanced Weather Intelligence</h1>
              <p className="text-gray-300">IBM Environmental Intelligence Suite Integration</p>
            </div>
            <Badge className="ml-auto bg-[#FF6A00] text-white">Enterprise AI</Badge>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardContent className="p-4 text-center">
                <Satellite className="h-6 w-6 text-[#BFA2DB] mx-auto mb-2" />
                <div className="text-sm text-gray-300">IBM EIS</div>
                <div className="text-lg font-bold text-white">Connected</div>
              </CardContent>
            </Card>
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardContent className="p-4 text-center">
                <Brain className="h-6 w-6 text-[#BFA2DB] mx-auto mb-2" />
                <div className="text-sm text-gray-300">Granite LLM</div>
                <div className="text-lg font-bold text-white">Active</div>
              </CardContent>
            </Card>
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardContent className="p-4 text-center">
                <Database className="h-6 w-6 text-[#BFA2DB] mx-auto mb-2" />
                <div className="text-sm text-gray-300">RAG System</div>
                <div className="text-lg font-bold text-white">Ready</div>
              </CardContent>
            </Card>
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardContent className="p-4 text-center">
                <Zap className="h-6 w-6 text-[#BFA2DB] mx-auto mb-2" />
                <div className="text-sm text-gray-300">AI Models</div>
                <div className="text-lg font-bold text-white">Operational</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white">Select Region</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a region" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20 mt-4">
              <CardHeader>
                <CardTitle className="text-white">Select Event Type</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an event type" />
                  </SelectTrigger>
                  <SelectContent>
                    {eventTypes.map((event) => (
                      <SelectItem key={event} value={event}>
                        {event}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20 mt-4">
              <CardHeader>
                <CardTitle className="text-white">Custom Parameters</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-4">
                  <Label htmlFor="timeHorizon" className="text-white">
                    Time Horizon (hours)
                  </Label>
                  <Input
                    id="timeHorizon"
                    value={customParameters.timeHorizon}
                    onChange={(e) => setCustomParameters({ ...customParameters, timeHorizon: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="confidenceThreshold" className="text-white">
                    Confidence Threshold (%)
                  </Label>
                  <Input
                    id="confidenceThreshold"
                    value={customParameters.confidenceThreshold}
                    onChange={(e) => setCustomParameters({ ...customParameters, confidenceThreshold: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="economicModel" className="text-white">
                    Economic Model
                  </Label>
                  <Select
                    value={customParameters.economicModel}
                    onValueChange={(value) => setCustomParameters({ ...customParameters, economicModel: value })}
                  >
                    <SelectTrigger className="w-full mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="populationData" className="text-white">
                    Population Data
                  </Label>
                  <Textarea
                    id="populationData"
                    value={customParameters.populationData}
                    onChange={(e) => setCustomParameters({ ...customParameters, populationData: e.target.value })}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white">Prediction Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <p className="text-white">Loading...</p>
                  </div>
                ) : prediction ? (
                  <AdvancedWeatherDashboard prediction={prediction} />
                ) : (
                  <div className="flex items-center justify-center">
                    <p className="text-white">No prediction available</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20 mt-4">
              <CardHeader>
                <CardTitle className="text-white">Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Button onClick={handleAdvancedPrediction} className="bg-[#BFA2DB] text-[#0F2027] mr-2">
                  Generate Prediction
                </Button>
                <Button onClick={exportReport} className="bg-[#FF6A00] text-white">
                  Export Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
