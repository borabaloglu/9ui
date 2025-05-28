"use client"

import * as React from "react"
import { ChevronsUpDownIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"

const roles = [
	{
		value: "owner",
		label: "Owner",
		description: "Has full access to the team and can manage members",
	},
	{
		value: "developer",
		label: "Developer",
		description: "Has access to the codebase and can make changes",
	},
	{
		value: "billing",
		label: "Billing",
		description: "Has access to the billing information",
	},
	{
		value: "viewer",
		label: "Viewer",
		description: "Has limited access to the team and can only view the team",
	},
]

interface RoleComboboxProps {
	member: {
		id: string
		name: string
		email: string
		role: string
	}
}

function RoleCombobox({ member }: RoleComboboxProps) {
	const [open, setOpen] = React.useState(false)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={(props) => (
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						className="justify-between"
						{...props}
					>
						{roles.find((role) => role.value === member.role)?.label}
						<ChevronsUpDownIcon className="ml-2 size-4 shrink-0 opacity-50" />
					</Button>
				)}
			/>
			<PopoverContent className="p-0" align="end" sideOffset={4} arrow={false}>
				<Command className="w-[400px] border-none">
					<CommandInput placeholder="Search role..." />
					<CommandList>
						<CommandEmpty>No role found.</CommandEmpty>
						<CommandGroup>
							{roles.map((role) => (
								<CommandItem
									className="flex flex-col items-start gap-1 font-medium"
									key={role.value}
									value={role.value}
								>
									{role.label}
									<p className="text-sm font-normal text-muted-foreground">
										{role.description}
									</p>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

const members = [
	{
		id: "1",
		name: "Micheal Smith",
		email: "micheal@example.com",
		role: "owner",
		image: "/avatars/avatar-m1.png",
	},
	{
		id: "2",
		name: "Emma Adams",
		email: "emma@example.com",
		role: "developer",
		image: "/avatars/avatar-w2.png",
	},
	{
		id: "3",
		name: "Sam Johnson",
		email: "sam@example.com",
		role: "billing",
		image: "/avatars/avatar-m2.png",
	},
	{
		id: "4",
		name: "Brendan Eich",
		email: "brendan@example.com",
		role: "viewer",
		image: "/avatars/avatar-m3.png",
	},
]

export function ManageMembersCard() {
	return (
		<Card className="h-full">
			<CardHeader>
				<CardTitle>Member Roles</CardTitle>
				<CardDescription>
					Manage your team members&apos; roles and permissions
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				{members.map((member) => (
					<div
						key={member.id}
						className="flex items-center justify-between gap-4"
					>
						<div className="flex items-center gap-4">
							<Avatar>
								<AvatarImage src={member.image} />
								<AvatarFallback>
									{member.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div>
								<p className="font-medium">{member.name}</p>
								<p className="max-w-[100px] truncate text-sm text-muted-foreground sm:max-w-full">
									{member.email}
								</p>
							</div>
						</div>
						<RoleCombobox member={member} />
					</div>
				))}
			</CardContent>
		</Card>
	)
}
