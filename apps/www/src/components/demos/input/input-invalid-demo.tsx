import { Input } from "@/components/ui/input";

export default function InputInvalidDemo() {
	return (
		<Input
			aria-label="Name"
			className="max-w-sm"
			placeholder="Name"
			aria-invalid
		/>
	);
}
