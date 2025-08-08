// Drone Operations Data
export const droneOperations = [
  {
    id: 1,
    name: "Search & Rescue in Assam Floods",
    status: "Active",
    location: [26.1445, 91.7362], // Guwahati
    path: [
      [26.1445, 91.7362],
      [26.2445, 91.8362],
      [26.3445, 91.9362],
      [26.4445, 92.0362],
    ],
    droneType: "DJI Mavic 3",
    missionType: "Search & Rescue",
    batteryLevel: 78,
    altitude: 120,
    speed: 35,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Aid Drop to Uttarkashi Hills",
    status: "Scheduled",
    location: [30.7268, 78.4354], // Uttarkashi
    path: [
      [30.7268, 78.4354],
      [30.8268, 78.5354],
      [30.9268, 78.6354],
    ],
    droneType: "DJI Mavic 2",
    missionType: "Aid Drop",
    batteryLevel: 100,
    altitude: 0,
    speed: 0,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Area Surveillance in Odisha",
    status: "Active",
    location: [20.2961, 85.8245], // Bhubaneswar
    path: [
      [20.2961, 85.8245],
      [20.3961, 85.9245],
      [20.4961, 86.0245],
      [20.5961, 86.1245],
    ],
    droneType: "DJI Avata",
    missionType: "Area Surveillance",
    batteryLevel: 65,
    altitude: 80,
    speed: 25,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Structural Inspection in Chennai",
    status: "Completed",
    location: [13.0827, 80.2707], // Chennai
    path: [
      [13.0827, 80.2707],
      [13.1827, 80.3707],
      [13.2827, 80.4707],
    ],
    droneType: "DJI Avata",
    missionType: "Structural Inspection",
    batteryLevel: 22,
    altitude: 0,
    speed: 0,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Flood Monitoring in Mumbai",
    status: "Active",
    location: [19.076, 72.8777], // Mumbai
    path: [
      [19.076, 72.8777],
      [19.176, 72.9777],
      [19.276, 73.0777],
    ],
    droneType: "DJI Mavic 3",
    missionType: "Area Surveillance",
    batteryLevel: 85,
    altitude: 100,
    speed: 30,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Avalanche Assessment in Srinagar",
    status: "Scheduled",
    location: [34.0837, 74.7973], // Srinagar
    path: [
      [34.0837, 74.7973],
      [34.1837, 74.8973],
      [34.2837, 74.9973],
    ],
    droneType: "DJI Mavic 2",
    missionType: "Area Surveillance",
    batteryLevel: 100,
    altitude: 0,
    speed: 0,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Medical Supply Delivery in Imphal",
    status: "Active",
    location: [24.817, 93.9368], // Imphal
    path: [
      [24.817, 93.9368],
      [24.917, 94.0368],
      [25.017, 94.1368],
    ],
    droneType: "DJI Mavic 3",
    missionType: "Aid Drop",
    batteryLevel: 72,
    altitude: 90,
    speed: 28,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Landslide Assessment in Siliguri",
    status: "Completed",
    location: [26.7271, 88.3953], // Siliguri
    path: [
      [26.7271, 88.3953],
      [26.8271, 88.4953],
      [26.9271, 88.5953],
    ],
    droneType: "DJI Avata",
    missionType: "Structural Inspection",
    batteryLevel: 15,
    altitude: 0,
    speed: 0,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

// Danger Zones
export const dangerZones = [
  {
    id: 1,
    name: "Brahmaputra Flood Zone",
    location: [26.1445, 91.7362], // Guwahati
    radius: 30,
    riskLevel: "High",
    affectedPopulation: 25000,
    disasterType: "Flood",
  },
  {
    id: 2,
    name: "Uttarkashi Landslide Risk Area",
    location: [30.7268, 78.4354], // Uttarkashi
    radius: 15,
    riskLevel: "Medium",
    affectedPopulation: 5000,
    disasterType: "Landslide",
  },
  {
    id: 3,
    name: "Cyclone Impact Zone",
    location: [20.2961, 85.8245], // Bhubaneswar
    radius: 50,
    riskLevel: "Critical",
    affectedPopulation: 120000,
    disasterType: "Cyclone",
  },
  {
    id: 4,
    name: "Chennai Flood Risk Area",
    location: [13.0827, 80.2707], // Chennai
    radius: 40,
    riskLevel: "High",
    affectedPopulation: 80000,
    disasterType: "Flood",
  },
  {
    id: 5,
    name: "Mumbai Coastal Flooding",
    location: [19.076, 72.8777], // Mumbai
    radius: 35,
    riskLevel: "Medium",
    affectedPopulation: 150000,
    disasterType: "Flood",
  },
  {
    id: 6,
    name: "Srinagar Avalanche Risk Zone",
    location: [34.0837, 74.7973], // Srinagar
    radius: 20,
    riskLevel: "High",
    affectedPopulation: 8000,
    disasterType: "Avalanche",
  },
  {
    id: 7,
    name: "Imphal Earthquake Affected Area",
    location: [24.817, 93.9368], // Imphal
    radius: 25,
    riskLevel: "Medium",
    affectedPopulation: 15000,
    disasterType: "Earthquake",
  },
  {
    id: 8,
    name: "Siliguri Landslide Zone",
    location: [26.7271, 88.3953], // Siliguri
    radius: 18,
    riskLevel: "High",
    affectedPopulation: 12000,
    disasterType: "Landslide",
  },
]

// ReGreen Recovery Data
export const environmentalDamage = [
  {
    id: 1,
    state: "Kerala",
    ndviLoss: 35,
    soilErosion: "High",
    waterPollution: "Medium",
    airQuality: "Moderate",
    recoveryPercentage: 42,
    seasonalInitiatives: [
      {
        season: "Monsoon",
        name: "Mangrove Restoration",
        progress: 65,
      },
      {
        season: "Winter",
        name: "Spice Plantation Recovery",
        progress: 40,
      },
    ],
    tasks: [
      {
        id: 101,
        name: "Replant in Wayanad",
        status: "In Progress",
        volunteers: 120,
        completionPercentage: 65,
      },
      {
        id: 102,
        name: "Clean Periyar River Banks",
        status: "Scheduled",
        volunteers: 85,
        completionPercentage: 0,
      },
    ],
  },
  {
    id: 2,
    state: "Gujarat",
    ndviLoss: 28,
    soilErosion: "Medium",
    waterPollution: "High",
    airQuality: "Poor",
    recoveryPercentage: 31,
    seasonalInitiatives: [
      {
        season: "Summer",
        name: "Drought-Resistant Plantation",
        progress: 55,
      },
      {
        season: "Monsoon",
        name: "Coastal Vegetation Restoration",
        progress: 30,
      },
    ],
    tasks: [
      {
        id: 201,
        name: "Restore Kutch Grasslands",
        status: "Completed",
        volunteers: 95,
        completionPercentage: 100,
      },
      {
        id: 202,
        name: "Clean Sabarmati Banks",
        status: "In Progress",
        volunteers: 150,
        completionPercentage: 72,
      },
    ],
  },
  {
    id: 3,
    state: "Assam",
    ndviLoss: 42,
    soilErosion: "Critical",
    waterPollution: "Critical",
    airQuality: "Moderate",
    recoveryPercentage: 18,
    seasonalInitiatives: [
      {
        season: "Post-Monsoon",
        name: "Flood Plain Restoration",
        progress: 25,
      },
      {
        season: "Winter",
        name: "Tea Garden Buffer Zones",
        progress: 40,
      },
    ],
    tasks: [
      {
        id: 301,
        name: "Replant in Kaziranga",
        status: "In Progress",
        volunteers: 210,
        completionPercentage: 38,
      },
      {
        id: 302,
        name: "Clean Brahmaputra Tributaries",
        status: "In Progress",
        volunteers: 175,
        completionPercentage: 45,
      },
    ],
  },
  {
    id: 4,
    state: "Tamil Nadu",
    ndviLoss: 30,
    soilErosion: "Medium",
    waterPollution: "High",
    airQuality: "Poor",
    recoveryPercentage: 35,
    seasonalInitiatives: [
      {
        season: "Northeast Monsoon",
        name: "Coastal Mangrove Restoration",
        progress: 50,
      },
      {
        season: "Summer",
        name: "Urban Green Cover Expansion",
        progress: 35,
      },
    ],
    tasks: [
      {
        id: 401,
        name: "Restore Pallikaranai Marsh",
        status: "In Progress",
        volunteers: 180,
        completionPercentage: 55,
      },
      {
        id: 402,
        name: "Cooum River Cleanup",
        status: "Scheduled",
        volunteers: 200,
        completionPercentage: 0,
      },
    ],
  },
  {
    id: 5,
    state: "Uttarakhand",
    ndviLoss: 38,
    soilErosion: "Critical",
    waterPollution: "Medium",
    airQuality: "Good",
    recoveryPercentage: 25,
    seasonalInitiatives: [
      {
        season: "Spring",
        name: "Himalayan Oak Restoration",
        progress: 40,
      },
      {
        season: "Monsoon",
        name: "Slope Stabilization Planting",
        progress: 30,
      },
    ],
    tasks: [
      {
        id: 501,
        name: "Reforest Kedarnath Valley",
        status: "In Progress",
        volunteers: 150,
        completionPercentage: 42,
      },
      {
        id: 502,
        name: "Alaknanda Riverbank Restoration",
        status: "In Progress",
        volunteers: 120,
        completionPercentage: 35,
      },
    ],
  },
]

// Top Eco Volunteers
export const topVolunteers = [
  {
    id: 1,
    name: "Arjun Sharma",
    state: "Kerala",
    tasksCompleted: 12,
    treesPlanted: 145,
    areaRestored: 3.2,
    badges: ["Soil Saver", "Tree Warrior", "Water Guardian"],
  },
  {
    id: 2,
    name: "Priya Patel",
    state: "Gujarat",
    tasksCompleted: 9,
    treesPlanted: 120,
    areaRestored: 2.8,
    badges: ["Tree Warrior", "Community Leader"],
  },
  {
    id: 3,
    name: "Rahul Verma",
    state: "Assam",
    tasksCompleted: 15,
    treesPlanted: 210,
    areaRestored: 4.5,
    badges: ["Soil Saver", "Tree Warrior", "Wildlife Protector", "Water Guardian"],
  },
  {
    id: 4,
    name: "Lakshmi Krishnan",
    state: "Tamil Nadu",
    tasksCompleted: 11,
    treesPlanted: 165,
    areaRestored: 3.8,
    badges: ["Urban Greener", "Water Guardian", "Community Leader"],
  },
  {
    id: 5,
    name: "Vikram Singh",
    state: "Uttarakhand",
    tasksCompleted: 14,
    treesPlanted: 190,
    areaRestored: 4.2,
    badges: ["Mountain Restorer", "Soil Saver", "Tree Warrior"],
  },
]

// DisasterCast Simulator Data
export const indianRegions = [
  "Assam",
  "Bihar",
  "Gujarat",
  "Himachal Pradesh",
  "Kerala",
  "Maharashtra",
  "Odisha",
  "Sikkim",
  "Tamil Nadu",
  "Uttarakhand",
  "Jammu & Kashmir",
  "Manipur",
  "West Bengal",
]

export const weatherScenarios = [
  "Heavy Rain",
  "Cyclone",
  "Earthquake",
  "Drought",
  "Heatwave",
  "Thunderstorm",
  "Avalanche",
  "Fog",
  "Flash Flood",
]

export const geographyTypes = [
  "Hill",
  "Coast",
  "Desert",
  "Plain",
  "Forest",
  "River Basin",
  "Urban",
  "Mountain",
  "Delta",
]

export const seasonalPatterns = {
  Winter: [
    { disaster: "Avalanche", regions: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir"], risk: "High" },
    { disaster: "Fog", regions: ["Delhi", "Uttar Pradesh", "Bihar", "Punjab"], risk: "Medium" },
    { disaster: "Cold Wave", regions: ["Rajasthan", "Haryana", "Punjab"], risk: "Medium" },
  ],
  Summer: [
    { disaster: "Heatwave", regions: ["Rajasthan", "Madhya Pradesh", "Telangana", "Andhra Pradesh"], risk: "High" },
    { disaster: "Drought", regions: ["Maharashtra", "Karnataka", "Gujarat", "Rajasthan"], risk: "High" },
    { disaster: "Forest Fire", regions: ["Uttarakhand", "Himachal Pradesh", "Madhya Pradesh"], risk: "Medium" },
  ],
  Monsoon: [
    { disaster: "Flood", regions: ["Assam", "Bihar", "West Bengal", "Kerala"], risk: "Critical" },
    { disaster: "Landslide", regions: ["Uttarakhand", "Himachal Pradesh", "Kerala", "Sikkim"], risk: "High" },
    { disaster: "Lightning", regions: ["Bihar", "Jharkhand", "Odisha", "West Bengal"], risk: "Medium" },
  ],
  "Post-Monsoon": [
    { disaster: "Cyclone", regions: ["Odisha", "Andhra Pradesh", "Tamil Nadu", "West Bengal"], risk: "Critical" },
    { disaster: "Flood", regions: ["Tamil Nadu", "Andhra Pradesh", "Kerala"], risk: "High" },
    { disaster: "Disease Outbreak", regions: ["Kerala", "West Bengal", "Bihar", "Assam"], risk: "Medium" },
  ],
}

export const disasterPredictions = {
  "Sikkim-Heavy Rain-Hill": {
    prediction: "Landslide likely in Sikkim",
    probability: 80,
    timeline: [
      { hour: 0, risk: 20 },
      { hour: 12, risk: 45 },
      { hour: 24, risk: 65 },
      { hour: 36, risk: 80 },
      { hour: 48, risk: 85 },
    ],
    safetyAction: "Evacuate",
    details:
      "Heavy rainfall on steep slopes with loose soil creates high landslide risk. Immediate evacuation recommended for hillside communities.",
  },
  "Tamil Nadu-Cyclone-Coast": {
    prediction: "Cyclone formation near Tamil Nadu",
    probability: 60,
    timeline: [
      { hour: 0, risk: 10 },
      { hour: 12, risk: 25 },
      { hour: 24, risk: 40 },
      { hour: 36, risk: 55 },
      { hour: 48, risk: 60 },
    ],
    safetyAction: "Stay Alert",
    details:
      "Cyclonic conditions developing offshore with moderate probability of coastal impact. Prepare for strong winds and heavy rainfall.",
  },
  "Gujarat-Earthquake-Desert": {
    prediction: "Seismic activity in Kutch region",
    probability: 35,
    timeline: [
      { hour: 0, risk: 35 },
      { hour: 12, risk: 35 },
      { hour: 24, risk: 35 },
      { hour: 36, risk: 35 },
      { hour: 48, risk: 35 },
    ],
    safetyAction: "Low Risk",
    details:
      "Minor seismic activity detected. Historical fault lines show low probability of significant earthquake in the next 48 hours.",
  },
  "Uttarakhand-Heavy Rain-Mountain": {
    prediction: "Flash floods in Uttarakhand valleys",
    probability: 75,
    timeline: [
      { hour: 0, risk: 15 },
      { hour: 12, risk: 35 },
      { hour: 24, risk: 55 },
      { hour: 36, risk: 70 },
      { hour: 48, risk: 75 },
    ],
    safetyAction: "Evacuate",
    details:
      "Heavy rainfall combined with snowmelt creates high risk of flash floods in valley regions. Immediate evacuation recommended.",
  },
  "Kerala-Heavy Rain-Coast": {
    prediction: "Coastal flooding in Kerala",
    probability: 65,
    timeline: [
      { hour: 0, risk: 20 },
      { hour: 12, risk: 35 },
      { hour: 24, risk: 50 },
      { hour: 36, risk: 60 },
      { hour: 48, risk: 65 },
    ],
    safetyAction: "Stay Alert",
    details:
      "Heavy rainfall combined with high tides creates moderate risk of coastal flooding. Prepare for possible evacuation.",
  },
  "Jammu & Kashmir-Avalanche-Mountain": {
    prediction: "Avalanche risk in higher elevations",
    probability: 70,
    timeline: [
      { hour: 0, risk: 30 },
      { hour: 12, risk: 45 },
      { hour: 24, risk: 60 },
      { hour: 36, risk: 65 },
      { hour: 48, risk: 70 },
    ],
    safetyAction: "Evacuate",
    details:
      "Recent snowfall and temperature fluctuations create high avalanche risk above 2500m elevation. Avoid all mountain travel.",
  },
}

// AfterMath AI Data
export const damageScenarios = [
  {
    id: 1,
    name: "House Cracked in Gujarat Earthquake",
    type: "Residential",
    location: "Bhuj, Gujarat",
    estimatedCost: 120000,
    damageLevel: "Moderate",
    description: "Structural damage to load-bearing walls and foundation cracks",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Shop Flooded in Chennai",
    type: "Commercial",
    location: "T. Nagar, Chennai",
    estimatedCost: 85000,
    damageLevel: "Mild",
    description: "Water damage to inventory and electrical systems",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Farm Destroyed by Cyclone in Odisha",
    type: "Agricultural",
    location: "Puri, Odisha",
    estimatedCost: 175000,
    damageLevel: "Severe",
    description: "Complete crop loss and damage to irrigation systems",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "School Damaged in Uttarakhand Landslide",
    type: "Public Infrastructure",
    location: "Chamoli, Uttarakhand",
    estimatedCost: 250000,
    damageLevel: "Severe",
    description: "Structural damage to building and playground buried under debris",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Hospital Affected by Kerala Floods",
    type: "Healthcare",
    location: "Wayanad, Kerala",
    estimatedCost: 320000,
    damageLevel: "Moderate",
    description: "Ground floor flooded, equipment damaged, and power systems affected",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export const reliefSchemes = [
  {
    id: 1,
    name: "PMAY Housing Assistance",
    agency: "Central Government",
    maxAmount: 150000,
    eligibility: "Damaged residential structures",
    applicationProcess: "Apply through local panchayat or municipality",
    helpline: "1800-11-6446",
    website: "https://pmaymis.gov.in/",
  },
  {
    id: 2,
    name: "SDRF Immediate Relief",
    agency: "State Government",
    maxAmount: 100000,
    eligibility: "All disaster-affected citizens",
    applicationProcess: "Apply through district collector's office",
    helpline: "1070 (State Emergency Operation Center)",
    website: "https://ndma.gov.in/Resources/disaster-funds",
  },
  {
    id: 3,
    name: "PMNRF Assistance",
    agency: "Prime Minister's Office",
    maxAmount: 200000,
    eligibility: "Severely affected households",
    applicationProcess: "Apply through NDMA portal with damage assessment",
    helpline: "1078 (NDMA)",
    website: "https://pmnrf.gov.in/",
  },
  {
    id: 4,
    name: "Crop Damage Compensation",
    agency: "Ministry of Agriculture",
    maxAmount: 50000,
    eligibility: "Farmers with crop loss due to natural disasters",
    applicationProcess: "Apply through local agriculture office",
    helpline: "1800-180-1551",
    website: "https://agricoop.nic.in/",
  },
  {
    id: 5,
    name: "PM Fasal Bima Yojana",
    agency: "Ministry of Agriculture",
    maxAmount: "Based on insured amount",
    eligibility: "Insured farmers affected by natural calamities",
    applicationProcess: "File claim through insurance company or local agriculture office",
    helpline: "1800-11-6446",
    website: "https://pmfby.gov.in/",
  },
  {
    id: 6,
    name: "NGO HelpLine",
    agency: "Various NGOs",
    maxAmount: 50000,
    eligibility: "Vulnerable populations",
    applicationProcess: "Contact local NGO representatives",
    helpline: "Various by NGO",
    website: "https://ngo.india.gov.in/",
  },
]

export const claimStatuses = ["Submitted", "In Review", "Verified", "Granted", "Rejected"]

export const recoveryChecklists = {
  Flood: [
    "Do not enter flooded areas until authorities declare them safe",
    "Check for structural damage before re-entering buildings",
    "Discard food that has come into contact with flood water",
    "Clean and disinfect everything that got wet",
    "Document damage with photographs for insurance claims",
    "Contact local disaster management authority at 1070",
    "Apply for relief through district collector's office",
  ],
  Earthquake: [
    "Check for injuries and provide first aid if needed",
    "Evacuate damaged buildings and avoid re-entry until inspected",
    "Check for gas leaks, water line damage, and electrical system damage",
    "Stay away from damaged areas and follow official instructions",
    "Contact National Disaster Response Force at 011-24363260",
    "Register for temporary shelter if home is unsafe",
    "Document damage with photographs for insurance claims",
  ],
  Cyclone: [
    "Stay indoors until official all-clear is given",
    "Beware of fallen power lines, weakened structures, and flooding",
    "Check on neighbors, especially elderly and those with special needs",
    "Document damage with photographs for insurance claims",
    "Contact State Disaster Management Authority",
    "Apply for compensation through local revenue office",
    "Get medical help if needed at nearest government hospital",
  ],
  Landslide: [
    "Stay away from the slide area",
    "Check for injured or trapped persons near the slide area",
    "Listen for unusual sounds that might indicate moving debris",
    "Watch for flooding which may occur after a landslide",
    "Report broken utility lines to appropriate authorities",
    "Contact local disaster management cell",
    "Apply for rehabilitation assistance through district administration",
  ],
}

export const helplines = [
  {
    name: "National Emergency Response Centre",
    number: "112",
    description: "Unified emergency helpline for all emergencies",
  },
  {
    name: "National Disaster Response Force",
    number: "011-24363260",
    description: "Specialized force for disaster response",
  },
  {
    name: "State Disaster Management Authority",
    number: "1070",
    description: "State-level disaster management coordination",
  },
  {
    name: "District Emergency Operation Centre",
    number: "1077",
    description: "District-level emergency coordination",
  },
  {
    name: "Ambulance Services",
    number: "108",
    description: "Emergency medical services",
  },
  {
    name: "Police",
    number: "100",
    description: "Law enforcement and emergency assistance",
  },
  {
    name: "Fire Services",
    number: "101",
    description: "Fire emergency and rescue",
  },
]

// Language translations
export const translations = {
  en: {
    // General
    appTitle: "KavachX - Disaster Intelligence & Recovery",
    language: "Language",
    theme: "Theme",
    dataMode: "Data Mode",
    simulatedMode: "Simulated Mode",
    realTimeMode: "Real-Time Mode (Coming Soon)",

    // Navigation
    droneOps: "DroneOps",
    reGreen: "ReGreen",
    disasterCast: "DisasterCast",
    aftermath: "AfterMath",

    // DroneOps
    droneOpsTitle: "🛰️ DroneOps Command Center",
    droneOpsMap: "Drone Operations Map",
    activeMissions: "Active missions and danger zones across India",
    assignDroneTask: "Assign Drone Task",
    missionType: "Mission Type",
    location: "Location",
    droneType: "Drone Type",
    priority: "Priority",
    deployDrone: "Deploy Drone",
    active: "Active",
    scheduled: "Scheduled",
    completed: "Completed",
    liveDroneFeed: "Live Drone Feed",
    simulatedCamera: "Simulated camera feed from active drones",

    // ReGreen
    reGreenTitle: "🌱 ReGreen Recovery Tracker",
    environmentalMap: "Environmental Recovery Map",
    environmentalDesc: "Post-disaster environmental damage and recovery efforts",
    assignRecoveryTask: "Assign Recovery Task",
    taskType: "Task Type",
    season: "Season",
    volunteersNeeded: "Volunteers Needed",
    createTask: "Create Task",
    recoveryProgress: "Recovery Progress",
    topEcoVolunteers: "Top Eco Volunteers",
    recognizingHeroes: "Recognizing the heroes of environmental recovery",

    // DisasterCast
    disasterCastTitle: "🔮 DisasterCast Simulator",
    predictionInputs: "Disaster Prediction Inputs",
    predictionDesc: "Enter parameters to simulate disaster scenarios",
    weatherScenario: "Weather Scenario",
    geography: "Geography",
    runSimulation: "Run Simulation",
    predictionResults: "Prediction Results",
    disasterRisk: "Disaster risk assessment based on inputs",
    safetyAction: "Safety Action",
    riskTimeline: "Risk Timeline (T+0 to T+48 hrs)",
    historicalPatterns: "Historical Disaster Patterns",
    seasonalTrends: "Seasonal disaster trends in selected region",

    // AfterMath
    aftermathTitle: "🧠 AfterMath AI Assistant",
    damageAssessment: "Damage Assessment",
    uploadDesc: "Upload or select a damage scenario for assessment",
    selectScenario: "Select Scenario",
    uploadPhoto: "Upload Photo",
    reliefSchemes: "Relief Schemes",
    reliefDesc: "Available relief programs for your situation",
    claimProcess: "Claim Process",
    claimDesc: "Submit and track your relief claim",
    submitClaim: "Submit Claim",
  },
  hi: {
    // General
    appTitle: "कवचX - आपदा खुफिया और पुनर्प्राप्ति",
    language: "भाषा",
    theme: "थीम",
    dataMode: "डेटा मोड",
    simulatedMode: "सिमुलेटेड मोड",
    realTimeMode: "रीयल-टाइम मोड (जल्द आ रहा है)",

    // Navigation
    droneOps: "ड्रोन ऑप्स",
    reGreen: "रीग्रीन",
    disasterCast: "डिजास्टरकास्ट",
    aftermath: "आफ्टरमैथ",

    // DroneOps
    droneOpsTitle: "🛰️ ड्रोन ऑप्स कमांड सेंटर",
    droneOpsMap: "ड्रोन ऑपरेशन मैप",
    activeMissions: "भारत भर में सक्रिय मिशन और खतरे के क्षेत्र",
    assignDroneTask: "ड्रोन कार्य असाइन करें",
    missionType: "मिशन प्रकार",
    location: "स्थान",
    droneType: "ड्रोन प्रकार",
    priority: "प्राथमिकता",
    deployDrone: "ड्रोन तैनात करें",
    active: "सक्रिय",
    scheduled: "निर्धारित",
    completed: "पूर्ण",
    liveDroneFeed: "लाइव ड्रोन फीड",
    simulatedCamera: "सक्रिय ड्रोन से सिमुलेटेड कैमरा फीड",

    // ReGreen
    reGreenTitle: "🌱 रीग्रीन रिकवरी ट्रैकर",
    environmentalMap: "पर्यावरण पुनर्प्राप्ति मानचित्र",
    environmentalDesc: "आपदा के बाद पर्यावरण क्षति और पुनर्प्राप्ति प्रयास",
    assignRecoveryTask: "पुनर्प्राप्ति कार्य असाइन करें",
    taskType: "कार्य प्रकार",
    season: "मौसम",
    volunteersNeeded: "स्वयंसेवकों की आवश्यकता है",
    createTask: "कार्य बनाएं",
    recoveryProgress: "पुनर्प्राप्ति प्रगति",
    topEcoVolunteers: "शीर्ष इको स्वयंसेवक",
    recognizingHeroes: "पर्यावरण पुनर्प्राप्ति के नायकों को पहचानना",

    // DisasterCast
    disasterCastTitle: "🔮 डिजास्टरकास्ट सिम्युलेटर",
    predictionInputs: "आपदा भविष्यवाणी इनपुट",
    predictionDesc: "आपदा परिदृश्यों का अनुकरण करने के लिए पैरामीटर दर्ज करें",
    weatherScenario: "मौसम परिदृश्य",
    geography: "भूगोल",
    runSimulation: "सिमुलेशन चलाएं",
    predictionResults: "भविष्यवाणी परिणाम",
    disasterRisk: "इनपुट के आधार पर आपदा जोखिम मूल्यांकन",
    safetyAction: "सुरक्षा कार्रवाई",
    riskTimeline: "जोखिम टाइमलाइन (T+0 से T+48 घंटे)",
    historicalPatterns: "ऐतिहासिक आपदा पैटर्न",
    seasonalTrends: "चयनित क्षेत्र में मौसमी आपदा रुझान",

    // AfterMath
    aftermathTitle: "🧠 आफ्टरमैथ AI सहायक",
    damageAssessment: "क्षति मूल्यांकन",
    uploadDesc: "मूल्यांकन के लिए क्षति परिदृश्य अपलोड या चयन करें",
    selectScenario: "परिदृश्य चुनें",
    uploadPhoto: "फोटो अपलोड करें",
    reliefSchemes: "राहत योजनाएं",
    reliefDesc: "आपकी स्थिति के लिए उपलब्ध राहत कार्यक्रम",
    claimProcess: "दावा प्रक्रिया",
    claimDesc: "दावा जमा करें और ट्रैक करें",
    submitClaim: "दावा जमा करें",
  },
  ta: {
    // General
    appTitle: "கவச்X - பேரிடர் நுண்ணறிவு மற்றும் மீட்பு",
    language: "மொழி",
    theme: "தீம்",
    dataMode: "தரவு முறை",
    simulatedMode: "உருவகப்படுத்தப்பட்ட முறை",
    realTimeMode: "நேரடி முறை (விரைவில் வருகிறது)",

    // Navigation
    droneOps: "டிரோன் ஆப்ஸ்",
    reGreen: "ரீகிரீன்",
    disasterCast: "டிசாஸ்டர்காஸ்ட்",
    aftermath: "ஆஃப்டர்மேத்",

    // DroneOps
    droneOpsTitle: "🛰️ டிரோன் ஆப்ஸ் கட்டுப்பாட்டு மையம்",
    droneOpsMap: "டிரோன் செயல்பாட்டு வரைபடம்",
    activeMissions: "இந்தியா முழுவதும் செயலில் உள்ள பணிகள் மற்றும் ஆபத்து மண்டலங்கள்",
    assignDroneTask: "டிரோன் பணி ஒதுக்கு",
    missionType: "பணி வகை",
    location: "இடம்",
    droneType: "டிரோன் வகை",
    priority: "முன்னுரிமை",
    deployDrone: "டிரோனை நிறுத்து",
    active: "செயலில்",
    scheduled: "திட்டமிடப்பட்டது",
    completed: "முடிந்தது",
    liveDroneFeed: "நேரடி டிரோன் ஊட்டம்",
    simulatedCamera: "செயலில் உள்ள டிரோன்களில் இருந்து உருவகப்படுத்தப்பட்ட கேமரா ஊட்டம்",

    // ReGreen
    reGreenTitle: "🌱 ரீகிரீன் மீட்பு கண்காணிப்பு",
    environmentalMap: "சுற்றுச்சூழல் மீட்பு வரைபடம்",
    environmentalDesc: "பேரிடருக்குப் பின் சுற்றுச்சூழல் சேதம் மற்றும் மீட்பு முயற்சிகள்",
    assignRecoveryTask: "மீட்பு பணி ஒதுக்கு",
    taskType: "பணி வகை",
    season: "பருவம்",
    volunteersNeeded: "தேவையான தன்னார்வலர்கள்",
    createTask: "பணி உருவாக்கு",
    recoveryProgress: "மீட்பு முன்னேற்றம்",
    topEcoVolunteers: "சிறந்த சுற்றுச்சூழல் தன்னார்வலர்கள்",
    recognizingHeroes: "சுற்றுச்சூழல் மீட்பின் நாயகர்களை அங்கீகரித்தல்",

    // DisasterCast
    disasterCastTitle: "🔮 டிசாஸ்டர்காஸ்ட் சிமுலேட்டர்",
    predictionInputs: "பேரிடர் கணிப்பு உள்ளீடுகள்",
    predictionDesc: "பேரிடர் சூழ்நிலைகளை உருவகப்படுத்த அளவுருக்களை உள்ளிடவும்",
    weatherScenario: "வானிலை சூழ்நிலை",
    geography: "புவியியல்",
    runSimulation: "சிமுலேஷன் இயக்கு",
    predictionResults: "கணிப்பு முடிவுகள்",
    disasterRisk: "உள்ளீடுகளின் அடிப்படையில் பேரிடர் ஆபத்து மதிப்பீடு",
    safetyAction: "பாதுகாப்பு நடவடிக்கை",
    riskTimeline: "ஆபத்து காலவரிசை (T+0 முதல் T+48 மணி)",
    historicalPatterns: "வரலாற்று பேரிடர் முறைகள்",
    seasonalTrends: "தேர்ந்தெடுக்கப்பட்ட பகுதியில் பருவகால பேரிடர் போக்குகள்",

    // AfterMath
    aftermathTitle: "🧠 ஆஃப்டர்மேத் AI உதவியாளர்",
    damageAssessment: "சேத மதிப்பீடு",
    uploadDesc: "மதிப்பீட்டிற்கு சேத சூழ்நிலையை பதிவேற்றவும் அல்லது தேர்ந்தெடுக்கவும்",
    selectScenario: "சூழ்நிலையைத் தேர்ந்தெடுக்கவும்",
    uploadPhoto: "புகைப்படத்தை பதிவேற்றவும்",
    reliefSchemes: "நிவாரண திட்டங்கள்",
    reliefDesc: "உங்கள் சூழ்நிலைக்கான நிவாரண திட்டங்கள்",
    claimProcess: "உரிமைகோரல் செயல்முறை",
    claimDesc: "உரிமைகோரலை சமர்ப்பித்து கண்காணிக்கவும்",
    submitClaim: "உரிமைகோரலை சமர்ப்பிக்கவும்",
  },
}
