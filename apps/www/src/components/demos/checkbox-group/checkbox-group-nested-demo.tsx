"use client";

import { useId, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Label } from "@/components/ui/label";

const workspacePermissions = [
	{ value: "view-dashboard", label: "View dashboard" },
	{ value: "access-reports", label: "Access reports" },
];

const userPermissions = [
	{ value: "invite-users", label: "Invite users" },
	{ value: "edit-users", label: "Edit users" },
	{ value: "remove-users", label: "Remove users" },
];

const workspaceValues = [
	...workspacePermissions.map((permission) => permission.value),
	"manage-users",
];
const userValues = userPermissions.map((permission) => permission.value);

export default function CheckboxGroupNestedDemo() {
	const workspaceId = useId();
	const usersId = useId();
	const [workspaceValue, setWorkspaceValue] = useState<string[]>([]);
	const [usersValue, setUsersValue] = useState<string[]>([]);

	return (
		<CheckboxGroup
			aria-labelledby={workspaceId}
			value={workspaceValue}
			onValueChange={(value) => {
				if (value.includes("manage-users")) {
					setUsersValue(userValues);
				} else if (usersValue.length === userValues.length) {
					setUsersValue([]);
				}
				setWorkspaceValue(value);
			}}
			allValues={workspaceValues}
		>
			<Label id={workspaceId}>
				<Checkbox
					parent
					indeterminate={
						usersValue.length > 0 && usersValue.length !== userValues.length
					}
				/>
				Workspace permissions
			</Label>
			{workspacePermissions.map((permission) => (
				<Label
					key={permission.value}
					className="ml-6 font-normal any-pointer-coarse:ml-7"
				>
					<Checkbox value={permission.value} />
					{permission.label}
				</Label>
			))}
			<CheckboxGroup
				aria-labelledby={usersId}
				value={usersValue}
				onValueChange={(value) => {
					if (value.length === userValues.length) {
						setWorkspaceValue((prev) =>
							Array.from(new Set([...prev, "manage-users"])),
						);
					} else {
						setWorkspaceValue((prev) =>
							prev.filter((item) => item !== "manage-users"),
						);
					}
					setUsersValue(value);
				}}
				allValues={userValues}
				className="ml-6 any-pointer-coarse:ml-7"
			>
				<Label id={usersId} className="font-normal">
					<Checkbox parent />
					Manage users
				</Label>
				{userPermissions.map((permission) => (
					<Label
						key={permission.value}
						className="ml-6 font-normal any-pointer-coarse:ml-7"
					>
						<Checkbox value={permission.value} />
						{permission.label}
					</Label>
				))}
			</CheckboxGroup>
		</CheckboxGroup>
	);
}
