"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import {
	ArrowUpRightIcon,
	CheckIcon,
	ChevronDownIcon,
	CopyIcon,
} from "lucide-react";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

import { siteConfig } from "@/config/site";

import type { ComponentLink } from "@/lib/component-links";
import { cn } from "@/lib/utils";

const getOpenInUrl = (targetUrl: string, currentUrl: string) => {
	const markdownUrl = `${currentUrl}.md`;

	const prompt = `I need help with 9ui documentation.

**Main URL:** ${currentUrl}

**Markdown Source:** ${markdownUrl}

If you can access the main URL, please help me understand the documentation there. If you cannot access it, try the markdown source URL instead.

Please be ready to:
- Explain concepts and usage patterns
- Provide code examples and implementation details
- Help debug issues and troubleshoot problems
- Suggest best practices and alternatives

Focus on practical, actionable guidance based on the 9ui documentation.`;

	return `${targetUrl}?q=${encodeURIComponent(prompt)}`;
};

interface PageActionsProps {
	links?: ComponentLink[];
}

export function PageActions({ links = [] }: PageActionsProps) {
	const pathname = usePathname();
	const currentUrl = `${siteConfig.url}${pathname}`;
	const [copied, setCopied] = React.useState(false);

	const getMarkdownUrl = () => {
		const docPath = pathname.replace("/docs/", "");
		return `/docs/${docPath}.md`;
	};

	const copyMarkdownContent = async () => {
		try {
			const markdownUrl = getMarkdownUrl();
			const response = await fetch(markdownUrl);
			if (response.ok) {
				const markdownContent = await response.text();
				await navigator.clipboard.writeText(markdownContent);
			} else {
				await navigator.clipboard.writeText(currentUrl);
			}
		} catch {
			await navigator.clipboard.writeText(currentUrl);
		}

		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	};

	return (
		<div className="mb-2 flex flex-wrap items-center gap-2 border-b pb-6">
			<Button
				variant="secondary"
				size="sm"
				className="border-border gap-2 text-xs"
				onClick={copyMarkdownContent}
			>
				{copied ? (
					<CheckIcon className="text-muted-foreground size-3.5" />
				) : (
					<CopyIcon className="text-muted-foreground size-3.5" />
				)}
				Copy Markdown
			</Button>
			<Menu>
				<MenuTrigger
					render={(props) => (
						<button
							className={cn(
								buttonVariants({ variant: "secondary", size: "sm" }),
								"border-border gap-2 text-xs data-[popup-open]:[&_svg]:rotate-180",
							)}
							{...props}
						>
							Open
							<ChevronDownIcon className="text-muted-foreground size-3.5 transition-transform" />
						</button>
					)}
				/>
				<MenuPopup align="start" className="w-56">
					<MenuItem
						render={(props) => (
							<a href={getMarkdownUrl()} target="_blank" {...props}>
								<Icons.markdown className="size-4" />
								<span>View as Markdown</span>
							</a>
						)}
						nativeButton={false}
					/>
					<MenuItem
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
					<MenuItem
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
					<MenuItem
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
					<MenuItem
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
				</MenuPopup>
			</Menu>
			{links.map((link) => (
				<a
					key={link.href}
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					className={cn(
						buttonVariants({ variant: "secondary", size: "sm" }),
						"border-border gap-2 text-xs",
					)}
				>
					{link.label}
					<ArrowUpRightIcon className="text-muted-foreground size-3.5" />
				</a>
			))}
		</div>
	);
}
