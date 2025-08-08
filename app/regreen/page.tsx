"use client"

import Header from "@/components/header"
import dynamic from "next/dynamic"
import { environmentalDamage, topVolunteers } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Leaf, Droplet, Wind, Users, Award, Calendar } from "lucide-react"
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

export default function ReGreenPage() {
  // Create recovery markers for the map
  const recoveryMarkers = environmentalDamage.map((state) => {
    // Get coordinates based on state name (simplified)
    let coordinates: [number, number] = [20.5937, 78.9629] // Default to center of India

    if (state.state === "Kerala") {
      coordinates = [10.8505, 76.2711]
    } else if (state.state === "Gujarat") {
      coordinates = [22.2587, 71.1924]
    } else if (state.state === "Assam") {
      coordinates = [26.2006, 92.9376]
    } else if (state.state === "Tamil Nadu") {
      coordinates = [13.0827, 80.2707]
    } else if (state.state === "Uttarakhand") {
      coordinates = [30.0668, 79.0193]
    }

    return {
      position: coordinates,
      popup: `<b>${state.state}</b><br>NDVI Loss: ${state.ndviLoss}%<br>Recovery: ${state.recoveryPercentage}%<br>Air Quality: ${state.airQuality}`,
      type: "recovery",
    }
  })

  // Create polygons for environmental damage areas
  const damagePolygons = environmentalDamage.map((state) => {
    // Get polygon coordinates based on state name (simplified)
    let polygonCoords: [number, number][] = []

    if (state.state === "Kerala") {
      polygonCoords = [
        [10.8505, 76.2711],
        [10.9505, 76.3711],
        [10.7505, 76.4711],
        [10.6505, 76.1711],
      ]
    } else if (state.state === "Gujarat") {
      polygonCoords = [
        [22.2587, 71.1924],
        [22.3587, 71.2924],
        [22.1587, 71.3924],
        [22.0587, 71.0924],
      ]
    } else if (state.state === "Assam") {
      polygonCoords = [
        [26.2006, 92.9376],
        [26.3006, 93.0376],
        [26.1006, 93.1376],
        [26.0006, 92.8376],
      ]
    } else if (state.state === "Tamil Nadu") {
      polygonCoords = [
        [13.0827, 80.2707],
        [13.1827, 80.3707],
        [12.9827, 80.4707],
        [12.8827, 80.1707],
      ]
    } else if (state.state === "Uttarakhand") {
      polygonCoords = [
        [30.0668, 79.0193],
        [30.1668, 79.1193],
        [29.9668, 79.2193],
        [29.8668, 78.9193],
      ]
    }

    // Color based on NDVI loss
    let color = "#138808" // Green
    let fillColor = "#138808"

    if (state.ndviLoss > 40) {
      color = "#FF0000" // Red
      fillColor = "#FF0000"
    } else if (state.ndviLoss > 30) {
      color = "#FFA500" // Orange
      fillColor = "#FFA500"
    } else if (state.ndviLoss > 20) {
      color = "#FFFF00" // Yellow
      fillColor = "#FFFF00"
    }

    return {
      positions: polygonCoords,
      color,
      fillColor,
      fillOpacity: 0.3,
      popup: `<b>${state.state}</b><br>NDVI Loss: ${state.ndviLoss}%<br>Recovery: ${state.recoveryPercentage}%<br>Air Quality: ${state.airQuality}`,
    }
  })

  return (
    <div className="flex flex-col h-screen">
      <Header title="🌱 ReGreen Recovery Tracker" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-r from-regreen-start to-regreen-end">
        <div className="md:col-span-2">
          <Card className="h-[50vh] md:h-[70vh] border-none shadow-lg">
            <CardHeader className="p-4 bg-regreen-start text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <Leaf className="mr-2 h-5 w-5" /> Environmental Recovery Map
              </CardTitle>
              <CardDescription className="text-gray-200">
                Post-disaster environmental damage and recovery efforts
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[calc(100%-5rem)]">
              <MapComponent markers={recoveryMarkers} polygons={damagePolygons} center={[23.5937, 78.9629]} zoom={5} />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="border-none shadow-lg">
            <CardHeader className="p-4 bg-regreen-start text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <Leaf className="mr-2 h-5 w-5" /> Assign Recovery Task
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Task Type</label>
                  <Select defaultValue="replant">
                    <SelectTrigger className="border-regreen-start focus:ring-regreen-end">
                      <SelectValue placeholder="Select task type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="replant">Replanting</SelectItem>
                      <SelectItem value="clean">River Cleanup</SelectItem>
                      <SelectItem value="soil">Soil Restoration</SelectItem>
                      <SelectItem value="monitor">Environmental Monitoring</SelectItem>
                      <SelectItem value="water">Water Body Replenishment</SelectItem>
                      <SelectItem value="air">Air Quality Improvement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select defaultValue="kerala">
                    <SelectTrigger className="border-regreen-start focus:ring-regreen-end">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kerala">Kerala</SelectItem>
                      <SelectItem value="gujarat">Gujarat</SelectItem>
                      <SelectItem value="assam">Assam</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Season</label>
                  <Select defaultValue="monsoon">
                    <SelectTrigger className="border-regreen-start focus:ring-regreen-end">
                      <SelectValue placeholder="Select season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="winter">Winter</SelectItem>
                      <SelectItem value="summer">Summer</SelectItem>
                      <SelectItem value="monsoon">Monsoon</SelectItem>
                      <SelectItem value="post-monsoon">Post-Monsoon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Volunteers Needed</label>
                  <Select defaultValue="50">
                    <SelectTrigger className="border-regreen-start focus:ring-regreen-end">
                      <SelectValue placeholder="Select number of volunteers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 volunteers</SelectItem>
                      <SelectItem value="25">25 volunteers</SelectItem>
                      <SelectItem value="50">50 volunteers</SelectItem>
                      <SelectItem value="100">100 volunteers</SelectItem>
                      <SelectItem value="200">200+ volunteers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-gradient-to-r from-regreen-start to-regreen-end hover:opacity-90 transition-opacity">
                  Create Task
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader className="p-4 bg-regreen-start text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center">
                <Award className="mr-2 h-5 w-5" /> Recovery Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="kerala">
                <TabsList className="w-full bg-gray-100">
                  {environmentalDamage.map((state) => (
                    <TabsTrigger
                      key={state.id}
                      value={state.state.toLowerCase()}
                      className="flex-1 data-[state=active]:bg-regreen-end data-[state=active]:text-white"
                    >
                      {state.state}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {environmentalDamage.map((state) => (
                  <TabsContent key={state.id} value={state.state.toLowerCase()} className="p-4 pt-2">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Recovery Progress</span>
                          <span className="text-sm font-medium">{state.recoveryPercentage}%</span>
                        </div>
                        <Progress
                          value={state.recoveryPercentage}
                          className="h-2"
                          style={
                            {
                              background: "#e0e0e0",
                              "--progress-background": `linear-gradient(to right, #138808, #FFD700)`,
                            } as any
                          }
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="border rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-help">
                                <Leaf className="h-4 w-4 mx-auto mb-1 text-regreen-start" />
                                <div className="text-xs text-muted-foreground">NDVI Loss</div>
                                <div className="font-bold">{state.ndviLoss}%</div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Normalized Difference Vegetation Index loss indicates vegetation damage</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="border rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-help">
                                <Droplet className="h-4 w-4 mx-auto mb-1 text-blue-500" />
                                <div className="text-xs text-muted-foreground">Water</div>
                                <div className="font-bold">{state.waterPollution}</div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Water pollution level in rivers and water bodies</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="border rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-help">
                                <Wind className="h-4 w-4 mx-auto mb-1 text-gray-500" />
                                <div className="text-xs text-muted-foreground">Air Quality</div>
                                <div className="font-bold">{state.airQuality}</div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Current air quality status in the region</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" /> Seasonal Initiatives
                        </h4>
                        {state.seasonalInitiatives.map((initiative, index) => (
                          <div key={index} className="mb-3 border rounded-lg p-3 hover:shadow-sm transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">{initiative.name}</h5>
                                <p className="text-xs text-muted-foreground">Season: {initiative.season}</p>
                              </div>
                              <Badge className="bg-regreen-start">{initiative.progress}%</Badge>
                            </div>
                            <div className="mt-2">
                              <Progress
                                value={initiative.progress}
                                className="h-2"
                                style={
                                  {
                                    background: "#e0e0e0",
                                    "--progress-background": `linear-gradient(to right, #138808, #FFD700)`,
                                  } as any
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1" /> Active Tasks
                        </h4>
                        {state.tasks.map((task) => (
                          <div key={task.id} className="mb-3 border rounded-lg p-3 hover:shadow-sm transition-shadow">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">{task.name}</h5>
                                <p className="text-xs text-muted-foreground">Volunteers: {task.volunteers}</p>
                              </div>
                              <Badge
                                className={
                                  task.status === "Completed"
                                    ? "bg-green-500"
                                    : task.status === "In Progress"
                                      ? "bg-blue-500"
                                      : "bg-yellow-500"
                                }
                              >
                                {task.status}
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Completion</span>
                                <span>{task.completionPercentage}%</span>
                              </div>
                              <Progress
                                value={task.completionPercentage}
                                className="h-2"
                                style={
                                  {
                                    background: "#e0e0e0",
                                    "--progress-background": `linear-gradient(to right, #138808, #FFD700)`,
                                  } as any
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-r from-regreen-start to-regreen-end">
        <Card className="border-none shadow-lg">
          <CardHeader className="p-4 bg-regreen-start text-white rounded-t-lg">
            <CardTitle className="text-lg flex items-center">
              <Award className="mr-2 h-5 w-5" /> Top Eco Volunteers
            </CardTitle>
            <CardDescription className="text-gray-200">
              Recognizing the heroes of environmental recovery
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead>Volunteer</TableHead>
                  <TableHead>State</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Trees Planted</TableHead>
                  <TableHead>Area Restored (ha)</TableHead>
                  <TableHead>Badges</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topVolunteers.map((volunteer) => (
                  <TableRow key={volunteer.id} className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium">{volunteer.name}</TableCell>
                    <TableCell>{volunteer.state}</TableCell>
                    <TableCell>{volunteer.tasksCompleted}</TableCell>
                    <TableCell>{volunteer.treesPlanted}</TableCell>
                    <TableCell>{volunteer.areaRestored}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {volunteer.badges.map((badge, index) => (
                          <TooltipProvider key={index}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Badge
                                  variant="outline"
                                  className="bg-regreen-start/10 text-regreen-start border-regreen-start/30 cursor-help"
                                >
                                  {badge}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Awarded for excellence in {badge.toLowerCase()} activities</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
