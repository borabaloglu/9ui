import { navConfig } from "@/config/nav"

export const revalidate = false

export async function GET() {
	const baseUrl = "https://9ui.dev"

	// Getting Started bölümü
	const gettingStartedLinks = navConfig.sidebarNav[0].items
		.map((item) => `- [${item.title}](${baseUrl}${item.href})`)
		.join("\n")

	// Components bölümü
	const componentLinks = navConfig.sidebarNav[1].items
		.map((item) => `- [${item.title}](${baseUrl}${item.href})`)
		.join("\n")

	// Ana sayfadaki linkler
	const mainNavLinks = navConfig.mainNav
		.map((item) => `- [${item.title}](${baseUrl}${item.href})`)
		.join("\n")

	const content = `# OVERVIEW\n\n${mainNavLinks}\n\n# GETTING STARTED\n\n${gettingStartedLinks}\n\n# COMPONENTS\n\n${componentLinks}`

	return new Response(content)
}
