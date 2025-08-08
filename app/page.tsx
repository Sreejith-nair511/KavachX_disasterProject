"use client"

import Header from "@/components/header"
import dynamic from "next/dynamic"
import { droneOperations, dangerZones } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DrillIcon as Drone, Package, Search, Building, AlertTriangle, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Import MapComponent dynamically
const MapComponent = dynamic(() => import("@/components/map-component"), {
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading map...</p>
      </div>
    </div>
  ),
})

export default function DroneOpsPage() {
  // Prepare map markers for drones
  const droneMarkers = droneOperations.map((drone) => ({
    position: drone.location as [number, number],
    popup: `<b>${drone.name}</b><br>Type: ${drone.droneType}<br>Mission: ${drone.missionType}<br>Status: ${drone.status}<br>Battery: ${drone.batteryLevel}%`,
    type: "drone",
  }))

  // Prepare map markers for danger zones
  const dangerMarkers = dangerZones.map((zone) => ({
    position: zone.location as [number, number],
    popup: `<b>${zone.name}</b><br>Type: ${zone.disasterType}<br>Risk: ${zone.riskLevel}<br>Population: ${zone.affectedPopulation}`,
    type: "danger",
  }))

  // Prepare drone paths
  const dronePaths = droneOperations
    .filter((drone) => drone.path && drone.path.length > 0)
    .map((drone) => ({
      positions: drone.path as [number, number][],
      color: drone.status === "Active" ? "#9400D3" : drone.status === "Scheduled" ? "#4B0082" : "#6A0DAD",
    }))

  // Prepare danger zone polygons
  const dangerPolygons = dangerZones.map((zone) => {
    // Create a circle of points around the center
    const points: [number, number][] = []
    const centerLat = zone.location[0]
    const centerLng = zone.location[1]
    const radiusInKm = zone.radius / 10 // Scale down for visualization

    for (let i = 0; i < 36; i++) {
      const angle = (i * 10 * Math.PI) / 180
      const lat = centerLat + radiusInKm * 0.01 * Math.cos(angle)
      const lng = centerLng + radiusInKm * 0.01 * Math.sin(angle)
      points.push([lat, lng])
    }

    // Color based on risk level
    let color = "#ffcc00" // Yellow for Medium
    let fillColor = "#ffcc00"

    if (zone.riskLevel === "Critical") {
      color = "#ff0000" // Red
      fillColor = "#ff0000"
    } else if (zone.riskLevel === "High") {
      color = "#ff9900" // Orange
      fillColor = "#ff9900"
    }

    return {
      positions: points,
      color,
      fillColor,
      fillOpacity: 0.3,
      popup: `<b>${zone.name}</b><br>Type: ${zone.disasterType}<br>Risk: ${zone.riskLevel}<br>Population: ${zone.affectedPopulation}`,
    }
  })

  // Get mission type icon
  const getMissionTypeIcon = (type: string) => {
    switch (type) {
      case "Search & Rescue":
        return <Search className="h-4 w-4" />
      case "Aid Drop":
        return <Package className="h-4 w-4" />
      case "Structural Inspection":
        return <Building className="h-4 w-4" />
      case "Area Surveillance":
        return <AlertTriangle className="h-4 w-4" />
      default:
        return <Drone className="h-4 w-4" />
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <Header title="🛰️ DroneOps Command Center" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-r from-droneops-start to-droneops-end">
        <div className="md:col-span-2">
          <Card className="h-[50vh] md:h-[70vh] border-none shadow-lg">
            <CardHeader className="p-4 bg-droneops-start text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <Drone className="mr-2 h-5 w-5" /> Drone Operations Map
              </CardTitle>
              <CardDescription className="text-gray-200">Active missions and danger zones across India</CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-5rem)]">
              <MapComponent
                markers={[...droneMarkers, ...dangerMarkers]}
                paths={dronePaths}
                polygons={dangerPolygons}
                center={[23.5937, 78.9629]}
                zoom={5}
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="border-none shadow-lg">
            <CardHeader className="p-4 bg-droneops-start text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <Package className="mr-2 h-5 w-5" /> Assign Drone Task
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mission Type</label>
                  <Select defaultValue="search">
                    <SelectTrigger className="border-droneops-start focus:ring-droneops-end">
                      <SelectValue placeholder="Select mission type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search & Rescue</SelectItem>
                      <SelectItem value="deliver">Aid Drop</SelectItem>
                      <SelectItem value="thermal">Area Surveillance</SelectItem>
                      <SelectItem value="survey">Structural Inspection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select defaultValue="assam">
                    <SelectTrigger className="border-droneops-start focus:ring-droneops-end">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="assam">Guwahati, Assam</SelectItem>
                      <SelectItem value="uttarakhand">Uttarkashi, Uttarakhand</SelectItem>
                      <SelectItem value="odisha">Bhubaneswar, Odisha</SelectItem>
                      <SelectItem value="chennai">Chennai, Tamil Nadu</SelectItem>
                      <SelectItem value="mumbai">Mumbai, Maharashtra</SelectItem>
                      <SelectItem value="srinagar">Srinagar, J&K</SelectItem>
                      <SelectItem value="imphal">Imphal, Manipur</SelectItem>
                      <SelectItem value="siliguri">Siliguri, West Bengal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Drone Type</label>
                  <Select defaultValue="mavic3">
                    <SelectTrigger className="border-droneops-start focus:ring-droneops-end">
                      <SelectValue placeholder="Select drone type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mavic3">DJI Mavic 3</SelectItem>
                      <SelectItem value="mavic2">DJI Mavic 2</SelectItem>
                      <SelectItem value="avata">DJI Avata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Priority</label>
                  <Select defaultValue="high">
                    <SelectTrigger className="border-droneops-start focus:ring-droneops-end">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-droneops-start to-droneops-end hover:opacity-90 transition-opacity">
                  Deploy Drone
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="p-4 bg-droneops-start text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5" /> Active Missions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="active">
                <TabsList className="w-full bg-gray-100">
                  <TabsTrigger
                    value="active"
                    className="flex-1 data-[state=active]:bg-droneops-end data-[state=active]:text-white"
                  >
                    Active
                  </TabsTrigger>
                  <TabsTrigger
                    value="scheduled"
                    className="flex-1 data-[state=active]:bg-droneops-end data-[state=active]:text-white"
                  >
                    Scheduled
                  </TabsTrigger>
                  <TabsTrigger
                    value="completed"
                    className="flex-1 data-[state=active]:bg-droneops-end data-[state=active]:text-white"
                  >
                    Completed
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="active" className="p-4 pt-2 max-h-[30vh] overflow-auto">
                  {droneOperations
                    .filter((op) => op.status === "Active")
                    .map((drone) => (
                      <div key={drone.id} className="mb-4 border rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium flex items-center">
                              {getMissionTypeIcon(drone.missionType)}
                              <span className="ml-1">{drone.name}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {drone.droneType} | Alt: {drone.altitude}m | Speed: {drone.speed}km/h
                            </p>
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge className="bg-green-500 hover:bg-green-600 cursor-help">{drone.status}</Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mission is currently in progress</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Battery</span>
                            <span>{drone.batteryLevel}%</span>
                          </div>
                          <Progress
                            value={drone.batteryLevel}
                            className="h-2"
                            style={
                              {
                                background: "#e0e0e0",
                                "--progress-background":
                                  drone.batteryLevel > 70 ? "green" : drone.batteryLevel > 30 ? "orange" : "red",
                              } as any
                            }
                          />
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="scheduled" className="p-4 pt-2 max-h-[30vh] overflow-auto">
                  {droneOperations
                    .filter((op) => op.status === "Scheduled")
                    .map((drone) => (
                      <div key={drone.id} className="mb-4 border rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium flex items-center">
                              {getMissionTypeIcon(drone.missionType)}
                              <span className="ml-1">{drone.name}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">{drone.droneType} | Ready for deployment</p>
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge className="bg-blue-500 hover:bg-blue-600 cursor-help">{drone.status}</Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mission is scheduled to start soon</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Battery</span>
                            <span>{drone.batteryLevel}%</span>
                          </div>
                          <Progress
                            value={drone.batteryLevel}
                            className="h-2"
                            style={
                              {
                                background: "#e0e0e0",
                                "--progress-background": "green",
                              } as any
                            }
                          />
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="completed" className="p-4 pt-2 max-h-[30vh] overflow-auto">
                  {droneOperations
                    .filter((op) => op.status === "Completed")
                    .map((drone) => (
                      <div key={drone.id} className="mb-4 border rounded-lg p-3 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium flex items-center">
                              {getMissionTypeIcon(drone.missionType)}
                              <span className="ml-1">{drone.name}</span>
                            </h4>
                            <p className="text-sm text-muted-foreground">{drone.droneType} | Mission completed</p>
                          </div>
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge className="bg-gray-500 hover:bg-gray-600 cursor-help">{drone.status}</Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mission has been completed</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                        <div className="mt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Battery</span>
                            <span>{drone.batteryLevel}%</span>
                          </div>
                          <Progress
                            value={drone.batteryLevel}
                            className="h-2"
                            style={
                              {
                                background: "#e0e0e0",
                                "--progress-background":
                                  drone.batteryLevel > 70 ? "green" : drone.batteryLevel > 30 ? "orange" : "red",
                              } as any
                            }
                          />
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-droneops-start to-droneops-end">
        <Card className="border-none shadow-lg">
          <CardHeader className="p-4 bg-droneops-start text-white rounded-t-lg">
            <CardTitle className="text-lg flex items-center">
              <Info className="mr-2 h-5 w-5" /> Live Drone Feed
            </CardTitle>
            <CardDescription className="text-gray-200">Simulated camera feed from active drones</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {droneOperations
                .filter((op) => op.status === "Active")
                .map((drone) => (
                  <div key={drone.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={drone.imageUrl || "/placeholder.svg"}
                        alt={`Feed from ${drone.name}`}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-red-500 animate-pulse">LIVE</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm">
                        {drone.name}
                      </div>
                    </div>
                    <div className="p-2 text-xs">
                      <div className="flex justify-between">
                        <span>Alt: {drone.altitude}m</span>
                        <span>Speed: {drone.speed}km/h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lat: {drone.location[0].toFixed(4)}</span>
                        <span>Lng: {drone.location[1].toFixed(4)}</span>
                      </div>
                      <div className="mt-1 text-center text-[10px] text-gray-500">
                        {drone.droneType} • {drone.missionType}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
