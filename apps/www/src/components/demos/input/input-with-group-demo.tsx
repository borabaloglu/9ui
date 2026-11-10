import { MailIcon, SendIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputWithGroupDemo() {
	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupAddon align="inline-start">
				<InputGroupText>
					<MailIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput
				aria-label="Email address"
				placeholder="Email address"
				type="email"
			/>
			<InputGroupAddon align="inline-end">
				<InputGroupButton variant="secondary">
					<SendIcon />
					Send
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
