import { PhoneInput } from "@/components/ui/phone-input";

export default function PhoneInputDisabledDemo() {
	return (
		<PhoneInput
			aria-label="Phone number"
			className="max-w-xs"
			placeholder="Enter a phone number"
			defaultCountry="TR"
			disabled
		/>
	);
}
