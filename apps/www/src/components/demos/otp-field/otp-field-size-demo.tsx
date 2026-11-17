import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";

const LENGTH = 6;
const sizes = ["sm", "default", "lg"] as const;

export default function OTPFieldSizeDemo() {
	return (
		<div className="flex flex-col gap-4">
			{sizes.map((size) => (
				<OTPField
					key={size}
					length={LENGTH}
					size={size}
					aria-label="Verification code"
				>
					{Array.from({ length: LENGTH }, (_, index) => (
						<OTPFieldInput
							key={index}
							aria-label={`Character ${index + 1} of ${LENGTH}`}
						/>
					))}
				</OTPField>
			))}
		</div>
	);
}
