import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import "./syntax.css"

import { ThemeProvider } from "next-themes"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Openpanel } from "@/components/openpanel"
import { Toaster } from "@/components/ui/sonner"
import { ToastProvider } from "@/components/ui/toast"

import { siteConfig } from "@/config/site"

import { cn } from "@/lib/utils"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
})

const geistMono = Geist_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-geist-mono",
})

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: ["React", "Base UI", "Tailwind CSS", "9ui"],
	authors: [{ name: "Bora Baloglu", url: "https://x.com/borabalogluu" }],
	creator: "Bora Baloglu",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.ogImage],
		creator: "@borabalogluu",
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" suppressHydrationWarning>
		<body
			className={cn(
				`${inter.variable} ${geistMono.variable}`,
				"font-sans antialiased"
			)}
		>
			<Openpanel />
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
				enableColorScheme
			>
				<ToastProvider>
					<div
						className="root flex flex-1 flex-col"
						data-vaul-drawer-wrapper=""
					>
						<Header />
						<main className="flex-1">{children}</main>
						<Footer />
					</div>
				</ToastProvider>
				<Toaster />
			</ThemeProvider>
		</body>
	</html>
)

export default RootLayout
