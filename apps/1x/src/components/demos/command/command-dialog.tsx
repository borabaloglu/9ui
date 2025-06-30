"use client"

import { useEffect, useState } from "react"
import {
	ArrowRightIcon,
	LayoutGridIcon,
	PlusIcon,
	UsersIcon,
} from "lucide-react"

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

export default function CommandDialogDemo() {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen((open) => !open)
			}
		}
		document.addEventListener("keydown", down)
		return () => document.removeEventListener("keydown", down)
	}, [])

	return (
		<>
			<div className="flex items-center gap-2 text-sm">
				<Kbd>⌘</Kbd>+<Kbd>K</Kbd>
			</div>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Projects">
						<CommandItem>
							<LayoutGridIcon />
							<span>Search projects...</span>
							<CommandShortcut>
								<Kbd>⌘</Kbd>
								<Kbd>P</Kbd>
							</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<PlusIcon />
							<span>Create new projecte...</span>
							<CommandShortcut>
								<Kbd>C</Kbd>
							</CommandShortcut>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading="Teams">
						<CommandItem>
							<UsersIcon />
							<span>Search teams...</span>
						</CommandItem>
						<CommandItem>
							<PlusIcon />
							<span>Create new team...</span>
							<CommandShortcut>
								<Kbd>T</Kbd>
							</CommandShortcut>
						</CommandItem>
					</CommandGroup>
					<CommandGroup heading="Navigation">
						<CommandItem>
							<ArrowRightIcon />
							<span>Go to home</span>
						</CommandItem>
						<CommandItem>
							<ArrowRightIcon />
							<span>Go to profile</span>
						</CommandItem>
						<CommandItem>
							<ArrowRightIcon />
							<span>Go to settings</span>
						</CommandItem>
						<CommandItem>
							<ArrowRightIcon />
							<span>Go to billing</span>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	)
}
