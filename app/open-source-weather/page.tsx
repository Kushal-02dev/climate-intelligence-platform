"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { OpenSourceDashboard } from "@/components/open-source-dashboard"
import { Github, Star, Download } from "lucide-react"

export default function OpenSourceWeatherPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const benefits = [
    {
      title: "Zero Licensing Costs",
      description: "Save ₹6+ lakhs annually compared to IBM EIS",
      icon: "💰",
      savings: "₹6,00,000/year",
    },
    {
      title: "Full Data Control",
      description: "Your data stays on your infrastructure",
      icon: "🔒",
      savings: "100% Privacy",
    },
    {
      title: "Unlimited Scaling",
      description: "No API call limits or usage restrictions",
      icon: "📈",
      savings: "Unlimited",
    },
    {
      title: "Community Support",
      description: "Active open-source communities and documentation",
      icon: "👥",
      savings: "24/7 Community",
    },
  ]

  const comparison = [
    {
      feature: "Weather Data",
      ibm: "IBM Weather API (Paid)",
      openSource: "OpenWeatherMap (Free)",
      status: "✅",
    },
    {
      feature: "Satellite Data",
      ibm: "IBM Satellite Imagery (Paid)",
      openSource: "NASA Earth Data (Free)",
      status: "✅",
    },
    {
      feature: "AI Predictions",
      ibm: "IBM Watson (Paid)",
      openSource: "TensorFlow.js + Ollama (Free)",
      status: "✅",
    },
    {
      feature: "Knowledge Base",
      ibm: "IBM Watson Discovery (Paid)",
      openSource: "Chroma DB + RAG (Free)",
      status: "✅",
    },
    {
      feature: "Real-time Streaming",
      ibm: "IBM Event Streams (Paid)",
      openSource: "Apache Kafka (Free)",
      status: "✅",
    },
    {
      feature: "Time Series DB",
      ibm: "IBM Db2 (Paid)",
      openSource: "InfluxDB (Free)",
      status: "✅",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F2027] p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#A3C9A8] to-[#BFA2DB] rounded-lg flex items-center justify-center">
              <Github className="h-5 w-5 text-[#0F2027]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Open Source Weather Intelligence</h1>
              <p className="text-gray-300">Free alternative to IBM Environmental Intelligence Suite</p>
            </div>
            <div className="ml-auto flex gap-2">
              <Badge className="bg-[#A3C9A8] text-[#0F2027]">100% Free</Badge>
              <Badge className="bg-[#FF6A00] text-white">Open Source</Badge>
            </div>
          </div>

          {/* Cost Comparison */}
          <Card className="bg-gradient-to-r from-[#A3C9A8]/20 to-[#BFA2DB]/20 border-[#A3C9A8]/30">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#FF6A00] mb-2">₹6,00,000+</div>
                  <div className="text-white font-semibold mb-1">IBM EIS Annual Cost</div>
                  <div className="text-gray-300 text-sm">Licensing + Integration + Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#A3C9A8] mb-2">₹0</div>
                  <div className="text-white font-semibold mb-1">Open Source Stack</div>
                  <div className="text-gray-300 text-sm">Only infrastructure costs</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
                <Badge className="bg-[#A3C9A8] text-[#0F2027]">{benefit.savings}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white">Feature Comparison: IBM EIS vs Open Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#A3C9A8]/20">
                    <th className="text-left text-white p-3">Feature</th>
                    <th className="text-left text-white p-3">IBM EIS (Paid)</th>
                    <th className="text-left text-white p-3">Open Source Alternative</th>
                    <th className="text-center text-white p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-[#A3C9A8]/10">
                      <td className="text-gray-300 p-3 font-medium">{item.feature}</td>
                      <td className="text-gray-400 p-3">{item.ibm}</td>
                      <td className="text-[#A3C9A8] p-3">{item.openSource}</td>
                      <td className="text-center p-3">
                        <span className="text-[#A3C9A8] text-xl">{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Open Source Dashboard */}
        <OpenSourceDashboard />

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button className="bg-[#A3C9A8] hover:bg-[#A3C9A8]/90 text-[#0F2027]">
            <Download className="mr-2 h-4 w-4" />
            Download Setup Guide
          </Button>
          <Button
            variant="outline"
            className="border-[#BFA2DB] text-[#BFA2DB] hover:bg-[#BFA2DB] hover:text-[#0F2027] bg-transparent"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
          <Button
            variant="outline"
            className="border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00] hover:text-white bg-transparent"
          >
            <Star className="mr-2 h-4 w-4" />
            Star Project
          </Button>
        </div>
      </div>
    </div>
  )
}
