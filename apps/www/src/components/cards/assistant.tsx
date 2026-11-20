"use client";

import {
	ArrowUpIcon,
	GlobeIcon,
	ImageIcon,
	MessageCircleDashedIcon,
	PaperclipIcon,
	PlusIcon,
	TelescopeIcon,
} from "lucide-react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupTextarea,
} from "@/components/ui/input-group";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export function AssistantCard() {
	return (
		<Card>
			<CardHeader className="border-b">
				<CardTitle>New chat</CardTitle>
				<CardDescription>How can I help you today?</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-6">
				<div className="flex flex-col items-center gap-3 py-20 text-center">
					<div className="bg-muted flex size-10 items-center justify-center rounded-xl">
						<MessageCircleDashedIcon className="size-5" />
					</div>
					<div className="flex flex-col gap-1">
						<p className="text-base font-medium">Morning, Bora!</p>
						<p className="text-muted-foreground text-balance">
							What are we working on today? Press send to start a new
							conversation.
						</p>
					</div>
				</div>
				<InputGroup>
					<InputGroupTextarea
						aria-label="Message"
						className="min-h-14"
						placeholder="Ask anything..."
						defaultValue="Draft release notes for version 2.0 from the merged pull requests."
					/>
					<InputGroupAddon align="block-end">
						<Menu>
							<MenuTrigger
								render={
									<InputGroupButton
										variant="outline"
										size="icon-xs"
										aria-label="Add"
										className="rounded-full"
									/>
								}
							>
								<PlusIcon />
							</MenuTrigger>
							<MenuPopup align="start" side="top" className="w-48">
								<MenuItem>
									<PaperclipIcon />
									Add photos and files
								</MenuItem>
								<MenuSeparator />
								<MenuItem>
									<ImageIcon />
									Create image
								</MenuItem>
								<MenuItem>
									<TelescopeIcon />
									Deep research
								</MenuItem>
								<MenuItem>
									<GlobeIcon />
									Web search
								</MenuItem>
							</MenuPopup>
						</Menu>
						<InputGroupButton
							variant="default"
							size="icon-xs"
							aria-label="Send message"
							className="ms-auto rounded-full"
						>
							<ArrowUpIcon />
						</InputGroupButton>
					</InputGroupAddon>
				</InputGroup>
			</CardContent>
		</Card>
	);
}
