"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxTrigger,
	ComboboxValue,
} from "@/components/ui/combobox"

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
		<Combobox
			items={roles}
			value={member.role}
			onOpenChange={setOpen}
			open={open}
		>
			<div className="relative flex flex-col gap-2">
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="justify-between"
					render={
						<ComboboxTrigger id="select-country">
							<ComboboxValue />
						</ComboboxTrigger>
					}
				/>
			</div>
			<ComboboxContent
				className="max-h-[20rem] w-80 [--input-container-height:4rem]"
				align="end"
			>
				<ComboboxInput
					className="focus-visible:ring-0"
					inputContainerClassName="mb-2"
					placeholder="Select role..."
					showClear={false}
				/>
				<ComboboxEmpty>No roles found.</ComboboxEmpty>
				<ComboboxList className="max-h-[min(calc(20rem-var(--input-container-height)),calc(var(--available-height)-var(--input-container-height)))] scroll-py-2 overflow-y-auto overscroll-contain">
					{(role: (typeof roles)[number]) => (
						<ComboboxItem
							className="flex flex-col items-start gap-1 font-medium [&>span]:top-2.5"
							key={role.value}
							value={role.value}
						>
							{role.label ?? role.value}
							<p className="text-muted-foreground text-sm font-normal">
								{role.description}
							</p>
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	)
}

const members = [
	{
		id: "1",
		name: "Micheal Smith",
		email: "micheal@example.com",
		role: "owner",
	},
	{
		id: "2",
		name: "Emma Adams",
		email: "emma@example.com",
		role: "developer",
	},
	{
		id: "3",
		name: "Sam Johnson",
		email: "sam@example.com",
		role: "billing",
	},
	{
		id: "4",
		name: "Brendan Eich",
		email: "brendan@example.com",
		role: "viewer",
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
								<AvatarFallback>
									{member.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div className="text-sm">
								<p className="font-medium">{member.name}</p>
								<p className="text-muted-foreground max-w-[100px] truncate sm:max-w-full">
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
