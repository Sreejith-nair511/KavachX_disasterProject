"use client"

import { useEffect } from "react"
import { Globe, Eye, SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useApp } from "@/contexts/app-context"

export default function ControlPanel() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, dataMode, setDataMode, t, isMounted } = useApp()

  // After mounting, we have access to the theme and can use browser APIs
  useEffect(() => {
    if (isMounted && typeof window !== "undefined") {
      // Check if it's after 7 PM and set dark mode
      const currentHour = new Date().getHours()
      if (currentHour >= 19 && theme !== "dark") {
        setTheme("dark")
      }
    }
  }, [isMounted, theme, setTheme])

  // Handle data mode change
  const handleDataModeChange = () => {
    setDataMode(dataMode === "simulated" ? "realtime" : "simulated")
  }

  // Handle theme change
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Don't render anything until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <TooltipProvider>
        {/* Language Selector */}
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Globe className="h-[18px] w-[18px] sm:h-4 sm:w-4" />
                  <span className="sr-only">{t.language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-2xl">
                <DropdownMenuItem onClick={() => setLanguage("en")}>
                  English {language === "en" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("hi")}>
                  हिंदी (Hindi) {language === "hi" && "✓"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ta")}>
                  தமிழ் (Tamil) {language === "ta" && "✓"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="rounded-xl">
            <p>{t.language}</p>
          </TooltipContent>
        </Tooltip>

        {/* Data Visibility Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={handleDataModeChange}
            >
              <Eye className="h-[18px] w-[18px] sm:h-4 sm:w-4" />
              <span className="sr-only">{t.dataMode}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="rounded-xl">
            <p>
              {t.dataMode}: {dataMode === "simulated" ? t.simulatedMode : t.realTimeMode}
            </p>
          </TooltipContent>
        </Tooltip>

        {/* Theme Toggle */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={toggleTheme}
            >
              <SunIcon className="h-[18px] w-[18px] sm:h-4 sm:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[18px] w-[18px] sm:h-4 sm:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{t.theme}</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom" className="rounded-xl">
            <p>
              {t.theme}: {theme === "dark" ? "Dark" : "Light"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
