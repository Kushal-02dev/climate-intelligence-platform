"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Leaf, TrendingUp, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Cloud,
      title: "Weather Prediction",
      description: "AI-powered extreme weather event forecasting with severity scoring and economic impact assessment",
      color: "bg-blue-500",
    },
    {
      icon: Leaf,
      title: "Carbon Analytics",
      description: "Comprehensive carbon footprint analysis with automated recommendations and compliance tracking",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "Advanced modeling using RAG and Granite LLM for contextual, ethical recommendations",
      color: "bg-purple-500",
    },
    {
      icon: Shield,
      title: "Compliance Ready",
      description: "Built-in regulatory compliance for Indian and global environmental standards",
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#BFA2DB]/20 to-[#A3C9A8]/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <Badge className="mb-4 bg-[#FF6A00] text-white hover:bg-[#FF6A00]/90">Climate Intelligence Platform</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Predict. Analyze.
              <span className="text-[#A3C9A8]"> Act.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered platform for extreme weather prediction and carbon footprint analysis, designed
              specifically for Indian environmental contexts and global compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white">
                  Launch Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/weather">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#A3C9A8] text-[#A3C9A8] hover:bg-[#A3C9A8] hover:text-[#0F2027] bg-transparent"
                >
                  Weather Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Platform Capabilities</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive climate intelligence tools powered by advanced AI and real-time data integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20 hover:bg-[#A3C9A8]/20 transition-all duration-300 cursor-pointer"
              onClick={() => setActiveFeature(index)}
            >
              <CardHeader className="text-center">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6A00] mb-2">99.2%</div>
            <div className="text-white font-semibold mb-1">Prediction Accuracy</div>
            <div className="text-gray-400 text-sm">For extreme weather events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#A3C9A8] mb-2">45%</div>
            <div className="text-white font-semibold mb-1">Average Reduction</div>
            <div className="text-gray-400 text-sm">In organizational carbon footprint</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#BFA2DB] mb-2">24/7</div>
            <div className="text-white font-semibold mb-1">Real-time Monitoring</div>
            <div className="text-gray-400 text-sm">Continuous environmental tracking</div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-[#BFA2DB]/20 to-[#A3C9A8]/20 border-[#BFA2DB]/30">
          <CardContent className="p-8 text-center">
            <Globe className="h-12 w-12 text-[#A3C9A8] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Climate Strategy?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join organizations across India leveraging AI-powered climate intelligence for better decision-making and
              environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/carbon">
                <Button className="bg-[#A3C9A8] hover:bg-[#A3C9A8]/90 text-[#0F2027]">
                  <Leaf className="mr-2 h-4 w-4" />
                  Carbon Analysis
                </Button>
              </Link>
              <Link href="/weather">
                <Button
                  variant="outline"
                  className="border-[#BFA2DB] text-[#BFA2DB] hover:bg-[#BFA2DB] hover:text-[#0F2027] bg-transparent"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Weather Prediction
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
