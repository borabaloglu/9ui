import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;

export default function OTPFieldFieldDemo() {
	return (
		<Field name="code" className="w-fit">
			<FieldLabel>Verification code</FieldLabel>
			<OTPField length={LENGTH}>
				{Array.from({ length: LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={`Character ${index + 1} of ${LENGTH}`}
					/>
				))}
			</OTPField>
			<FieldDescription>
				Enter the 6-digit code sent to your device.
			</FieldDescription>
		</Field>
	);
}
