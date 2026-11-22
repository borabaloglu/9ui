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
	Command,
	CommandCollection,
	CommandDialog,
	CommandEmpty,
	CommandFooter,
	CommandGroup,
	CommandGroupLabel,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

import { navConfig } from "@/config/nav";

import type { SidebarNavGroup } from "@/types/nav";

interface SearchItem {
	value: string;
	label: string;
}

interface SearchGroup {
	value: string;
	items: SearchItem[];
}

interface SearchDialogProps {
	sidebarNav: SidebarNavGroup[];
	variant: "sidebar" | "icon";
}

export function SearchDialog({ sidebarNav, variant }: SearchDialogProps) {
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

	const groups = React.useMemo(() => {
		const groups: SearchGroup[] = [
			{
				value: "Pages",
				items: navConfig.mainNav.map((item) => ({
					value: item.href,
					label: item.title,
				})),
			},
		];

		sidebarNav.forEach((group) => {
			groups.push({
				value: group.title,
				items: group.items
					.filter((item) => !item.disabled)
					.map((item) => ({ value: item.href, label: item.title })),
			});
		});

		return groups.filter((group) => group.items.length > 0);
	}, [sidebarNav]);

	return (
		<>
			{variant === "sidebar" && (
				<Button
					variant="outline"
					className="text-muted-foreground w-full"
					onClick={() => setOpen(true)}
				>
					<SearchIcon />
					<span className="flex-1 text-start">Search</span>
					<KbdGroup>
						<Kbd>⌘</Kbd>
						<Kbd>K</Kbd>
					</KbdGroup>
				</Button>
			)}
			{variant === "icon" && (
				<Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
					<SearchIcon />
					<span className="sr-only">Search</span>
				</Button>
			)}
			<CommandDialog
				open={open}
				onOpenChange={setOpen}
				title="Search documentation"
				description="Search for a page or a component..."
			>
				<Command items={groups}>
					<div className="flex items-center gap-2 px-3">
						<SearchIcon className="text-muted-foreground size-4 shrink-0" />
						<CommandInput
							placeholder="Search documentation..."
							aria-label="Search documentation"
							className="placeholder:text-muted-foreground h-10 min-w-0 flex-1 bg-transparent text-sm outline-none any-pointer-coarse:text-base"
						/>
					</div>
					<div className="bg-background/50 flex min-h-0 flex-col rounded-t-lg border-t">
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandList>
							{(group: SearchGroup) => (
								<CommandGroup key={group.value} items={group.items}>
									<CommandGroupLabel>{group.value}</CommandGroupLabel>
									<CommandCollection>
										{(item: SearchItem) => (
											<CommandItem
												key={item.value}
												value={item}
												onClick={() => {
													runCommand(() => router.push(item.value));
												}}
											>
												{group.value === "Components" ? (
													<ComponentIcon />
												) : (
													<ArrowRightIcon />
												)}
												{item.label}
											</CommandItem>
										)}
									</CommandCollection>
								</CommandGroup>
							)}
						</CommandList>
					</div>
					<CommandFooter>
						<Kbd>
							<CornerDownLeftIcon />
						</Kbd>
						Go to page
					</CommandFooter>
				</Command>
			</CommandDialog>
		</>
	);
}
