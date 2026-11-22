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
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Menu, MenuItem, MenuPopup, MenuTrigger } from "@/components/ui/menu";

import { siteConfig } from "@/config/site";

import type { ComponentLink } from "@/lib/component-links";

const getOpenInUrl = (targetUrl: string, currentUrl: string) => {
	const markdownUrl = `${currentUrl}.md`;

	const prompt = `I'm looking at this 9ui documentation: ${markdownUrl}

Help me understand how to use it. Be ready to explain concepts, give examples or help debug based on it.`;

	return `${targetUrl}?q=${encodeURIComponent(prompt)}`;
};

interface PageActionsProps {
	links: ComponentLink[];
}

export function PageActions({ links }: PageActionsProps) {
	const pathname = usePathname();
	const currentUrl = `${siteConfig.url}${pathname}`;
	const [copied, setCopied] = React.useState(false);

	const getMarkdownUrl = () => {
		const docPath = pathname.replace("/docs/", "");
		return `/docs/${docPath}.md`;
	};

	const copyMarkdownContent = async () => {
		try {
			const response = await fetch(getMarkdownUrl());

			if (!response.ok) {
				return;
			}

			await navigator.clipboard.writeText(await response.text());
		} catch {
			return;
		}

		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	};

	return (
		<div className="mb-2 flex flex-wrap items-center gap-2 border-b pb-6">
			<ButtonGroup>
				<Button variant="outline" size="sm" onClick={copyMarkdownContent}>
					{copied ? (
						<CheckIcon className="text-muted-foreground" />
					) : (
						<CopyIcon className="text-muted-foreground" />
					)}
					Copy Markdown
				</Button>
				<Menu>
					<MenuTrigger
						render={
							<Button
								variant="outline"
								size="icon-sm"
								aria-label="Open this page elsewhere"
							/>
						}
					>
						<ChevronDownIcon className="text-muted-foreground" />
					</MenuTrigger>
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
			</ButtonGroup>
			{links.map((link) => (
				<Button
					key={link.href}
					variant="outline"
					size="sm"
					nativeButton={false}
					render={
						<a href={link.href} target="_blank" rel="noopener noreferrer">
							{link.label}
							<ArrowUpRightIcon className="text-muted-foreground" />
						</a>
					}
				/>
			))}
		</div>
	);
}
