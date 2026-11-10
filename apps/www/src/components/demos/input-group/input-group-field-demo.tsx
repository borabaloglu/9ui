import { MailIcon } from "lucide-react";

import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

export default function InputGroupFieldDemo() {
	return (
		<Field name="email" validationMode="onBlur" className="w-full max-w-sm">
			<FieldLabel>Email</FieldLabel>
			<InputGroup>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<MailIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput type="email" placeholder="you@example.com" required />
			</InputGroup>
			<FieldDescription>We only use it to send receipts.</FieldDescription>
			<FieldError match="valueMissing">Enter your email.</FieldError>
			<FieldError match="typeMismatch">Enter a valid email.</FieldError>
		</Field>
	);
}
