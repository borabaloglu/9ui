import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;

export default function OTPFieldInvalidDemo() {
	return (
		<Field name="code" invalid className="w-fit">
			<FieldLabel>Verification code</FieldLabel>
			<OTPField length={LENGTH} defaultValue="482913">
				{Array.from({ length: LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={`Character ${index + 1} of ${LENGTH}`}
					/>
				))}
			</OTPField>
			<FieldError match>That code is incorrect.</FieldError>
		</Field>
	);
}
