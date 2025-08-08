"use client"

import { useEffect, useRef, useState } from "react"
import { indiaGeoJSON } from "@/lib/india-geojson"

// Define the props interface
interface MapComponentProps {
  markers?: Array<{
    position: [number, number]
    popup: string
    type?: "drone" | "danger" | "recovery" | "default"
  }>
  paths?: Array<{
    positions: Array<[number, number]>
    color: string
  }>
  polygons?: Array<{
    positions: Array<[number, number]>
    color: string
    fillColor: string
    fillOpacity: number
    popup?: string
  }>
  center?: [number, number]
  zoom?: number
  onClick?: (e: any) => void
}

// Create the map component that will be loaded client-side only
export default function MapComponent({
  markers = [],
  paths = [],
  polygons = [],
  center = [20.5937, 78.9629], // Center of India
  zoom = 5,
  onClick,
}: MapComponentProps) {
  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [leaflet, setLeaflet] = useState<any>(null)

  // Load Leaflet dynamically on the client side
  useEffect(() => {
    async function loadLeaflet() {
      try {
        // Dynamic imports for Leaflet and its CSS
        const L = await import("leaflet")
        await import("leaflet/dist/leaflet.css")
        setLeaflet(L.default || L)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load Leaflet:", error)
      }
    }

    loadLeaflet()

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  // Initialize and update the map when Leaflet is loaded
  useEffect(() => {
    if (isLoading || !leaflet || !mapContainerRef.current) return

    // Initialize map if it doesn't exist
    if (!mapRef.current) {
      mapRef.current = leaflet.map(mapContainerRef.current).setView(center, zoom)

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(mapRef.current)

      // Add India GeoJSON
      try {
        leaflet
          .geoJSON(indiaGeoJSON, {
            style: {
              color: "#138808",
              weight: 2,
              opacity: 0.6,
              fillColor: "#f8f9fa",
              fillOpacity: 0.1,
            },
          })
          .addTo(mapRef.current)
      } catch (error) {
        console.error("Failed to load GeoJSON:", error)
      }

      if (onClick) {
        mapRef.current.on("click", onClick)
      }
    }

    // Clear existing markers, paths, and polygons
    mapRef.current.eachLayer((layer: any) => {
      if (layer instanceof leaflet.Marker || layer instanceof leaflet.Polyline || layer instanceof leaflet.Polygon) {
        mapRef.current?.removeLayer(layer)
      }
    })

    // Add markers
    markers.forEach((marker) => {
      const icon = getMarkerIcon(marker.type || "default")
      leaflet.marker(marker.position, { icon }).addTo(mapRef.current).bindPopup(marker.popup)
    })

    // Add paths
    paths.forEach((path) => {
      leaflet.polyline(path.positions, { color: path.color }).addTo(mapRef.current)
    })

    // Add polygons
    polygons.forEach((polygon) => {
      leaflet
        .polygon(polygon.positions, {
          color: polygon.color,
          fillColor: polygon.fillColor,
          fillOpacity: polygon.fillOpacity,
        })
        .addTo(mapRef.current)
        .bindPopup(polygon.popup || "")
    })

    return () => {
      if (onClick && mapRef.current) {
        mapRef.current.off("click", onClick)
      }
    }
  }, [leaflet, markers, paths, polygons, center, zoom, onClick, isLoading])

  // Custom marker icons
  function getMarkerIcon(type: string) {
    if (!leaflet) return null

    let iconUrl = "/marker-icon.png"
    let iconSize: [number, number] = [25, 41]

    switch (type) {
      case "drone":
        iconUrl = "https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
        iconSize = [32, 32]
        break
      case "danger":
        iconUrl = "https://cdn-icons-png.flaticon.com/512/1680/1680012.png"
        iconSize = [32, 32]
        break
      case "recovery":
        iconUrl = "https://cdn-icons-png.flaticon.com/512/3309/3309960.png"
        iconSize = [32, 32]
        break
      default:
        iconUrl = "https://cdn-icons-png.flaticon.com/512/684/684908.png"
        iconSize = [25, 25]
    }

    return leaflet.icon({
      iconUrl,
      iconSize,
      iconAnchor: [iconSize[0] / 2, iconSize[1]],
      popupAnchor: [0, -iconSize[1]],
    })
  }

  // Show loading state while Leaflet is being loaded
  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return <div ref={mapContainerRef} className="h-full w-full" />
}
