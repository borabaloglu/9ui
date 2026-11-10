"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { SaveIcon, SearchIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export default function InputGroupDynamicAddonsDemo() {
	const [searchQuery, setSearchQuery] = useState("");
	const [name, setName] = useState("John Doe");
	const [isSearching, setIsSearching] = useState(false);
	const searchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const [isSaving, setIsSaving] = useState(false);

	useEffect(() => {
		if (searchTimerRef.current) {
			clearTimeout(searchTimerRef.current);
		}

		if (searchQuery.length > 0) {
			setIsSearching(true);
			searchTimerRef.current = setTimeout(() => {
				setIsSearching(false);
			}, 1000);
		} else {
			setIsSearching(false);
		}

		return () => {
			if (searchTimerRef.current) {
				clearTimeout(searchTimerRef.current);
			}
		};
	}, [searchQuery]);

	const handleSave = () => {
		setIsSaving(true);
		setTimeout(() => {
			setIsSaving(false);
		}, 2000);
	};

	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<SearchIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput
					aria-label="Search"
					placeholder="Search..."
					value={searchQuery}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setSearchQuery(e.target.value)
					}
				/>
				{isSearching && (
					<InputGroupAddon align="inline-end">
						<Spinner />
					</InputGroupAddon>
				)}
			</InputGroup>
			<InputGroup>
				{isSaving && (
					<InputGroupAddon align="inline-start">
						<Spinner />
					</InputGroupAddon>
				)}
				<InputGroupInput
					aria-label="Name"
					placeholder="Enter your name"
					value={name}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
					disabled={isSaving}
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						size="icon-xs"
						aria-label="Save"
						onClick={handleSave}
						disabled={isSaving || name.length === 0}
					>
						<SaveIcon />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
