"use client";

import { useState } from "react";
import { UserPlusIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";

const roles = [
	{ label: "Owner", value: "owner" },
	{ label: "Editor", value: "editor" },
	{ label: "Viewer", value: "viewer" },
];

const members = [
	{
		name: "Maya Chen",
		email: "maya@9ui.dev",
		image: "/avatars/p1.jpg",
		initials: "MC",
		role: "owner",
	},
	{
		name: "Emma Wright",
		email: "emma@9ui.dev",
		image: "/avatars/p2.jpg",
		initials: "EW",
		role: "editor",
	},
	{
		name: "Daniel Okafor",
		email: "daniel@9ui.dev",
		image: "/avatars/p3.jpg",
		initials: "DO",
		role: "viewer",
	},
];

function RoleSelect({
	label,
	size,
	className,
	defaultValue,
}: {
	label: string;
	size?: "sm";
	className?: string;
	defaultValue: string;
}) {
	return (
		<Select items={roles} defaultValue={defaultValue}>
			<SelectTrigger size={size} aria-label={label} className={className}>
				<SelectValue />
			</SelectTrigger>
			<SelectPopup>
				{roles.map(({ label, value }) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}

export function TeamMembersCard() {
	const toast = useToast();
	const [open, setOpen] = useState(false);

	const sendInvite = (event: React.FormEvent) => {
		event.preventDefault();
		setOpen(false);
		toast.add({ title: "Invite sent" });
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Team members</CardTitle>
				<CardDescription>Manage who has access.</CardDescription>
				<CardAction>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger render={<Button variant="outline" size="sm" />}>
							<UserPlusIcon />
							Invite
						</PopoverTrigger>
						<PopoverPopup align="end" className="w-72">
							<PopoverHeader>
								<PopoverTitle>Invite a member</PopoverTitle>
								<PopoverDescription>
									They will get an email with a link to join.
								</PopoverDescription>
							</PopoverHeader>
							<form onSubmit={sendInvite} className="flex flex-col gap-3">
								<Field name="email">
									<FieldLabel>Email</FieldLabel>
									<Input type="email" placeholder="name@company.com" required />
								</Field>
								<Field name="role">
									<FieldLabel>Role</FieldLabel>
									<RoleSelect
										label="Role"
										className="w-full"
										defaultValue="editor"
									/>
								</Field>
								<Button type="submit">Send invite</Button>
							</form>
						</PopoverPopup>
					</Popover>
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{members.map((member) => (
					<div key={member.email} className="flex items-center gap-3">
						<Avatar>
							<AvatarImage src={member.image} alt="" />
							<AvatarFallback>{member.initials}</AvatarFallback>
						</Avatar>
						<div className="min-w-0 flex-1">
							<p className="truncate font-medium">{member.name}</p>
							<p className="text-muted-foreground truncate">{member.email}</p>
						</div>
						<RoleSelect
							label={`Role of ${member.name}`}
							size="sm"
							defaultValue={member.role}
						/>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
