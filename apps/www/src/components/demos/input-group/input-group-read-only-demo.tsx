import { LinkIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupReadOnlyDemo() {
	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupAddon align="inline-start">
				<InputGroupText>
					<LinkIcon />
				</InputGroupText>
			</InputGroupAddon>
			<InputGroupInput
				aria-label="Invite link"
				defaultValue="https://9ui.dev/invite/acme"
				readOnly
			/>
		</InputGroup>
	);
}
