"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Cloud,
  Leaf,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Thermometer,
  Droplets,
  Wind,
  Factory,
  Car,
  Zap,
} from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts"
import Link from "next/link"

export default function DashboardPage() {
  const [weatherData, setWeatherData] = useState(null)
  const [carbonData, setCarbonData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setWeatherData({
        currentSeverity: 7.2,
        economicImpact: 2.4,
        riskLevel: "High",
        events: [
          { name: "Cyclone Risk", value: 85, color: "#FF6A00" },
          { name: "Flood Risk", value: 72, color: "#D89F7B" },
          { name: "Drought Risk", value: 45, color: "#BFA2DB" },
          { name: "Heatwave Risk", value: 68, color: "#A3C9A8" },
        ],
      })

      setCarbonData({
        totalEmissions: 1247.5,
        reductionTarget: 35,
        currentReduction: 18,
        complianceScore: 78,
        breakdown: [
          { name: "Energy", value: 45, color: "#FF6A00" },
          { name: "Transport", value: 28, color: "#A3C9A8" },
          { name: "Manufacturing", value: 18, color: "#BFA2DB" },
          { name: "Waste", value: 9, color: "#D89F7B" },
        ],
      })

      setLoading(false)
    }, 1500)
  }, [])

  const weatherTrendData = [
    { month: "Jan", severity: 3.2, impact: 1.1 },
    { month: "Feb", severity: 4.1, impact: 1.4 },
    { month: "Mar", severity: 5.8, impact: 1.9 },
    { month: "Apr", severity: 6.5, impact: 2.1 },
    { month: "May", severity: 7.2, impact: 2.4 },
    { month: "Jun", severity: 8.1, impact: 2.8 },
  ]

  const carbonTrendData = [
    { month: "Jan", emissions: 1450, target: 1300 },
    { month: "Feb", emissions: 1380, target: 1280 },
    { month: "Mar", emissions: 1320, target: 1260 },
    { month: "Apr", emissions: 1290, target: 1240 },
    { month: "May", emissions: 1260, target: 1220 },
    { month: "Jun", emissions: 1248, target: 1200 },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F2027] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3C9A8] mx-auto mb-4"></div>
          <p className="text-white">Loading climate intelligence data...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0F2027] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Climate Intelligence Dashboard</h1>
          <p className="text-gray-300">Real-time insights for weather prediction and carbon management</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Weather Severity</p>
                  <p className="text-2xl font-bold text-[#FF6A00]">{weatherData?.currentSeverity}/10</p>
                </div>
                <Thermometer className="h-8 w-8 text-[#FF6A00]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Economic Impact</p>
                  <p className="text-2xl font-bold text-[#D89F7B]">₹{weatherData?.economicImpact}Cr</p>
                </div>
                <TrendingUp className="h-8 w-8 text-[#D89F7B]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Carbon Emissions</p>
                  <p className="text-2xl font-bold text-[#A3C9A8]">{carbonData?.totalEmissions}t</p>
                </div>
                <Leaf className="h-8 w-8 text-[#A3C9A8]" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Compliance Score</p>
                  <p className="text-2xl font-bold text-[#BFA2DB]">{carbonData?.complianceScore}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-[#BFA2DB]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger value="weather" className="data-[state=active]:bg-[#FF6A00] data-[state=active]:text-white">
              Weather Intelligence
            </TabsTrigger>
            <TabsTrigger value="carbon" className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]">
              Carbon Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Weather Overview */}
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-[#FF6A00]" />
                    Weather Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Current Risk Level</span>
                      <Badge className="bg-[#FF6A00] text-white">{weatherData?.riskLevel}</Badge>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={weatherData?.events}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {weatherData?.events.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Carbon Overview */}
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-[#A3C9A8]" />
                    Carbon Footprint Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Reduction Progress</span>
                      <span className="text-[#A3C9A8] font-semibold">{carbonData?.currentReduction}%</span>
                    </div>
                    <Progress value={carbonData?.currentReduction} className="h-2 bg-gray-700" />
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={carbonData?.breakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {carbonData?.breakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trend Analysis */}
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white">6-Month Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weatherTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                    />
                    <Line type="monotone" dataKey="severity" stroke="#FF6A00" strokeWidth={2} name="Weather Severity" />
                    <Line
                      type="monotone"
                      dataKey="impact"
                      stroke="#D89F7B"
                      strokeWidth={2}
                      name="Economic Impact (Cr)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="weather" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Current Conditions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-[#FF6A00]" />
                      <span className="text-gray-300">Temperature</span>
                    </div>
                    <span className="text-white font-semibold">42°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-[#BFA2DB]" />
                      <span className="text-gray-300">Humidity</span>
                    </div>
                    <span className="text-white font-semibold">78%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Wind className="h-4 w-4 text-[#A3C9A8]" />
                      <span className="text-gray-300">Wind Speed</span>
                    </div>
                    <span className="text-white font-semibold">24 km/h</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2 bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white">Risk Assessment Gauge</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="90%"
                      data={[{ value: weatherData?.currentSeverity * 10 }]}
                    >
                      <RadialBar dataKey="value" fill="#FF6A00" />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="text-center mt-4">
                    <p className="text-2xl font-bold text-[#FF6A00]">{weatherData?.currentSeverity}/10</p>
                    <p className="text-gray-300">Severity Score</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Alert className="border-[#FF6A00]/50 bg-[#FF6A00]/10">
              <AlertTriangle className="h-4 w-4 text-[#FF6A00]" />
              <AlertDescription className="text-white">
                High cyclone risk detected for coastal regions. Economic impact estimated at ₹
                {weatherData?.economicImpact} Crores. Immediate preparedness measures recommended.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Link href="/weather">
                <Button className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white">Detailed Weather Analysis</Button>
              </Link>
              <Button
                variant="outline"
                className="border-[#A3C9A8] text-[#A3C9A8] hover:bg-[#A3C9A8] hover:text-[#0F2027] bg-transparent"
              >
                Export Report
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="carbon" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white">Emission Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {carbonData?.breakdown.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.name === "Energy" && <Zap className="h-4 w-4" style={{ color: item.color }} />}
                          {item.name === "Transport" && <Car className="h-4 w-4" style={{ color: item.color }} />}
                          {item.name === "Manufacturing" && (
                            <Factory className="h-4 w-4" style={{ color: item.color }} />
                          )}
                          {item.name === "Waste" && <Leaf className="h-4 w-4" style={{ color: item.color }} />}
                          <span className="text-gray-300">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={item.value} className="w-20 h-2" />
                          <span className="text-white font-semibold w-12">{item.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white">Compliance Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Indian Standards</span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#A3C9A8]" />
                        <span className="text-[#A3C9A8]">Compliant</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Global Standards</span>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-[#FF6A00]" />
                        <span className="text-[#FF6A00]">Needs Improvement</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Net Zero Target</span>
                      <div className="flex items-center gap-2">
                        <XCircle className="h-4 w-4 text-[#D89F7B]" />
                        <span className="text-[#D89F7B]">Behind Schedule</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white">Emission Trends vs Targets</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={carbonTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
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
                      dataKey="emissions"
                      stroke="#D89F7B"
                      fill="#D89F7B"
                      fillOpacity={0.3}
                      name="Actual Emissions"
                    />
                    <Area
                      type="monotone"
                      dataKey="target"
                      stroke="#A3C9A8"
                      fill="#A3C9A8"
                      fillOpacity={0.3}
                      name="Target Emissions"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <Link href="/carbon">
                <Button className="bg-[#A3C9A8] hover:bg-[#A3C9A8]/90 text-[#0F2027]">Detailed Carbon Analysis</Button>
              </Link>
              <Button
                variant="outline"
                className="border-[#BFA2DB] text-[#BFA2DB] hover:bg-[#BFA2DB] hover:text-[#0F2027] bg-transparent"
              >
                Generate Roadmap
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
