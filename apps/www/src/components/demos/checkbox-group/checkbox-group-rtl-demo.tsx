"use client";

import { useId, useState } from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxGroup } from "@/components/ui/checkbox-group";
import { Label } from "@/components/ui/label";

const translations = {
	en: {
		workspace: "Workspace permissions",
		viewDashboard: "View dashboard",
		manageUsers: "Manage users",
		inviteUsers: "Invite users",
		removeUsers: "Remove users",
	},
	ar: {
		workspace: "صلاحيات مساحة العمل",
		viewDashboard: "عرض لوحة التحكم",
		manageUsers: "إدارة المستخدمين",
		inviteUsers: "دعوة المستخدمين",
		removeUsers: "إزالة المستخدمين",
	},
	he: {
		workspace: "הרשאות סביבת עבודה",
		viewDashboard: "צפייה בלוח הבקרה",
		manageUsers: "ניהול משתמשים",
		inviteUsers: "הזמנת משתמשים",
		removeUsers: "הסרת משתמשים",
	},
} satisfies Translations<Record<string, string>>;

const userPermissions = ["inviteUsers", "removeUsers"] as const;
const workspaceValues = ["viewDashboard", "manageUsers"];
const userValues: string[] = [...userPermissions];

export default function CheckboxGroupRtlDemo() {
	const { t } = useTranslation(translations);
	const workspaceId = useId();
	const usersId = useId();
	const [workspaceValue, setWorkspaceValue] = useState<string[]>([]);
	const [usersValue, setUsersValue] = useState<string[]>([]);

	return (
		<CheckboxGroup
			aria-labelledby={workspaceId}
			value={workspaceValue}
			onValueChange={(value) => {
				if (value.includes("manageUsers")) {
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
				{t.workspace}
			</Label>
			<Label className="ms-6 font-normal any-pointer-coarse:ms-7">
				<Checkbox value="viewDashboard" />
				{t.viewDashboard}
			</Label>
			<CheckboxGroup
				aria-labelledby={usersId}
				value={usersValue}
				onValueChange={(value) => {
					if (value.length === userValues.length) {
						setWorkspaceValue((prev) =>
							Array.from(new Set([...prev, "manageUsers"])),
						);
					} else {
						setWorkspaceValue((prev) =>
							prev.filter((item) => item !== "manageUsers"),
						);
					}
					setUsersValue(value);
				}}
				allValues={userValues}
				className="ms-6 any-pointer-coarse:ms-7"
			>
				<Label id={usersId} className="font-normal">
					<Checkbox parent />
					{t.manageUsers}
				</Label>
				{userPermissions.map((permission) => (
					<Label
						key={permission}
						className="ms-6 font-normal any-pointer-coarse:ms-7"
					>
						<Checkbox value={permission} />
						{t[permission]}
					</Label>
				))}
			</CheckboxGroup>
		</CheckboxGroup>
	);
}
