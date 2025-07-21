import type { NextRequest } from "next/server"

// Real-time weather data streaming using Server-Sent Events
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const region = searchParams.get("region") || "Mumbai"

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    start(controller) {
      const sendUpdate = () => {
        const weatherUpdate = {
          timestamp: new Date().toISOString(),
          region,
          conditions: {
            temperature: 35 + Math.random() * 10,
            humidity: 70 + Math.random() * 20,
            windSpeed: 15 + Math.random() * 25,
            pressure: 1005 + Math.random() * 15,
            visibility: 8 + Math.random() * 7,
          },
          alerts: generateRealTimeAlerts(),
          satelliteData: {
            cloudCover: Math.random() * 100,
            precipitationRate: Math.random() * 20,
            stormIntensity: Math.random() * 100,
          },
        }

        const data = `data: ${JSON.stringify(weatherUpdate)}\n\n`
        controller.enqueue(encoder.encode(data))
      }

      // Send initial data
      sendUpdate()

      // Send updates every 30 seconds
      const interval = setInterval(sendUpdate, 30000)

      // Cleanup on close
      request.signal.addEventListener("abort", () => {
        clearInterval(interval)
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}

function generateRealTimeAlerts() {
  const alerts = []
  const alertTypes = ["wind", "rain", "temperature", "visibility"]

  alertTypes.forEach((type) => {
    if (Math.random() > 0.7) {
      alerts.push({
        type,
        level: Math.random() > 0.5 ? "warning" : "watch",
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} conditions changing`,
        timestamp: new Date().toISOString(),
      })
    }
  })

  return alerts
}
