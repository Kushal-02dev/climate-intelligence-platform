"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database, Zap, Brain, Map, Activity, Wifi, CheckCircle, AlertTriangle, Github, Download } from "lucide-react"

export function OpenSourceDashboard() {
  const [systemStatus, setSystemStatus] = useState({
    kafka: "connected",
    influxdb: "connected",
    chroma: "connected",
    ollama: "connected",
    postgis: "connected",
    prometheus: "connected",
  })

  const [metrics, setMetrics] = useState({
    weatherUpdates: 1247,
    predictions: 89,
    knowledgeEntries: 15420,
    activeAlerts: 3,
  })

  const openSourceStack = [
    {
      name: "Apache Kafka",
      purpose: "Real-time data streaming",
      status: systemStatus.kafka,
      icon: Zap,
      description: "Handles weather data streams and real-time updates",
      license: "Apache 2.0",
      cost: "Free",
    },
    {
      name: "InfluxDB",
      purpose: "Time-series database",
      status: systemStatus.influxdb,
      icon: Database,
      description: "Stores historical weather and climate data",
      license: "MIT",
      cost: "Free",
    },
    {
      name: "Chroma DB",
      purpose: "Vector knowledge base",
      status: systemStatus.chroma,
      icon: Brain,
      description: "RAG system for climate knowledge retrieval",
      license: "Apache 2.0",
      cost: "Free",
    },
    {
      name: "Ollama",
      purpose: "Local LLM inference",
      status: systemStatus.ollama,
      icon: Brain,
      description: "Runs Llama 2/3 models locally for recommendations",
      license: "MIT",
      cost: "Free",
    },
    {
      name: "PostGIS",
      purpose: "Geospatial analysis",
      status: systemStatus.postgis,
      icon: Map,
      description: "Geographic risk analysis and spatial queries",
      license: "GPL",
      cost: "Free",
    },
    {
      name: "Prometheus",
      purpose: "Monitoring & alerting",
      status: systemStatus.prometheus,
      icon: Activity,
      description: "System metrics and automated alerting",
      license: "Apache 2.0",
      cost: "Free",
    },
  ]

  const dataAPIs = [
    {
      name: "OpenWeatherMap",
      purpose: "Current weather data",
      tier: "Free (1000 calls/day)",
      icon: Wifi,
      status: "active",
    },
    {
      name: "NASA Earth Data",
      purpose: "Satellite imagery",
      tier: "Free",
      icon: Wifi,
      status: "active",
    },
    {
      name: "NOAA Climate Data",
      purpose: "Climate normals",
      tier: "Free",
      icon: Wifi,
      status: "active",
    },
  ]

  return (
    <div className="space-y-6">
      {/* System Overview */}
      <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Github className="h-5 w-5 text-[#A3C9A8]" />
            Open Source Weather Intelligence Stack
            <Badge className="ml-auto bg-[#A3C9A8] text-[#0F2027]">100% Free</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#A3C9A8] mb-1">{metrics.weatherUpdates}</div>
              <div className="text-gray-300 text-sm">Weather Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#BFA2DB] mb-1">{metrics.predictions}</div>
              <div className="text-gray-300 text-sm">AI Predictions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF6A00] mb-1">{metrics.knowledgeEntries.toLocaleString()}</div>
              <div className="text-gray-300 text-sm">Knowledge Entries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D89F7B] mb-1">{metrics.activeAlerts}</div>
              <div className="text-gray-300 text-sm">Active Alerts</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="stack" className="space-y-6">
        <TabsList className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
          <TabsTrigger value="stack" className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]">
            Tech Stack
          </TabsTrigger>
          <TabsTrigger value="apis" className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]">
            Data APIs
          </TabsTrigger>
          <TabsTrigger value="setup" className="data-[state=active]:bg-[#A3C9A8] data-[state=active]:text-[#0F2027]">
            Setup Guide
          </TabsTrigger>
        </TabsList>

        <TabsContent value="stack" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            {openSourceStack.map((service, index) => (
              <Card key={index} className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <service.icon className="h-5 w-5 text-[#BFA2DB]" />
                    {service.name}
                    <Badge
                      className={`ml-auto ${
                        service.status === "connected" ? "bg-[#A3C9A8]" : "bg-[#D89F7B]"
                      } text-[#0F2027]`}
                    >
                      {service.status === "connected" ? "Connected" : "Disconnected"}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-gray-300 text-sm">{service.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Purpose:</span>
                      <span className="text-white">{service.purpose}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">License:</span>
                      <span className="text-[#A3C9A8]">{service.license}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Cost:</span>
                      <Badge className="bg-[#A3C9A8] text-[#0F2027]">{service.cost}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="apis" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            {dataAPIs.map((api, index) => (
              <Card key={index} className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <api.icon className="h-5 w-5 text-[#BFA2DB]" />
                    {api.name}
                    {api.status === "active" ? (
                      <CheckCircle className="h-4 w-4 text-[#A3C9A8] ml-auto" />
                    ) : (
                      <AlertTriangle className="h-4 w-4 text-[#FF6A00] ml-auto" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Purpose:</span>
                      <span className="text-white">{api.purpose}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Tier:</span>
                      <Badge className="bg-[#A3C9A8] text-[#0F2027]">{api.tier}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert className="border-[#A3C9A8]/50 bg-[#A3C9A8]/10">
            <CheckCircle className="h-4 w-4 text-[#A3C9A8]" />
            <AlertDescription className="text-white">
              <strong>Cost Savings:</strong> This open-source stack replaces IBM Environmental Intelligence Suite
              (₹50,000+/month) with free alternatives, saving over ₹6 lakhs annually while maintaining full
              functionality.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="setup" className="space-y-4">
          <Card className="bg-[#A3C9A8]/10 border-[#A3C9A8]/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Download className="h-5 w-5 text-[#A3C9A8]" />
                Quick Setup Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">1. Install Core Services</h4>
                  <div className="bg-[#0F2027]/50 p-3 rounded-lg">
                    <code className="text-[#A3C9A8] text-sm">
                      {`# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Start the stack
docker-compose up -d kafka influxdb chroma postgis prometheus`}
                    </code>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">2. Setup Ollama (Local LLM)</h4>
                  <div className="bg-[#0F2027]/50 p-3 rounded-lg">
                    <code className="text-[#A3C9A8] text-sm">
                      {`# Install Ollama
curl -fsSL https://ollama.ai/install.sh | sh

# Pull Llama 2 model
ollama pull llama2

# Start Ollama service
ollama serve`}
                    </code>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">3. Configure API Keys</h4>
                  <div className="bg-[#0F2027]/50 p-3 rounded-lg">
                    <code className="text-[#A3C9A8] text-sm">
                      {`# Add to .env file
OPENWEATHER_API_KEY=your_free_api_key
NASA_API_KEY=DEMO_KEY  # Free tier available
NOAA_API_KEY=your_free_api_key`}
                    </code>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">4. Initialize Knowledge Base</h4>
                  <div className="bg-[#0F2027]/50 p-3 rounded-lg">
                    <code className="text-[#A3C9A8] text-sm">
                      {`# Load climate knowledge into Chroma
npm run seed-knowledge

# Create PostGIS spatial indexes
npm run setup-spatial-db`}
                    </code>
                  </div>
                </div>

                <Alert className="border-[#BFA2DB]/50 bg-[#BFA2DB]/10">
                  <CheckCircle className="h-4 w-4 text-[#BFA2DB]" />
                  <AlertDescription className="text-white">
                    <strong>Total Setup Time:</strong> ~30 minutes | <strong>Monthly Cost:</strong> ₹0 (only server
                    costs)
                    <br />
                    <strong>vs IBM EIS:</strong> 6+ months integration | ₹50,000+/month licensing
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
