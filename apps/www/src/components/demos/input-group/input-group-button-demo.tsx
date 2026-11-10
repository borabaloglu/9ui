"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon, InfoIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

export default function InputGroupButtonDemo() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupInput
					aria-label="Password"
					placeholder="Password"
					type={showPassword ? "text" : "password"}
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						size="icon-xs"
						aria-label={showPassword ? "Hide password" : "Show password"}
						onClick={() => setShowPassword((prev) => !prev)}
					>
						{showPassword ? <EyeOffIcon /> : <EyeIcon />}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<Tooltip>
						<TooltipTrigger
							render={
								<InputGroupButton size="icon-xs" aria-label="About email" />
							}
						>
							<InfoIcon />
						</TooltipTrigger>
						<TooltipPopup>We&apos;ll never share your email.</TooltipPopup>
					</Tooltip>
				</InputGroupAddon>
				<InputGroupInput
					aria-label="Email address"
					placeholder="Email address"
					type="email"
				/>
			</InputGroup>
			<InputGroup>
				<InputGroupInput
					aria-label="Email address"
					placeholder="Email address"
					type="email"
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton variant="secondary">Subscribe</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
