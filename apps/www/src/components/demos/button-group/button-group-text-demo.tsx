import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export default function ButtonGroupTextDemo() {
	return (
		<ButtonGroup className="w-full max-w-sm">
			<ButtonGroupText>https://</ButtonGroupText>
			<Input aria-label="Website" placeholder="example.com" />
		</ButtonGroup>
	);
}
