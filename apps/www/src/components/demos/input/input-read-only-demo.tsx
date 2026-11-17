import { Input } from "@/components/ui/input";

export default function InputReadOnlyDemo() {
	return (
		<Input
			aria-label="Workspace URL"
			className="max-w-sm"
			defaultValue="9ui.dev/acme"
			readOnly
		/>
	);
}
