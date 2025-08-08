"use client"

import { useState } from "react"
import Header from "@/components/header"
import { indianRegions, weatherScenarios, geographyTypes, disasterPredictions } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react"

export default function DisasterCastPage() {
  const [region, setRegion] = useState<string>("Sikkim")
  const [weather, setWeather] = useState<string>("Heavy Rain")
  const [geography, setGeography] = useState<string>("Hill")
  const [prediction, setPrediction] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const runSimulation = () => {
    setIsLoading(true)

    // Simulate API call delay
    setTimeout(() => {
      const key = `${region}-${weather}-${geography}`
      const result = disasterPredictions[key as keyof typeof disasterPredictions] || {
        prediction: "No significant disaster risk detected",
        probability: 15,
        timeline: [
          { hour: 0, risk: 15 },
          { hour: 12, risk: 15 },
          { hour: 24, risk: 15 },
          { hour: 36, risk: 15 },
          { hour: 48, risk: 15 },
        ],
        safetyAction: "Low Risk",
        details: "Current conditions do not indicate significant disaster risk in the next 48 hours.",
      }

      setPrediction(result)
      setIsLoading(false)
    }, 1500)
  }

  // Helper function to get alert variant based on probability
  const getAlertVariant = (probability: number) => {
    if (probability >= 70) return "destructive"
    if (probability >= 40) return "warning"
    return "default"
  }

  // Helper function to get alert icon based on safety action
  const getAlertIcon = (action: string) => {
    if (action === "Evacuate") return <AlertTriangle className="h-5 w-5" />
    if (action === "Stay Alert") return <AlertCircle className="h-5 w-5" />
    return <CheckCircle className="h-5 w-5" />
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="🔮 DisasterCast Simulator" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Disaster Prediction Inputs</CardTitle>
            <CardDescription>Enter parameters to simulate disaster scenarios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {indianRegions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Weather Scenario</label>
              <Select value={weather} onValueChange={setWeather}>
                <SelectTrigger>
                  <SelectValue placeholder="Select weather scenario" />
                </SelectTrigger>
                <SelectContent>
                  {weatherScenarios.map((scenario) => (
                    <SelectItem key={scenario} value={scenario}>
                      {scenario}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Geography</label>
              <Select value={geography} onValueChange={setGeography}>
                <SelectTrigger>
                  <SelectValue placeholder="Select geography type" />
                </SelectTrigger>
                <SelectContent>
                  {geographyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={runSimulation}
              disabled={isLoading}
              className="w-full bg-india-blue hover:bg-india-blue/90"
            >
              {isLoading ? "Simulating..." : "Run Simulation"}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prediction Results</CardTitle>
            <CardDescription>Disaster risk assessment based on inputs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {prediction ? (
              <>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">{prediction.prediction}</h3>
                  <div className="flex justify-center items-center mt-2">
                    <Badge
                      className={
                        prediction.probability >= 70
                          ? "bg-red-500"
                          : prediction.probability >= 40
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }
                    >
                      {prediction.probability}% Probability
                    </Badge>
                  </div>
                </div>

                <Alert variant={getAlertVariant(prediction.probability)}>
                  {getAlertIcon(prediction.safetyAction)}
                  <AlertTitle>Safety Action: {prediction.safetyAction}</AlertTitle>
                  <AlertDescription>{prediction.details}</AlertDescription>
                </Alert>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Risk Timeline (T+0 to T+48 hrs)</h4>
                  <div className="h-[150px] flex items-end justify-between gap-1">
                    {prediction.timeline.map((point: any, index: number) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div
                          className="w-full bg-india-blue rounded-t"
                          style={{
                            height: `${point.risk}%`,
                            backgroundColor:
                              point.risk >= 70
                                ? "rgb(239, 68, 68)"
                                : point.risk >= 40
                                  ? "rgb(234, 179, 8)"
                                  : "rgb(34, 197, 94)",
                          }}
                        />
                        <div className="text-xs mt-1">T+{point.hour}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Enter parameters and run the simulation to see prediction results
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Historical Disaster Patterns</CardTitle>
            <CardDescription>Seasonal disaster trends in selected region</CardDescription>
          </CardHeader>
          <CardContent>
            {region ? (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <h4 className="font-medium">Winter</h4>
                    <div className="mt-2 space-y-2">
                      <Badge variant="outline" className="w-full">
                        {region === "Sikkim" || region === "Himachal Pradesh" || region === "Uttarakhand"
                          ? "Avalanche"
                          : region === "Tamil Nadu" || region === "Kerala"
                            ? "Cyclone"
                            : "Low Risk"}
                      </Badge>
                      <Progress
                        value={
                          region === "Sikkim" || region === "Himachal Pradesh" || region === "Uttarakhand"
                            ? 75
                            : region === "Tamil Nadu" || region === "Kerala"
                              ? 60
                              : 20
                        }
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-medium">Summer</h4>
                    <div className="mt-2 space-y-2">
                      <Badge variant="outline" className="w-full">
                        {region === "Gujarat" || region === "Maharashtra"
                          ? "Drought"
                          : region === "Odisha" || region === "Bihar"
                            ? "Heatwave"
                            : "Low Risk"}
                      </Badge>
                      <Progress
                        value={
                          region === "Gujarat" || region === "Maharashtra"
                            ? 80
                            : region === "Odisha" || region === "Bihar"
                              ? 70
                              : 25
                        }
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-medium">Monsoon</h4>
                    <div className="mt-2 space-y-2">
                      <Badge variant="outline" className="w-full">
                        {region === "Assam" || region === "Bihar"
                          ? "Flood"
                          : region === "Sikkim" || region === "Himachal Pradesh"
                            ? "Landslide"
                            : "Flood"}
                      </Badge>
                      <Progress
                        value={
                          region === "Assam" || region === "Bihar"
                            ? 90
                            : region === "Sikkim" || region === "Himachal Pradesh"
                              ? 85
                              : 60
                        }
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-medium">Post-Monsoon</h4>
                    <div className="mt-2 space-y-2">
                      <Badge variant="outline" className="w-full">
                        {region === "Tamil Nadu" || region === "Odisha"
                          ? "Cyclone"
                          : region === "Gujarat" || region === "Maharashtra"
                            ? "Flood"
                            : "Low Risk"}
                      </Badge>
                      <Progress
                        value={
                          region === "Tamil Nadu" || region === "Odisha"
                            ? 75
                            : region === "Gujarat" || region === "Maharashtra"
                              ? 65
                              : 30
                        }
                        className="h-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 mt-4">
                  <h4 className="font-medium mb-2">Regional Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    {region === "Sikkim"
                      ? "Sikkim is prone to landslides during monsoon season due to its steep terrain and heavy rainfall. Earthquake risk is moderate due to its location in seismic zone IV."
                      : region === "Tamil Nadu"
                        ? "Tamil Nadu faces cyclone threats during northeast monsoon (October-December). Coastal areas are vulnerable to storm surges and flooding."
                        : region === "Gujarat"
                          ? "Gujarat has high earthquake risk in Kutch region. Coastal areas face cyclone threats, while eastern regions experience drought conditions."
                          : region === "Assam"
                            ? "Assam experiences severe flooding during monsoon season due to the Brahmaputra river. Erosion and embankment breaches are common."
                            : region === "Kerala"
                              ? "Kerala is vulnerable to landslides in hilly regions and flooding in low-lying areas during monsoon. Coastal erosion is a growing concern."
                              : "This region has specific disaster patterns based on its geography, climate, and historical events. Analysis of past events helps predict future risks."}
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Select a region to view historical disaster patterns
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
