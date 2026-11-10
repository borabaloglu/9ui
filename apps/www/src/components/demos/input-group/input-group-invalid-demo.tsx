import { MailIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupInvalidDemo() {
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
				defaultValue="invalid-email"
				aria-invalid
			/>
		</InputGroup>
	);
}
