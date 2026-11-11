import { useId } from "react";

import { Label } from "@/components/ui/label";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;

export default function OTPFieldLgDemo() {
	const id = useId();

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor={id}>Verification code</Label>
			<OTPField id={id} length={LENGTH} size="lg">
				{Array.from({ length: LENGTH }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={`Character ${index + 1} of ${LENGTH}`}
					/>
				))}
			</OTPField>
		</div>
	);
}
