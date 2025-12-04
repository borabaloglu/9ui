"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { mergeProps } from "@base-ui-components/react"
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	CopyIcon,
} from "lucide-react"

import { Icons } from "@/components/icons"
import { Button, buttonVariants } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { siteConfig } from "@/config/site"

import { getNavigationForPage } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const getOpenInUrl = (targetUrl: string, currentUrl: string) => {
	const markdownUrl = `${currentUrl}.md`

	const prompt = `I need help with 9ui documentation.

**Main URL:** ${currentUrl}

**Markdown Source:** ${markdownUrl}

If you can access the main URL, please help me understand the documentation there. If you cannot access it, try the markdown source URL instead.

Please be ready to:
- Explain concepts and usage patterns
- Provide code examples and implementation details
- Help debug issues and troubleshoot problems
- Suggest best practices and alternatives

Focus on practical, actionable guidance based on the 9ui documentation.`

	return `${targetUrl}?q=${encodeURIComponent(prompt)}`
}

export function PageActions() {
	const pathname = usePathname()
	const currentUrl = `${siteConfig.url}${pathname}`
	const [copied, setCopied] = React.useState(false)
	const navigation = getNavigationForPage(pathname)

	const getMarkdownUrl = () => {
		const docPath = pathname.replace("/docs/", "")
		return `/docs/${docPath}.md`
	}

	const copyMarkdownContent = async () => {
		try {
			const markdownUrl = getMarkdownUrl()
			const response = await fetch(markdownUrl)
			if (response.ok) {
				const markdownContent = await response.text()
				await navigator.clipboard.writeText(markdownContent)
			} else {
				await navigator.clipboard.writeText(currentUrl)
			}
		} catch {
			await navigator.clipboard.writeText(currentUrl)
		}

		setCopied(true)
		setTimeout(() => setCopied(false), 3000)
	}

	return (
		<div className="page-actions max-sm:bg-background max-sm:border-border/40 z-10 flex w-full items-center justify-between max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:border-t max-sm:border-dashed max-sm:p-4">
			<div className="flex items-center gap-1">
				<Button
					variant="secondary"
					size="icon-sm"
					disabled={!navigation.prev}
					render={(props) => {
						const Element = navigation.prev ? Link : "button"

						const p = navigation.prev
							? mergeProps(props, {
									href: navigation.prev.href,
									prefetch: true,
								})
							: props

						return (
							// @ts-expect-error - Link props are not compatible with button props
							<Element {...p}>
								<ChevronLeftIcon className="size-3.5" />
							</Element>
						)
					}}
					nativeButton={!Boolean(navigation.prev)}
				/>

				<Button
					variant="secondary"
					size="icon-sm"
					disabled={!navigation.next}
					render={(props) => {
						const Element = navigation.next ? Link : "button"

						const p = navigation.next
							? mergeProps(props, {
									href: navigation.next.href,
									prefetch: true,
								})
							: props

						return (
							// @ts-expect-error - Link props are not compatible with button props
							<Element {...p}>
								<ChevronRightIcon className="size-3.5" />
							</Element>
						)
					}}
					nativeButton={!Boolean(navigation.next)}
				/>
			</div>

			<div className="flex items-center">
				<button
					className={cn(
						buttonVariants({ variant: "secondary", size: "sm" }),
						"h-8 gap-2 rounded-r-none"
					)}
					onClick={copyMarkdownContent}
				>
					{copied ? (
						<CheckIcon className="size-3.5" />
					) : (
						<CopyIcon className="size-3.5" />
					)}
					<span>Page</span>
				</button>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={(props) => (
							<button
								className={cn(
									buttonVariants({ variant: "secondary", size: "icon-sm" }),
									"h-8 rounded-l-none border-l data-[popup-open]:[&_svg]:rotate-180 max-md:[&_svg]:rotate-180 max-md:data-[popup-open]:[&_svg]:rotate-0"
								)}
								{...props}
							>
								<ChevronDownIcon className="size-3.5 transition-transform" />
							</button>
						)}
					/>
					<DropdownMenuContent align="end" className="w-56">
						<DropdownMenuItem
							render={(props) => (
								<a href={getMarkdownUrl()} target="_blank" {...props}>
									<Icons.markdown className="size-4" />
									<span>View as Markdown</span>
								</a>
							)}
							nativeButton={false}
						/>
						<DropdownMenuItem
							render={(props) => (
								<a
									href={getOpenInUrl("https://v0.dev", currentUrl)}
									target="_blank"
									{...props}
								>
									<Icons.v0 className="size-4" />
									<span>Open in v0</span>
								</a>
							)}
							nativeButton={false}
						/>
						<DropdownMenuItem
							render={(props) => (
								<a
									href={getOpenInUrl("https://chatgpt.com", currentUrl)}
									target="_blank"
									{...props}
								>
									<Icons.chatgpt className="size-4" />
									<span>Open in ChatGPT</span>
								</a>
							)}
							nativeButton={false}
						/>
						<DropdownMenuItem
							render={(props) => (
								<a
									href={getOpenInUrl("https://claude.ai/new", currentUrl)}
									target="_blank"
									{...props}
								>
									<Icons.claude className="size-4" />
									<span>Open in Claude</span>
								</a>
							)}
							nativeButton={false}
						/>
						<DropdownMenuItem
							render={(props) => (
								<a
									href={getOpenInUrl("https://scira.ai", currentUrl)}
									target="_blank"
									{...props}
								>
									<Icons.scira className="size-4" />
									<span>Open in Scira</span>
								</a>
							)}
							nativeButton={false}
						/>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	)
}
