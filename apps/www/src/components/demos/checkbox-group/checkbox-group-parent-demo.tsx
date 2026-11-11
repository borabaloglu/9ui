"use client";

import { useId, useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Label } from "@/components/ui/label";

const permissions = [
	{ value: "view-users", label: "View users" },
	{ value: "invite-users", label: "Invite users" },
	{ value: "remove-users", label: "Remove users" },
];

export default function CheckboxGroupParentDemo() {
	const id = useId();
	const [value, setValue] = useState<string[]>(["view-users"]);

	return (
		<CheckboxGroup
			aria-labelledby={id}
			value={value}
			onValueChange={setValue}
			allValues={permissions.map((permission) => permission.value)}
		>
			<Label id={id}>
				<Checkbox parent />
				User permissions
			</Label>
			{permissions.map((permission) => (
				<Label
					key={permission.value}
					className="ml-6 font-normal any-pointer-coarse:ml-7"
				>
					<Checkbox value={permission.value} />
					{permission.label}
				</Label>
			))}
		</CheckboxGroup>
	);
}
