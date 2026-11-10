"use client";

import { MailIcon, SearchIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";

export default function InputGroupAlignDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<SearchIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label="Search" placeholder="Search..." />
			</InputGroup>
			<InputGroup>
				<InputGroupInput
					aria-label="Email address"
					placeholder="Email address"
					type="email"
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupText>
						<MailIcon />
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupAddon align="block-start">
					<InputGroupText>Full Name</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label="Full name" placeholder="Enter your name" />
			</InputGroup>
			<InputGroup>
				<InputGroupTextarea
					aria-label="Message"
					placeholder="Write something..."
				/>
				<InputGroupAddon align="block-end">
					<InputGroupText className="text-xs">
						100 characters left
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
