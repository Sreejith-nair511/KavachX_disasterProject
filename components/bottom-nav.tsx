"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { DrillIcon as Drone, Leaf, CloudLightning, Brain } from "lucide-react"
import { cn } from "@/lib/utils"
import { useApp } from "@/contexts/app-context"

export default function BottomNav() {
  const pathname = usePathname()
  const { t, isMounted } = useApp()

  // Default navigation items (for SSR)
  const defaultNavItems = [
    {
      name: "DroneOps",
      href: "/",
      icon: Drone,
    },
    {
      name: "ReGreen",
      href: "/regreen",
      icon: Leaf,
    },
    {
      name: "DisasterCast",
      href: "/disastercast",
      icon: CloudLightning,
    },
    {
      name: "AfterMath",
      href: "/aftermath",
      icon: Brain,
    },
  ]

  // Use translated nav items if mounted
  const navItems = isMounted
    ? [
        {
          name: t.droneOps || "DroneOps",
          href: "/",
          icon: Drone,
        },
        {
          name: t.reGreen || "ReGreen",
          href: "/regreen",
          icon: Leaf,
        },
        {
          name: t.disasterCast || "DisasterCast",
          href: "/disastercast",
          icon: CloudLightning,
        },
        {
          name: t.aftermath || "AfterMath",
          href: "/aftermath",
          icon: Brain,
        },
      ]
    : defaultNavItems

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t border-border shadow-lg">
      <div className="grid h-full grid-cols-4 mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center transition-colors duration-200",
                isActive
                  ? "text-primary dark:text-primary"
                  : "text-muted-foreground hover:text-primary dark:hover:text-primary",
              )}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
