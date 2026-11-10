"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
	ArrowRightIcon,
	ComponentIcon,
	CornerDownLeftIcon,
	SearchIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

import { navConfig } from "@/config/nav";

import type { SidebarNavGroup } from "@/types/nav";

interface SearchDialogProps {
	sidebarNav: SidebarNavGroup[];
	variant?: "header" | "sidebar" | "icon";
}

export function SearchDialog({
	sidebarNav,
	variant = "header",
}: SearchDialogProps) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		if (variant === "icon") {
			return;
		}

		const down = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [variant]);

	const runCommand = React.useCallback((command: () => void) => {
		setOpen(false);
		command();
	}, []);

	const allNavItems = React.useMemo(() => {
		const items: Array<{ title: string; href: string; group: string }> = [];

		navConfig.mainNav.forEach((item) => {
			items.push({
				title: item.title,
				href: item.href,
				group: "Pages",
			});
		});

		sidebarNav.forEach((group) => {
			group.items.forEach((item) => {
				if (!item.disabled) {
					items.push({
						title: item.title,
						href: item.href,
						group: group.title,
					});
				}
			});
		});

		return items;
	}, [sidebarNav]);

	return (
		<>
			{variant === "sidebar" ? (
				<button
					type="button"
					className="bg-background/60 text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground focus-visible:ring-ring/50 flex h-9 w-full cursor-pointer items-center gap-2 rounded-lg border px-2.5 text-sm transition-colors outline-none focus-visible:ring-3"
					onClick={() => setOpen(true)}
				>
					<SearchIcon className="size-4 shrink-0" />
					<span className="flex-1 text-start">Search</span>
					<span className="pointer-events-none flex gap-x-1">
						<Kbd className="text-[10px]">⌘</Kbd>
						<Kbd className="text-[10px]">K</Kbd>
					</span>
				</button>
			) : variant === "icon" ? (
				<Button variant="ghost" size="icon-sm" onClick={() => setOpen(true)}>
					<SearchIcon className="size-4" />
					<span className="sr-only">Search</span>
				</Button>
			) : (
				<Button
					variant="outline"
					className="bg-accent/50 text-accent-foreground hover:bg-accent dark:hover:bg-accent relative w-full justify-start overflow-hidden border-0 pr-12 text-xs font-normal shadow-xs md:w-40 lg:w-64"
					size="sm"
					onClick={() => setOpen(true)}
				>
					<span className="hidden max-w-[calc(100%-32px)] overflow-hidden lg:inline-flex">
						Search documentation...
					</span>
					<span className="inline-flex lg:hidden">Search...</span>
					<div className="pointer-events-none absolute right-3 flex gap-x-1">
						<Kbd className="border-0 text-[10px]">⌘</Kbd>
						<Kbd className="border-0 text-[10px]">K</Kbd>
					</div>
				</Button>
			)}
			<CommandDialog
				open={open}
				onOpenChange={setOpen}
				className="border-2 shadow-lg"
			>
				<div className="[&_[data-slot=command-input-wrapper]]:bg-accent flex h-96 flex-col [&_[data-slot=command-input-wrapper]]:absolute [&_[data-slot=command-input-wrapper]]:top-2.5 [&_[data-slot=command-input-wrapper]]:left-[10px] [&_[data-slot=command-input-wrapper]]:z-10 [&_[data-slot=command-input-wrapper]]:mx-auto [&_[data-slot=command-input-wrapper]]:w-[calc(100%-20px)] [&_[data-slot=command-input-wrapper]]:rounded-md [&_[data-slot=command-input-wrapper]]:border-0">
					<CommandInput placeholder="Search documentation..." />
					<CommandList className="mt-12.5 max-h-none flex-1 border-0 px-1.5 py-0 [&_[cmdk-group-heading]]:!pt-1">
						<CommandEmpty className="text-muted-foreground py-8 text-center text-sm">
							No results found.
						</CommandEmpty>
						{Object.entries(
							allNavItems.reduce(
								(acc, item) => {
									if (!acc[item.group]) {
										acc[item.group] = [];
									}
									acc[item.group].push(item);
									return acc;
								},
								{} as Record<string, typeof allNavItems>,
							),
						).map(([group, items]) => (
							<CommandGroup key={group} heading={group}>
								{items.map((item) => (
									<CommandItem
										className="rounded-md px-3 py-2"
										key={item.href}
										value={item.title}
										onSelect={() => {
											runCommand(() => router.push(item.href));
										}}
									>
										{group === "Components" ? (
											<ComponentIcon className="h-4 w-4" />
										) : (
											<ArrowRightIcon className="h-4 w-4" />
										)}
										{item.title}
									</CommandItem>
								))}
							</CommandGroup>
						))}
					</CommandList>
					<div className="border-t-background bg-border text-foreground/60 border-t-2 px-2.5 py-2 text-xs">
						<div className="flex items-center gap-1">
							<Kbd className="w-6 border-0 text-[10px]">
								<CornerDownLeftIcon className="h-3 w-3" />
							</Kbd>
							<span>Go to page</span>
						</div>
					</div>
				</div>
			</CommandDialog>
		</>
	);
}
