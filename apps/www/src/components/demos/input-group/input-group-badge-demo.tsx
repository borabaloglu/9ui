"use client";

import type React from "react";
import { useState } from "react";
import { GitBranchIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupBadgeDemo() {
	const [repoName, setRepoName] = useState("");

	const isValid = repoName.length > 0 && /^[a-z0-9-]+$/.test(repoName);
	const showBadge = repoName.length > 0;

	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupAddon align="inline-start">
				<InputGroupText>
					<GitBranchIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput
				aria-label="Repository name"
				placeholder="repository-name"
				value={repoName}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setRepoName(e.target.value.toLowerCase())
				}
			/>
			{showBadge && (
				<InputGroupAddon align="inline-end">
					<Badge variant={isValid ? "success" : "danger"} size="sm">
						{isValid ? "Available" : "Invalid"}
					</Badge>
				</InputGroupAddon>
			)}
		</InputGroup>
	);
}
