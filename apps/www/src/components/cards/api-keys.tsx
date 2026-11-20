"use client";

import { useState } from "react";
import { CopyIcon, EyeIcon, EyeOffIcon, RefreshCwIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

import { useToast } from "@/hooks/use-toast";

const keys = [
	{ name: "Production", value: "9ui_live_4f8a2c91d7e3b605", live: true },
	{ name: "Development", value: "9ui_test_b72e19c0a45d8f36", live: false },
];

export function ApiKeysCard() {
	const toast = useToast();
	const [visible, setVisible] = useState<string[]>([]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>API keys</CardTitle>
				<CardDescription>Keep these secret.</CardDescription>
				<CardAction>
					<Button variant="outline" size="sm">
						<RefreshCwIcon />
						Rotate keys
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{keys.map((key) => {
					const shown = visible.includes(key.name);

					return (
						<div key={key.name} className="flex flex-col gap-2">
							<div className="flex items-center justify-between">
								<span className="font-medium">{key.name}</span>
								<Badge variant={key.live ? "success" : "secondary"}>
									{key.live ? "Live" : "Test"}
								</Badge>
							</div>
							<InputGroup>
								<InputGroupInput
									aria-label={`${key.name} key`}
									readOnly
									type={shown ? "text" : "password"}
									value={key.value}
									className="font-mono text-xs"
								/>
								<InputGroupAddon align="inline-end">
									<Tooltip>
										<TooltipTrigger
											render={
												<InputGroupButton
													size="icon-xs"
													aria-label={shown ? "Hide key" : "Show key"}
													onClick={() =>
														setVisible(
															shown
																? visible.filter((name) => name !== key.name)
																: [...visible, key.name],
														)
													}
												/>
											}
										>
											{shown ? <EyeOffIcon /> : <EyeIcon />}
										</TooltipTrigger>
										<TooltipPopup>{shown ? "Hide" : "Show"}</TooltipPopup>
									</Tooltip>
									<Tooltip>
										<TooltipTrigger
											render={
												<InputGroupButton
													size="icon-xs"
													aria-label="Copy key"
													onClick={() => toast.add({ title: "Key copied" })}
												/>
											}
										>
											<CopyIcon />
										</TooltipTrigger>
										<TooltipPopup>Copy</TooltipPopup>
									</Tooltip>
								</InputGroupAddon>
							</InputGroup>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
}
