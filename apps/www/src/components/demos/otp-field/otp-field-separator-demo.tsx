import { useId } from "react";

import { Label } from "@/components/ui/label";
import {
	OTPField,
	OTPFieldInput,
	OTPFieldSeparator,
} from "@/components/ui/otp-field";

const LENGTH = 6;

export default function OTPFieldSeparatorDemo() {
	const id = useId();

	return (
		<div className="flex flex-col gap-2">
			<Label htmlFor={id}>Verification code</Label>
			<OTPField id={id} length={LENGTH}>
				{Array.from({ length: 3 }, (_, index) => (
					<OTPFieldInput
						key={index}
						aria-label={`Character ${index + 1} of ${LENGTH}`}
					/>
				))}
				<OTPFieldSeparator />
				{Array.from({ length: 3 }, (_, index) => (
					<OTPFieldInput
						key={index + 3}
						aria-label={`Character ${index + 4} of ${LENGTH}`}
					/>
				))}
			</OTPField>
		</div>
	);
}
