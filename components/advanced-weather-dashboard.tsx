"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cloud, Satellite, Brain, AlertTriangle, TrendingUp, Clock, Shield } from "lucide-react"
import {
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

interface WeatherDashboardProps {
  region: string
  eventType: string
  predictionData: any
}

export function AdvancedWeatherDashboard({ region, eventType, predictionData }: WeatherDashboardProps) {
  const [realTimeData, setRealTimeData] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Connect to real-time weather stream
    const eventSource = new EventSource(`/api/realtime/weather?region=${encodeURIComponent(region)}`)

    eventSource.onopen = () => {
      setIsConnected(true)
    }

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data)
      setRealTimeData(data)
    }

    eventSource.onerror = () => {
      setIsConnected(false)
    }

    return () => {
      eventSource.close()
    }
  }, [region])

  if (!predictionData) {
    return (
      <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
        <CardContent className="p-8 text-center">
          <Cloud className="h-16 w-16 text-[#BFA2DB] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Advanced Weather Intelligence</h3>
          <p className="text-gray-300">Generate a prediction to view comprehensive analysis</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Real-time Status */}
      <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Satellite className="h-5 w-5 text-[#BFA2DB]" />
            IBM Environmental Intelligence Suite - Live Data
            <Badge className={`ml-auto ${isConnected ? "bg-[#A3C9A8]" : "bg-[#D89F7B]"} text-[#0F2027]`}>
              {isConnected ? "Connected" : "Reconnecting..."}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {realTimeData && (
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6A00] mb-1">
                  {realTimeData.conditions.temperature.toFixed(1)}°C
                </div>
                <div className="text-gray-300 text-sm">Temperature</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#BFA2DB] mb-1">
                  {realTimeData.conditions.humidity.toFixed(0)}%
                </div>
                <div className="text-gray-300 text-sm">Humidity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#A3C9A8] mb-1">
                  {realTimeData.conditions.windSpeed.toFixed(1)} km/h
                </div>
                <div className="text-gray-300 text-sm">Wind Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D89F7B] mb-1">
                  {realTimeData.satelliteData.cloudCover.toFixed(0)}%
                </div>
                <div className="text-gray-300 text-sm">Cloud Cover</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Brain className="h-5 w-5 text-[#BFA2DB]" />
            Granite LLM - Ethical AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recommendations" className="space-y-4">
            <TabsList className="bg-[#0F2027]/50">
              <TabsTrigger
                value="recommendations"
                className="data-[state=active]:bg-[#BFA2DB] data-[state=active]:text-[#0F2027]"
              >
                Recommendations
              </TabsTrigger>
              <TabsTrigger
                value="ethical"
                className="data-[state=active]:bg-[#BFA2DB] data-[state=active]:text-[#0F2027]"
              >
                Ethical Considerations
              </TabsTrigger>
              <TabsTrigger
                value="community"
                className="data-[state=active]:bg-[#BFA2DB] data-[state=active]:text-[#0F2027]"
              >
                Community Impact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations" className="space-y-4">
              {predictionData.aiRecommendations?.map((rec, index) => (
                <div key={index} className="p-4 bg-[#0F2027]/50 rounded-lg border border-[#BFA2DB]/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <Badge
                        className={`mb-2 ${
                          rec.priority === "High"
                            ? "bg-[#FF6A00]"
                            : rec.priority === "Medium"
                              ? "bg-[#D89F7B]"
                              : "bg-[#A3C9A8]"
                        } text-white`}
                      >
                        {rec.priority} Priority
                      </Badge>
                      <h4 className="text-white font-semibold">{rec.category}</h4>
                      <p className="text-gray-300 text-sm mt-1">{rec.action}</p>
                    </div>
                    <Clock className="h-4 w-4 text-[#BFA2DB]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Timeline:</span>
                      <div className="text-white font-medium">{rec.timeline}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Resources:</span>
                      <div className="text-white font-medium">{rec.resources?.join(", ")}</div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="ethical" className="space-y-3">
              {predictionData.ethicalConsiderations?.map((consideration, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-[#0F2027]/50 rounded-lg">
                  <Shield className="h-4 w-4 text-[#A3C9A8] mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{consideration}</p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="community" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Impact Assessment</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Affected Population</span>
                      <span className="text-[#FF6A00] font-semibold">
                        {predictionData.communityImpact?.affectedPopulation?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Vulnerable Groups</span>
                      <span className="text-[#D89F7B] font-semibold">
                        {predictionData.communityImpact?.vulnerableGroups?.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Infrastructure Risk</span>
                      <Badge className="bg-[#FF6A00] text-white">
                        {predictionData.communityImpact?.infrastructureRisk}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Economic Sectors at Risk</h4>
                  <div className="space-y-2">
                    {predictionData.communityImpact?.economicSectors?.map((sector, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#A3C9A8] rounded-full"></div>
                        <span className="text-gray-300">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* RAG Enhanced Context */}
      <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#A3C9A8]" />
            RAG-Enhanced Regional Intelligence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Historical Precedents</h4>
              <div className="space-y-2">
                {predictionData.historicalPrecedents?.map((precedent, index) => (
                  <div key={index} className="p-2 bg-[#0F2027]/50 rounded text-gray-300 text-sm">
                    {precedent}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Contextual Insights</h4>
              <div className="space-y-2">
                {predictionData.contextualInsights?.map((insight, index) => (
                  <div key={index} className="p-2 bg-[#0F2027]/50 rounded text-gray-300 text-sm">
                    {insight}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Analytics */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Risk Factor Radar */}
        <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
          <CardHeader>
            <CardTitle className="text-white">Multi-Factor Risk Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={predictionData.riskFactors}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="name" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9CA3AF", fontSize: 10 }} />
                <Radar
                  name="Risk Level"
                  dataKey="value"
                  stroke="#FF6A00"
                  fill="#FF6A00"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Forecast Confidence */}
        <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
          <CardHeader>
            <CardTitle className="text-white">7-Day Forecast Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={predictionData.forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="confidence"
                  stroke="#A3C9A8"
                  fill="#A3C9A8"
                  fillOpacity={0.3}
                  name="Confidence %"
                />
                <Area
                  type="monotone"
                  dataKey="probability"
                  stroke="#BFA2DB"
                  fill="#BFA2DB"
                  fillOpacity={0.3}
                  name="Probability %"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Critical Alerts */}
      {predictionData.alerts?.map((alert, index) => (
        <Alert key={index} className={`border-[${alert.color}]/50 bg-[${alert.color}]/10`}>
          <AlertTriangle className="h-4 w-4" style={{ color: alert.color }} />
          <AlertDescription className="text-white">
            <div className="flex items-start justify-between">
              <div>
                <strong>{alert.level} Alert:</strong> {alert.message}
                <div className="mt-2 space-y-1">
                  {alert.actions?.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1 h-1 bg-current rounded-full"></div>
                      {action}
                    </div>
                  ))}
                </div>
              </div>
              <Badge className="bg-current text-[#0F2027]">{alert.level}</Badge>
            </div>
          </AlertDescription>
        </Alert>
      ))}
    </div>
  )
}
