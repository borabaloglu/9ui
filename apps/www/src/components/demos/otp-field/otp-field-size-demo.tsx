import { useId } from "react";

import { Label } from "@/components/ui/label";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;
const sizes = [
	{ value: "sm", label: "Small" },
	{ value: "default", label: "Default" },
	{ value: "lg", label: "Large" },
] as const;

export default function OTPFieldSizeDemo() {
	const id = useId();

	return (
		<div className="flex flex-col gap-4">
			{sizes.map((size) => (
				<div key={size.value} className="flex flex-col gap-2">
					<Label htmlFor={`${id}-${size.value}`}>{size.label}</Label>
					<OTPField
						id={`${id}-${size.value}`}
						length={LENGTH}
						size={size.value}
					>
						{Array.from({ length: LENGTH }, (_, index) => (
							<OTPFieldInput
								key={index}
								aria-label={`Character ${index + 1} of ${LENGTH}`}
							/>
						))}
					</OTPField>
				</div>
			))}
		</div>
	);
}
