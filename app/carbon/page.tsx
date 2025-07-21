"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  Upload,
  Factory,
  Car,
  Zap,
  Trash2,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Target,
  BarChart3,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"

export default function CarbonPage() {
  const [organizationData, setOrganizationData] = useState({
    name: "",
    industry: "",
    employees: "",
    revenue: "",
  })
  const [analysis, setAnalysis] = useState(null)
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef(null)

  const handleAnalysis = async () => {
    if (!organizationData.name || !organizationData.industry) return

    setLoading(true)

    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis({
        totalEmissions: 1247.5,
        emissionIntensity: 2.8,
        benchmarkComparison: 15, // % above industry average
        carbonScore: 72,
        breakdown: [
          { name: "Energy Consumption", value: 45, emissions: 561.4, color: "#FF6A00" },
          { name: "Transportation", value: 28, emissions: 349.3, color: "#A3C9A8" },
          { name: "Manufacturing", value: 18, emissions: 224.6, color: "#BFA2DB" },
          { name: "Waste Management", value: 9, emissions: 112.2, color: "#D89F7B" },
        ],
        monthlyTrend: [
          { month: "Jan", emissions: 1450, target: 1300, reduction: 0 },
          { month: "Feb", emissions: 1380, target: 1280, reduction: 5 },
          { month: "Mar", emissions: 1320, target: 1260, reduction: 9 },
          { month: "Apr", emissions: 1290, target: 1240, reduction: 11 },
          { month: "May", emissions: 1260, target: 1220, reduction: 13 },
          { month: "Jun", emissions: 1248, target: 1200, reduction: 14 },
        ],
        recommendations: [
          {
            category: "Energy Efficiency",
            impact: "High",
            reduction: "25%",
            description: "Implement LED lighting and smart HVAC systems",
            cost: "Medium",
            timeframe: "3-6 months",
          },
          {
            category: "Renewable Energy",
            impact: "High",
            reduction: "35%",
            description: "Install solar panels and switch to renewable energy sources",
            cost: "High",
            timeframe: "6-12 months",
          },
          {
            category: "Transportation",
            impact: "Medium",
            reduction: "15%",
            description: "Promote electric vehicles and remote work policies",
            cost: "Low",
            timeframe: "1-3 months",
          },
          {
            category: "Waste Reduction",
            impact: "Medium",
            reduction: "20%",
            description: "Implement circular economy practices and recycling programs",
            cost: "Low",
            timeframe: "1-2 months",
          },
        ],
        compliance: {
          indian: { status: "Compliant", score: 85 },
          global: { status: "Needs Improvement", score: 68 },
          netZero: { status: "Behind Schedule", score: 45 },
        },
        roadmap: [
          {
            phase: "Phase 1 (0-6 months)",
            target: 15,
            actions: ["Energy audit", "LED installation", "Policy changes"],
          },
          { phase: "Phase 2 (6-18 months)", target: 35, actions: ["Solar installation", "EV fleet", "Waste programs"] },
          { phase: "Phase 3 (18-36 months)", target: 55, actions: ["Advanced tech", "Carbon offsets", "Supply chain"] },
        ],
      })
      setLoading(false)
    }, 2500)
  }

  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      // Simulate file processing
      console.log("Processing file:", file.name)
    }
  }

  return (
    <div className="min-h-screen bg-[#0F2027] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Carbon Footprint Analytics</h1>
          <p className="text-gray-300">AI-powered carbon emission analysis and reduction planning</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Factory className="h-5 w-5 text-[#A3C9A8]" />
                  Organization Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-300">Organization Name</Label>
                  <Input
                    value={organizationData.name}
                    onChange={(e) => setOrganizationData({ ...organizationData, name: e.target.value })}
                    placeholder="Enter organization name"
                    className="bg-[#0F2027] border-[#A3C9A8]/30 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Industry</Label>
                  <Input
                    value={organizationData.industry}
                    onChange={(e) => setOrganizationData({ ...organizationData, industry: e.target.value })}
                    placeholder="e.g., Manufacturing, IT, Healthcare"
                    className="bg-[#0F2027] border-[#A3C9A8]/30 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Number of Employees</Label>
                  <Input
                    value={organizationData.employees}
                    onChange={(e) => setOrganizationData({ ...organizationData, employees: e.target.value })}
                    placeholder="e.g., 500"
                    type="number"
                    className="bg-[#0F2027] border-[#A3C9A8]/30 text-white"
                  />
                </div>

                <div>
                  <Label className="text-gray-300">Annual Revenue (Cr)</Label>
                  <Input
                    value={organizationData.revenue}
                    onChange={(e) => setOrganizationData({ ...organizationData, revenue: e.target.value })}
                    placeholder="e.g., 100"
                    type="number"
                    className="bg-[#0F2027] border-[#A3C9A8]/30 text-white"
                  />
                </div>

                <Button
                  onClick={handleAnalysis}
                  disabled={!organizationData.name || !organizationData.industry || loading}
                  className="w-full bg-[#A3C9A8] hover:bg-[#A3C9A8]/90 text-[#0F2027]"
                >
                  {loading ? "Analyzing..." : "Generate Analysis"}
                </Button>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Upload className="h-5 w-5 text-[#BFA2DB]" />
                  Data Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm">
                    Upload energy bills, fuel receipts, or emission data (CSV format)
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    variant="outline"
                    className="w-full border-[#BFA2DB] text-[#BFA2DB] hover:bg-[#BFA2DB] hover:text-[#0F2027]"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {loading && (
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardContent className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3C9A8] mx-auto mb-4"></div>
                  <p className="text-white">Processing carbon footprint data...</p>
                  <p className="text-gray-300 text-sm mt-2">
                    Analyzing energy consumption, transportation, and operational data
                  </p>
                </CardContent>
              </Card>
            )}

            {analysis && !loading && (
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="breakdown"
                    className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]"
                  >
                    Breakdown
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommendations"
                    className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]"
                  >
                    Recommendations
                  </TabsTrigger>
                  <TabsTrigger
                    value="compliance"
                    className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]"
                  >
                    Compliance
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Carbon Scorecard */}
                  <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-[#A3C9A8]" />
                        Carbon Scorecard for {organizationData.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#A3C9A8] mb-2">{analysis.totalEmissions}t</div>
                          <div className="text-white font-semibold mb-1">Total Emissions</div>
                          <Badge className="bg-[#D89F7B] text-white">CO₂ Equivalent</Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#FF6A00] mb-2">{analysis.emissionIntensity}</div>
                          <div className="text-white font-semibold mb-1">Intensity</div>
                          <Badge className="bg-[#FF6A00] text-white">tCO₂/Cr Revenue</Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#BFA2DB] mb-2">{analysis.carbonScore}</div>
                          <div className="text-white font-semibold mb-1">Carbon Score</div>
                          <Badge className="bg-[#BFA2DB] text-white">Out of 100</Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#D89F7B] mb-2">+{analysis.benchmarkComparison}%</div>
                          <div className="text-white font-semibold mb-1">vs Industry</div>
                          <Badge className="bg-[#D89F7B] text-white">Above Average</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emission Trends */}
                  <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                    <CardHeader>
                      <CardTitle className="text-white">Emission Trends vs Targets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={analysis.monthlyTrend}>
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
                            name="Actual Emissions (t)"
                          />
                          <Area
                            type="monotone"
                            dataKey="target"
                            stroke="#A3C9A8"
                            fill="#A3C9A8"
                            fillOpacity={0.3}
                            name="Target Emissions (t)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="breakdown" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Emission Sources Pie Chart */}
                    <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                      <CardHeader>
                        <CardTitle className="text-white">Emission Sources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={analysis.breakdown}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {analysis.breakdown.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </CardContent>
                    </Card>

                    {/* Detailed Breakdown */}
                    <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                      <CardHeader>
                        <CardTitle className="text-white">Detailed Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {analysis.breakdown.map((item, index) => (
                            <div key={index} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {item.name === "Energy Consumption" && (
                                    <Zap className="h-4 w-4" style={{ color: item.color }} />
                                  )}
                                  {item.name === "Transportation" && (
                                    <Car className="h-4 w-4" style={{ color: item.color }} />
                                  )}
                                  {item.name === "Manufacturing" && (
                                    <Factory className="h-4 w-4" style={{ color: item.color }} />
                                  )}
                                  {item.name === "Waste Management" && (
                                    <Trash2 className="h-4 w-4" style={{ color: item.color }} />
                                  )}
                                  <span className="text-gray-300">{item.name}</span>
                                </div>
                                <div className="text-right">
                                  <div className="text-white font-semibold">{item.emissions}t CO₂</div>
                                  <div className="text-gray-400 text-sm">{item.value}%</div>
                                </div>
                              </div>
                              <Progress
                                value={item.value}
                                className="h-2"
                                style={{ "--progress-background": item.color } as any}
                              />
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-6">
                  <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <Target className="h-5 w-5 text-[#A3C9A8]" />
                        AI-Generated Reduction Roadmap
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {analysis.recommendations.map((rec, index) => (
                          <div key={index} className="p-4 bg-[#0F2027]/50 rounded-lg border border-[#A3C9A8]/20">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-white font-semibold">{rec.category}</h4>
                                <p className="text-gray-300 text-sm mt-1">{rec.description}</p>
                              </div>
                              <Badge
                                className={`${
                                  rec.impact === "High"
                                    ? "bg-[#FF6A00]"
                                    : rec.impact === "Medium"
                                      ? "bg-[#BFA2DB]"
                                      : "bg-[#A3C9A8]"
                                } text-white`}
                              >
                                {rec.impact} Impact
                              </Badge>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div>
                                <span className="text-gray-400">Reduction Potential</span>
                                <div className="text-[#A3C9A8] font-semibold">{rec.reduction}</div>
                              </div>
                              <div>
                                <span className="text-gray-400">Investment</span>
                                <div className="text-white font-semibold">{rec.cost}</div>
                              </div>
                              <div>
                                <span className="text-gray-400">Timeline</span>
                                <div className="text-white font-semibold">{rec.timeframe}</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Implementation Roadmap */}
                  <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                    <CardHeader>
                      <CardTitle className="text-white">Implementation Roadmap</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {analysis.roadmap.map((phase, index) => (
                          <div key={index} className="flex items-start gap-4 p-4 bg-[#0F2027]/50 rounded-lg">
                            <div className="w-8 h-8 bg-[#A3C9A8] rounded-full flex items-center justify-center text-[#0F2027] font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold mb-2">{phase.phase}</h4>
                              <div className="flex items-center gap-4 mb-2">
                                <Badge className="bg-[#BFA2DB] text-white">Target: {phase.target}% Reduction</Badge>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {phase.actions.map((action, actionIndex) => (
                                  <Badge
                                    key={actionIndex}
                                    variant="outline"
                                    className="border-[#A3C9A8] text-[#A3C9A8]"
                                  >
                                    {action}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="compliance" className="space-y-6">
                  <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                    <CardHeader>
                      <CardTitle className="text-white">Regulatory Compliance Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-[#0F2027]/50 rounded-lg">
                          <div className="flex items-center justify-center mb-3">
                            <CheckCircle className="h-8 w-8 text-[#A3C9A8]" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Indian Standards</h4>
                          <div className="text-2xl font-bold text-[#A3C9A8] mb-1">
                            {analysis.compliance.indian.score}%
                          </div>
                          <Badge className="bg-[#A3C9A8] text-[#0F2027]">{analysis.compliance.indian.status}</Badge>
                        </div>

                        <div className="text-center p-4 bg-[#0F2027]/50 rounded-lg">
                          <div className="flex items-center justify-center mb-3">
                            <AlertTriangle className="h-8 w-8 text-[#FF6A00]" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Global Standards</h4>
                          <div className="text-2xl font-bold text-[#FF6A00] mb-1">
                            {analysis.compliance.global.score}%
                          </div>
                          <Badge className="bg-[#FF6A00] text-white">{analysis.compliance.global.status}</Badge>
                        </div>

                        <div className="text-center p-4 bg-[#0F2027]/50 rounded-lg">
                          <div className="flex items-center justify-center mb-3">
                            <XCircle className="h-8 w-8 text-[#D89F7B]" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Net Zero Target</h4>
                          <div className="text-2xl font-bold text-[#D89F7B] mb-1">
                            {analysis.compliance.netZero.score}%
                          </div>
                          <Badge className="bg-[#D89F7B] text-white">{analysis.compliance.netZero.status}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Alert className="border-[#A3C9A8]/50 bg-[#A3C9A8]/10">
                    <CheckCircle className="h-4 w-4 text-[#A3C9A8]" />
                    <AlertDescription className="text-white">
                      Your organization meets Indian environmental standards but needs improvement for global
                      compliance. Focus on renewable energy adoption and supply chain optimization to achieve net-zero
                      targets.
                    </AlertDescription>
                  </Alert>
                </TabsContent>
              </Tabs>
            )}

            {!analysis && !loading && (
              <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardContent className="p-8 text-center">
                  <Leaf className="h-16 w-16 text-[#A3C9A8] mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Ready for Carbon Analysis</h3>
                  <p className="text-gray-300">
                    Enter your organization details to generate comprehensive carbon footprint insights
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
