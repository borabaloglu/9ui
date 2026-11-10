import {
	BookmarkIcon,
	ExternalLinkIcon,
	GlobeIcon,
	MailIcon,
	TagIcon,
	UserIcon,
} from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupIconDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<UserIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label="Username" placeholder="Username" />
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
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<GlobeIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput aria-label="URL" placeholder="Enter URL" />
				<InputGroupAddon align="inline-end">
					<InputGroupText>
						<ExternalLinkIcon />
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupInput aria-label="Item" placeholder="Organize item..." />
				<InputGroupAddon align="inline-end">
					<InputGroupText>
						<BookmarkIcon />
					</InputGroupText>
					<InputGroupText>
						<TagIcon />
					</InputGroupText>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
