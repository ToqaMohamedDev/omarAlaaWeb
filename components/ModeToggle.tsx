"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <div className="relative flex items-center">
      <Sun className="absolute left-0 h-[1.2rem] w-[1.2rem] transition-all dark:hidden z-2" />
      <Moon className="absolute left-0 h-[1.2rem] w-[1.2rem] transition-all dark:block hidden z-2" />
      <Switch 
        checked={theme === "dark"}
        onCheckedChange={handleChange}
        className="relative transition-all"
      />
    </div>
  )
}
