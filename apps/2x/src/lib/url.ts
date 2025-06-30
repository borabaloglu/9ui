import { siteConfig } from "@/config/site"

export const joinUrl = (...paths: string[]) => {
	return paths.join("/").replace(/\/$/, "")
}

export const absoluteUrl = (...paths: string[]) => {
	return new URL(joinUrl(...paths), siteConfig.url).toString()
}
