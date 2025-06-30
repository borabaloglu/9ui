"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggleDemo() {
	const { setTheme, resolvedTheme } = useTheme()

	const toggleTheme = React.useCallback(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark")
	}, [resolvedTheme, setTheme])

	return (
		<Button onClick={toggleTheme} variant="ghost" size="icon">
			<MoonIcon className="dark:hidden" />
			<SunIcon className="hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
