"use client"

import { useState } from "react"
import Header from "@/components/header"
import { damageScenarios, reliefSchemes } from "@/lib/dummy-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Upload, Camera, Download, CheckCircle2, Clock, AlertCircle } from "lucide-react"

export default function AftermathPage() {
  const [selectedScenario, setSelectedScenario] = useState<string>("")
  const [uploadedImage, setUploadedImage] = useState<boolean>(false)
  const [claimSubmitted, setClaimSubmitted] = useState<boolean>(false)
  const [claimStatus, setClaimStatus] = useState<string>("Submitted")

  const handleScenarioChange = (value: string) => {
    setSelectedScenario(value)
    setUploadedImage(false)
    setClaimSubmitted(false)
  }

  const handleImageUpload = () => {
    setUploadedImage(true)
  }

  const handleClaimSubmit = () => {
    setClaimSubmitted(true)
    setClaimStatus("Submitted")

    // Simulate status changes
    setTimeout(() => setClaimStatus("In Review"), 3000)
    setTimeout(() => setClaimStatus("Verified"), 6000)
    setTimeout(() => setClaimStatus("Granted"), 9000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Submitted":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "In Review":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "Verified":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "Granted":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      default:
        return <Clock className="h-5 w-5" />
    }
  }

  // Get the selected damage scenario
  const scenario = damageScenarios.find((s) => s.id.toString() === selectedScenario)

  // Filter relief schemes based on scenario type
  const eligibleSchemes = scenario
    ? reliefSchemes.filter((scheme) => {
        if (scenario.type === "Residential" && scheme.eligibility.includes("residential")) {
          return true
        }
        if (scenario.type === "Commercial" && scheme.eligibility.includes("disaster-affected")) {
          return true
        }
        if (scenario.type === "Agricultural" && scheme.eligibility.includes("households")) {
          return true
        }
        return true // For demo purposes, show all schemes
      })
    : []

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="🧠 AfterMath AI Assistant" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Damage Assessment</CardTitle>
            <CardDescription>Upload or select a damage scenario for assessment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="select" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="select">Select Scenario</TabsTrigger>
                <TabsTrigger value="upload">Upload Photo</TabsTrigger>
              </TabsList>

              <TabsContent value="select" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="scenario">Select Damage Scenario</Label>
                  <Select value={selectedScenario} onValueChange={handleScenarioChange}>
                    <SelectTrigger id="scenario">
                      <SelectValue placeholder="Choose a scenario" />
                    </SelectTrigger>
                    <SelectContent>
                      {damageScenarios.map((scenario) => (
                        <SelectItem key={scenario.id} value={scenario.id.toString()}>
                          {scenario.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {scenario && (
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src={scenario.imageUrl || "/placeholder.svg"}
                      alt={scenario.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3">
                      <h3 className="font-medium">{scenario.name}</h3>
                      <p className="text-sm text-muted-foreground">{scenario.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <Badge>{scenario.type}</Badge>
                        <span className="font-bold">₹{scenario.estimatedCost.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="upload" className="space-y-4">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    uploadedImage ? "border-green-500" : "border-gray-300"
                  }`}
                  onClick={handleImageUpload}
                >
                  {uploadedImage ? (
                    <div className="space-y-2">
                      <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
                      <p className="font-medium">Image Uploaded Successfully</p>
                      <p className="text-sm text-muted-foreground">
                        Your image has been processed for damage assessment
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-12 w-12 mx-auto text-gray-400" />
                      <p className="font-medium">Upload Damage Photo</p>
                      <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                      <div className="flex justify-center gap-2 mt-4">
                        <Button size="sm" variant="outline">
                          <Upload className="h-4 w-4 mr-2" />
                          Browse
                        </Button>
                        <Button size="sm" variant="outline">
                          <Camera className="h-4 w-4 mr-2" />
                          Camera
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {uploadedImage && (
                  <div className="border rounded-lg p-3">
                    <h3 className="font-medium">AI Assessment Result</h3>
                    <p className="text-sm text-muted-foreground mb-2">Based on the uploaded image, we've detected:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Damage Type:</span>
                        <span className="font-medium">Structural (Moderate)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Estimated Cost:</span>
                        <span className="font-medium">₹85,000 - ₹1,20,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Confidence:</span>
                        <span className="font-medium">78%</span>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Relief Schemes</CardTitle>
            <CardDescription>Available relief programs for your situation</CardDescription>
          </CardHeader>
          <CardContent>
            {scenario ? (
              <div className="space-y-4">
                <div className="border rounded-lg p-3">
                  <h3 className="font-medium">Damage Summary</h3>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <p className="text-xs text-muted-foreground">Type</p>
                      <p className="font-medium">{scenario.type}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-medium">{scenario.location}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Estimated Cost</p>
                      <p className="font-medium">₹{scenario.estimatedCost.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Severity</p>
                      <p className="font-medium">
                        {scenario.estimatedCost > 150000 ? "High" : scenario.estimatedCost > 100000 ? "Medium" : "Low"}
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="font-medium">Eligible Relief Schemes</h3>
                <div className="space-y-3">
                  {eligibleSchemes.map((scheme) => (
                    <div key={scheme.id} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium">{scheme.name}</h4>
                        <Badge variant="outline">{scheme.agency}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{scheme.eligibility}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">
                          Max Amount: <span className="font-bold">₹{scheme.maxAmount.toLocaleString()}</span>
                        </span>
                        <Button size="sm" variant="outline" className="text-xs">
                          Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Select a damage scenario to view eligible relief schemes
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Claim Process</CardTitle>
            <CardDescription>Submit and track your relief claim</CardDescription>
          </CardHeader>
          <CardContent>
            {scenario ? (
              claimSubmitted ? (
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-4">
                      {getStatusIcon(claimStatus)}
                      <div>
                        <h3 className="font-medium">Claim Status: {claimStatus}</h3>
                        <p className="text-sm text-muted-foreground">
                          Claim ID: KAVX-{Math.floor(100000 + Math.random() * 900000)}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>
                          {claimStatus === "Submitted"
                            ? "25%"
                            : claimStatus === "In Review"
                              ? "50%"
                              : claimStatus === "Verified"
                                ? "75%"
                                : claimStatus === "Granted"
                                  ? "100%"
                                  : "0%"}
                        </span>
                      </div>
                      <Progress
                        value={
                          claimStatus === "Submitted"
                            ? 25
                            : claimStatus === "In Review"
                              ? 50
                              : claimStatus === "Verified"
                                ? 75
                                : claimStatus === "Granted"
                                  ? 100
                                  : 0
                        }
                        className="h-2"
                      />
                    </div>

                    <div className="grid grid-cols-4 gap-2 mt-4">
                      <div className="text-center">
                        <div
                          className={`rounded-full h-8 w-8 flex items-center justify-center mx-auto ${
                            claimStatus ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          1
                        </div>
                        <p className="text-xs mt-1">Submitted</p>
                      </div>
                      <div className="text-center">
                        <div
                          className={`rounded-full h-8 w-8 flex items-center justify-center mx-auto ${
                            claimStatus === "In Review" || claimStatus === "Verified" || claimStatus === "Granted"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          2
                        </div>
                        <p className="text-xs mt-1">In Review</p>
                      </div>
                      <div className="text-center">
                        <div
                          className={`rounded-full h-8 w-8 flex items-center justify-center mx-auto ${
                            claimStatus === "Verified" || claimStatus === "Granted"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          3
                        </div>
                        <p className="text-xs mt-1">Verified</p>
                      </div>
                      <div className="text-center">
                        <div
                          className={`rounded-full h-8 w-8 flex items-center justify-center mx-auto ${
                            claimStatus === "Granted" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          4
                        </div>
                        <p className="text-xs mt-1">Granted</p>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-3">Claim Details</h3>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Name</p>
                          <p className="font-medium">Rajesh Kumar</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Aadhaar</p>
                          <p className="font-medium">XXXX-XXXX-1234</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Damage Type</p>
                          <p className="font-medium">{scenario.type}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Location</p>
                          <p className="font-medium">{scenario.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Claimed Amount</p>
                          <p className="font-medium">₹{scenario.estimatedCost.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Scheme</p>
                          <p className="font-medium">{eligibleSchemes[0]?.name || "NDMA Relief"}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline">
                      <FileText className="h-4 w-4 mr-2" />
                      View Full Details
                    </Button>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Download Claim PDF
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name (as per Aadhaar)</Label>
                    <Input id="name" placeholder="Enter your full name" defaultValue="Rajesh Kumar" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="aadhaar">Aadhaar Number</Label>
                      <Input id="aadhaar" placeholder="XXXX-XXXX-XXXX" defaultValue="1234-5678-9012" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input id="mobile" placeholder="Enter mobile number" defaultValue="9876543210" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address of Damaged Property</Label>
                    <Textarea
                      id="address"
                      placeholder="Enter complete address"
                      defaultValue={`123, Main Street, ${scenario.location}`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="scheme">Select Relief Scheme</Label>
                      <Select defaultValue={eligibleSchemes[0]?.id.toString() || ""}>
                        <SelectTrigger id="scheme">
                          <SelectValue placeholder="Choose a scheme" />
                        </SelectTrigger>
                        <SelectContent>
                          {eligibleSchemes.map((scheme) => (
                            <SelectItem key={scheme.id} value={scheme.id.toString()}>
                              {scheme.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Claim Amount</Label>
                      <Input
                        id="amount"
                        placeholder="Enter claim amount"
                        defaultValue={`₹${scenario.estimatedCost.toLocaleString()}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Damage Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the damage in detail"
                      defaultValue={scenario.description}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <input type="checkbox" className="h-4 w-4" defaultChecked />
                      <span>I hereby declare that the information provided is true to the best of my knowledge</span>
                    </Label>
                  </div>

                  <div className="flex justify-end">
                    <Button onClick={handleClaimSubmit}>Submit Claim</Button>
                  </div>
                </div>
              )
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Select a damage scenario to proceed with claim submission
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
