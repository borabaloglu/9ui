"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Combobox,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxTrigger,
	ComboboxValue,
	createComboboxItems,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";

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
];

const roleItems = createComboboxItems(roles, {
	getValue: (role) => role.value,
	getLabel: (role) => role.label,
});

interface RoleComboboxProps {
	member: {
		id: string;
		name: string;
		email: string;
		role: string;
	};
}

function RoleCombobox({ member }: RoleComboboxProps) {
	return (
		<Combobox items={roleItems} defaultValue={member.role}>
			<ComboboxTrigger
				aria-label={`Role of ${member.name}`}
				render={<Button variant="outline" className="justify-between" />}
			>
				<ComboboxValue />
			</ComboboxTrigger>
			<ComboboxPopup className="w-80" align="end">
				<div className="p-1 pb-0">
					<ComboboxInput
						placeholder="Select role..."
						aria-label="Search roles"
						render={<Input className="rounded-md shadow-none" />}
					/>
				</div>
				<ComboboxEmpty>No roles found.</ComboboxEmpty>
				<ComboboxList>
					{(role: (typeof roles)[number]) => (
						<ComboboxItem
							className="flex-col items-start gap-0.5 font-medium"
							key={role.value}
							value={role.value}
						>
							{role.label}
							<p className="text-muted-foreground text-sm font-normal">
								{role.description}
							</p>
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxPopup>
		</Combobox>
	);
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
];

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
	);
}
