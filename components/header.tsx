"use client"

import { useApp } from "@/contexts/app-context"

export default function Header({ title }: { title: string }) {
  const { t, isMounted } = useApp()

  // Get translated title if available
  const getTranslatedTitle = () => {
    if (!isMounted) return title

    if (title.includes("DroneOps")) {
      return t.droneOpsTitle
    } else if (title.includes("ReGreen")) {
      return t.reGreenTitle
    } else if (title.includes("DisasterCast")) {
      return t.disasterCastTitle
    } else if (title.includes("AfterMath")) {
      return t.aftermathTitle
    }

    return title
  }

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-bold">{getTranslatedTitle()}</h1>
    </div>
  )
}
