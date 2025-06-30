"use client"

import { Suspense, useState } from "react"

import { CardsGrid } from "@/components/cards-grid"
import { CustomizeToolbar } from "@/components/customize-toolbar"

import { ThemeSettings } from "@/config/theme"

import { generateTheme } from "@/lib/generate-theme"

const ThemesPage = () => {
	const [theme, setTheme] = useState<ThemeSettings>({
		shade: "zinc",
		primaryColor: "neutral",
		radius: 0.5,
		flat: false,
	})

	return (
		<main className="dark:border-border/40 container mx-auto border-dashed py-4 xl:border-x">
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h1 className="text-2xl font-bold">Themes</h1>
					<p className="text-muted-foreground text-sm">
						Customize your theme and see the changes live.
					</p>
					<div className="dark:from-background fixed bottom-0 left-0 z-10 flex h-24 w-full bg-gradient-to-t from-black/50 to-transparent">
						<CustomizeToolbar theme={theme} setTheme={setTheme} />
					</div>
				</div>
				<CardsGrid />
				<Suspense fallback={<div>Loading...</div>}>
					<style>
						{generateTheme(
							theme.shade,
							theme.primaryColor,
							theme.radius,
							theme.flat,
							true
						)}
					</style>
				</Suspense>
			</div>
		</main>
	)
}

export default ThemesPage
