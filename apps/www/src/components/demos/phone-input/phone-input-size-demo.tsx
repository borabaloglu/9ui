import { PhoneInput } from "@/components/ui/phone-input";

const sizes = ["sm", "default", "lg"] as const;

export default function PhoneInputSizeDemo() {
	return (
		<div className="flex w-full max-w-xs flex-col gap-4">
			{sizes.map((size) => (
				<PhoneInput
					key={size}
					size={size}
					aria-label="Phone number"
					placeholder="Enter a phone number"
					defaultCountry="US"
				/>
			))}
		</div>
	);
}
