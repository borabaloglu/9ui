"use client"

import { useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { capitalize } from "lodash"
import { CopyIcon, RotateCcwIcon, Wand2Icon } from "lucide-react"
import { useTheme } from "next-themes"
import { useOnClickOutside } from "usehooks-ts"

import { ThemeCode } from "@/components/theme-code"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

import { colors, PrimaryColor, Shade } from "@/config/colors"
import {
	primaryColorOptions,
	radiusOptions,
	shadeOptions,
	ThemeSettings,
} from "@/config/theme"

import { generateTheme } from "@/lib/generate-theme"

const ColorItem = ({ color, name }: { color: string; name: string }) => {
	return (
		<div className="flex items-center gap-2">
			<span
				className="size-3.5 rounded border border-foreground/20"
				style={{
					backgroundColor: color,
				}}
			/>
			<span>{name}</span>
		</div>
	)
}
type CustomizeToolbarProps = {
	theme: ThemeSettings
	setTheme: (theme: ThemeSettings) => void
}

export const CustomizeToolbar = ({
	theme,
	setTheme,
}: CustomizeToolbarProps) => {
	const { theme: currentTheme } = useTheme()

	const ref = useRef(null)
	const [open, setOpen] = useState(false)
	const [copyDialogOpen, setCopyDialogOpen] = useState(false)

	useOnClickOutside(ref, () => setOpen(false))

	const themeVariant = useMemo(() => {
		return currentTheme === "light" ? "light" : "dark"
	}, [currentTheme])

	const handleValueChange = (
		key: keyof ThemeSettings,
		newValue: Shade | PrimaryColor | number | boolean
	) => {
		setTheme({
			...theme,
			[key]: newValue,
		})
	}

	const handleReset = () => {
		setTheme({
			shade: "zinc",
			primaryColor: "neutral",
			radius: 0.5,
			flat: false,
		})
	}

	const handleCopy = () => {
		setOpen(false)
		setCopyDialogOpen(true)
	}

	return (
		<>
			<div className="fixed bottom-6 left-1/2 z-10 flex w-full -translate-x-1/2 items-end justify-center">
				<motion.button
					layoutId="wrapper"
					onClick={() => {
						setOpen(true)
					}}
					key="button"
					className="h-9 rounded-md border bg-background px-4 text-sm font-medium shadow-sm"
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 30,
						duration: 0.2,
					}}
				>
					<motion.span layoutId="title" className="flex items-center">
						<Wand2Icon className="mr-2 size-4" />
						Customize
					</motion.span>
				</motion.button>
				<AnimatePresence>
					{open ? (
						<motion.div
							ref={ref}
							layoutId="wrapper"
							className="absolute h-auto w-[90%] rounded-md border bg-background p-4 shadow-sm outline-none sm:w-full sm:max-w-lg"
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 25,
								duration: 0.2,
							}}
						>
							<div className="flex justify-between gap-2">
								<div>
									<motion.span
										aria-hidden
										className="font-semibold"
										layoutId="title"
									>
										Customize
									</motion.span>
									<p className="text-sm text-muted-foreground">
										Make it the way you like it.
									</p>
								</div>
								<div className="flex gap-2">
									<Button variant="outline" size="icon-sm" onClick={handleCopy}>
										<CopyIcon className="size-4" />
									</Button>
									<Button
										variant="outline"
										size="icon-sm"
										onClick={handleReset}
									>
										<RotateCcwIcon className="size-4" />
									</Button>
								</div>
							</div>
							<div className="mt-4 grid grid-cols-2 gap-x-2 gap-y-4">
								<div className="flex flex-col gap-2">
									<Label>Shade</Label>
									<Select
										onValueChange={(value: Shade) =>
											handleValueChange("shade", value)
										}
										value={theme.shade}
									>
										<SelectTrigger>
											<SelectValue>
												{() =>
													theme.shade ? (
														<ColorItem
															color={
																colors.shades[theme.shade].cssVars[themeVariant]
																	.secondary
															}
															name={capitalize(theme.shade)}
														/>
													) : (
														"Select a shade"
													)
												}
											</SelectValue>
										</SelectTrigger>
										<SelectContent>
											{shadeOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													<ColorItem
														color={
															colors.shades[option.value].cssVars[themeVariant]
																.secondary
														}
														name={option.name}
													/>
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-2">
									<Label>Appearance</Label>
									<Select
										value={theme.flat}
										onValueChange={(value: boolean) =>
											handleValueChange("flat", value)
										}
									>
										<SelectTrigger>
											<SelectValue placeholder="Appearance" />
										</SelectTrigger>
										<SelectContent>
											{[
												{ value: false, name: "Faded" },
												{ value: true, name: "Flat" },
											].map((option) => (
												<SelectItem
													key={option.value.toString()}
													value={option.value}
												>
													{option.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-2">
									<Label>Primary Color</Label>
									<Select
										onValueChange={(value: PrimaryColor) =>
											handleValueChange("primaryColor", value)
										}
										value={theme.primaryColor}
									>
										<SelectTrigger>
											<SelectValue>
												{() =>
													theme.primaryColor ? (
														<ColorItem
															color={
																theme.primaryColor === "neutral"
																	? colors.shades[theme.shade].cssVars[
																			themeVariant
																		].primary
																	: colors.primary[theme.primaryColor].cssVars[
																			themeVariant
																		].primary
															}
															name={capitalize(theme.primaryColor)}
														/>
													) : (
														"Select a primary color"
													)
												}
											</SelectValue>
										</SelectTrigger>
										<SelectContent>
											{primaryColorOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													<ColorItem
														color={
															option.value === "neutral"
																? colors.shades[theme.shade].cssVars[
																		themeVariant
																	].primary
																: colors.primary[
																		option.value as keyof typeof colors.primary
																	].cssVars[themeVariant].primary
														}
														name={option.name}
													/>
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-2">
									<Label>Radius</Label>
									<Select
										onValueChange={(value: number) =>
											handleValueChange("radius", value)
										}
										value={theme.radius}
									>
										<SelectTrigger>
											<SelectValue>
												{() =>
													typeof theme.radius === "number" ? (
														<div className="flex items-center gap-2">
															<span
																className="size-3.5 border border-foreground/20 bg-background"
																style={{
																	borderRadius: `${theme.radius / 2}rem`,
																}}
															/>
															<span>{theme.radius}rem</span>
														</div>
													) : (
														"Select a radius"
													)
												}
											</SelectValue>
										</SelectTrigger>
										<SelectContent>
											{radiusOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													<div className="flex items-center gap-2">
														<span
															className="size-3.5 border border-foreground/20 bg-background"
															style={{
																borderRadius: `${option.value / 2}rem`,
															}}
														/>
														<span>{option.name}</span>
													</div>
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>
						</motion.div>
					) : null}
				</AnimatePresence>
			</div>
			<Dialog open={copyDialogOpen} onOpenChange={setCopyDialogOpen}>
				<DialogContent className="w-[90%] !max-w-screen-md">
					<DialogHeader>
						<DialogTitle>Your Theme</DialogTitle>
						<DialogDescription>
							Copy the following code to your project.
						</DialogDescription>
					</DialogHeader>
					<ThemeCode
						css={generateTheme(
							theme.shade,
							theme.primaryColor,
							theme.radius,
							theme.flat,
							false
						)}
					/>
				</DialogContent>
			</Dialog>
		</>
	)
}
