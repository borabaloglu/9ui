import {
	ArrowRightIcon,
	LayoutGridIcon,
	PlusIcon,
	UsersIcon,
} from "lucide-react"

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

export default function CommandDemo() {
	return (
		<Command>
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
		</Command>
	)
}
