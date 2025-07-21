"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Cloud, MapPin, AlertTriangle, Thermometer, Droplets, Wind, Eye } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function WeatherPage() {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("")
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)

  const regions = [
    "Mumbai, Maharashtra",
    "Chennai, Tamil Nadu",
    "Kolkata, West Bengal",
    "Bhubaneswar, Odisha",
    "Visakhapatnam, Andhra Pradesh",
    "Kochi, Kerala",
    "Goa",
    "Gujarat Coast",
  ]

  const eventTypes = ["Cyclone", "Flood", "Drought", "Heatwave", "Heavy Rainfall", "Storm Surge"]

  const handlePrediction = async () => {
    if (!selectedRegion || !selectedEvent) return

    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setPrediction({
        severityScore: Math.floor(Math.random() * 4) + 6, // 6-10 for high risk
        economicImpact: (Math.random() * 5 + 1).toFixed(1),
        probability: Math.floor(Math.random() * 30) + 70, // 70-100%
        timeframe: "72-96 hours",
        affectedPopulation: Math.floor(Math.random() * 500000) + 100000,
        recommendations: [
          "Evacuate coastal areas within 2km of shoreline",
          "Secure emergency supplies for 72 hours",
          "Activate disaster response teams",
          "Issue public safety alerts",
          "Prepare emergency shelters",
        ],
        historicalData: [
          { year: "2019", events: 3, impact: 1.2 },
          { year: "2020", events: 5, impact: 2.1 },
          { year: "2021", events: 4, impact: 1.8 },
          { year: "2022", events: 6, impact: 2.9 },
          { year: "2023", events: 7, impact: 3.4 },
          { year: "2024", events: 8, impact: 4.1 },
        ],
        riskFactors: [
          { name: "Wind Speed", value: 85, color: "#FF6A00" },
          { name: "Rainfall", value: 92, color: "#BFA2DB" },
          { name: "Storm Surge", value: 78, color: "#D89F7B" },
          { name: "Duration", value: 67, color: "#A3C9A8" },
        ],
      })
      setLoading(false)
    }, 2000)
  }

  const currentConditions = {
    temperature: 42,
    humidity: 78,
    windSpeed: 24,
    visibility: 8,
    pressure: 1008,
  }

  return (
    <div className="min-h-screen bg-[#0F2027] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Weather Intelligence System</h1>
          <p className="text-gray-300">AI-powered extreme weather prediction and risk assessment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#FF6A00]" />
                  Prediction Parameters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Select Region</Label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="bg-[#0F2027] border-[#A3C9A8]/30 text-white">
                      <SelectValue placeholder="Choose a region" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F2027] border-[#A3C9A8]/30">
                      {regions.map((region) => (
                        <SelectItem key={region} value={region} className="text-white hover:bg-[#A3C9A8]/20">
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-gray-300">Event Type</Label>
                  <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                    <SelectTrigger className="bg-[#0F2027] border-[#A3C9A8]/30 text-white">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0F2027] border-[#A3C9A8]/30">
                      {eventTypes.map((event) => (
                        <SelectItem key={event} value={event} className="text-white hover:bg-[#A3C9A8]/20">
                          {event}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handlePrediction}
                  disabled={!selectedRegion || !selectedEvent || loading}
                  className="w-full bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white"
                >
                  {loading ? "Analyzing..." : "Generate Prediction"}
                </Button>
              </CardContent>
            </Card>

            {/* Current Conditions */}
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-[#BFA2DB]" />
                  Current Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-[#FF6A00]" />
                    <span className="text-gray-300">Temperature</span>
                  </div>
                  <span className="text-white font-semibold">{currentConditions.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-[#BFA2DB]" />
                    <span className="text-gray-300">Humidity</span>
                  </div>
                  <span className="text-white font-semibold">{currentConditions.humidity}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wind className="h-4 w-4 text-[#A3C9A8]" />
                    <span className="text-gray-300">Wind Speed</span>
                  </div>
                  <span className="text-white font-semibold">{currentConditions.windSpeed} km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-[#D89F7B]" />
                    <span className="text-gray-300">Visibility</span>
                  </div>
                  <span className="text-white font-semibold">{currentConditions.visibility} km</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {loading && (
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardContent className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6A00] mx-auto mb-4"></div>
                  <p className="text-white">Processing weather data with AI models...</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Analyzing satellite imagery, historical patterns, and real-time conditions
                  </p>
                </CardContent>
              </Card>
            )}

            {prediction && !loading && (
              <>
                {/* Severity Score */}
                <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-[#FF6A00]" />
                      Risk Assessment for {selectedEvent} in {selectedRegion}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#FF6A00] mb-2">{prediction.severityScore}/10</div>
                        <div className="text-white font-semibold mb-1">Severity Score</div>
                        <Badge className="bg-[#FF6A00] text-white">High Risk</Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#D89F7B] mb-2">₹{prediction.economicImpact}Cr</div>
                        <div className="text-white font-semibold mb-1">Economic Impact</div>
                        <Badge className="bg-[#D89F7B] text-white">Estimated Loss</Badge>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-[#BFA2DB] mb-2">{prediction.probability}%</div>
                        <div className="text-white font-semibold mb-1">Probability</div>
                        <Badge className="bg-[#BFA2DB] text-white">Confidence</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Factors */}
                <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                  <CardHeader>
                    <CardTitle className="text-white">Risk Factor Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {prediction.riskFactors.map((factor, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">{factor.name}</span>
                              <span className="text-white font-semibold">{factor.value}%</span>
                            </div>
                            <Progress
                              value={factor.value}
                              className="h-2"
                              style={{ "--progress-background": factor.color } as any}
                            />
                          </div>
                        ))}
                      </div>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={prediction.riskFactors}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                          >
                            {prediction.riskFactors.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Alert and Recommendations */}
                <Alert className="border-[#FF6A00]/50 bg-[#FF6A00]/10">
                  <AlertTriangle className="h-4 w-4 text-[#FF6A00]" />
                  <AlertDescription className="text-white">
                    <strong>High Risk Alert:</strong> {selectedEvent} expected within {prediction.timeframe}.
                    Approximately {prediction.affectedPopulation.toLocaleString()} people may be affected.
                  </AlertDescription>
                </Alert>

                <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                  <CardHeader>
                    <CardTitle className="text-white">AI-Generated Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {prediction.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-[#0F2027]/50 rounded-lg">
                          <div className="w-6 h-6 bg-[#A3C9A8] rounded-full flex items-center justify-center text-[#0F2027] text-sm font-bold">
                            {index + 1}
                          </div>
                          <p className="text-gray-300">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Historical Trends */}
                <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                  <CardHeader>
                    <CardTitle className="text-white">Historical Event Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={prediction.historicalData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="year" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #374151",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="events" fill="#FF6A00" name="Number of Events" />
                        <Bar dataKey="impact" fill="#D89F7B" name="Economic Impact (Cr)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </>
            )}

            {!prediction && !loading && (
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardContent className="p-8 text-center">
                  <Cloud className="h-16 w-16 text-[#BFA2DB] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Ready for Weather Analysis</h3>
                  <p className="text-gray-300">Select a region and event type to generate AI-powered predictions</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
