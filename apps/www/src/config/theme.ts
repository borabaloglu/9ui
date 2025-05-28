import { PrimaryColor, Shade } from "@/config/colors"

export type ThemeSettings = {
	shade: Shade
	primaryColor: PrimaryColor
	radius: number
	flat: boolean
}

export type ShadeOption = {
	name: string
	value: Shade
}

export type PrimaryColorOption = {
	name: string
	value: PrimaryColor
}

export type RadiusOption = {
	name: string
	value: number
}

export const shadeOptions: ShadeOption[] = [
	{
		name: "Zinc",
		value: "zinc",
	},
	{
		name: "Neutral",
		value: "neutral",
	},
	{
		name: "Slate",
		value: "slate",
	},
	{
		name: "Gray",
		value: "gray",
	},
	{
		name: "Stone",
		value: "stone",
	},
]

export const primaryColorOptions: PrimaryColorOption[] = [
	{
		name: "Neutral",
		value: "neutral",
	},
	{
		name: "Red",
		value: "red",
	},
	{
		name: "Blue",
		value: "blue",
	},
	{
		name: "Green",
		value: "green",
	},
	{
		name: "Amber",
		value: "amber",
	},
	{
		name: "Yellow",
		value: "yellow",
	},
	{
		name: "Purple",
		value: "purple",
	},
	{
		name: "Pink",
		value: "pink",
	},
	{
		name: "Lime",
		value: "lime",
	},
]

export const radiusOptions: RadiusOption[] = [
	{
		name: "0rem",
		value: 0,
	},
	{
		name: "0.25rem",
		value: 0.25,
	},
	{
		name: "0.5rem",
		value: 0.5,
	},
	{
		name: "0.75rem",
		value: 0.75,
	},
	{
		name: "1rem",
		value: 1,
	},
]
