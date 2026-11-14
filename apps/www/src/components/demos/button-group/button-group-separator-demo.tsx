import { Button } from "@/components/ui/button";
import {
	ButtonGroup,
	ButtonGroupSeparator,
} from "@/components/ui/button-group";

export default function ButtonGroupSeparatorDemo() {
	return (
		<ButtonGroup>
			<Button variant="secondary">Copy</Button>
			<ButtonGroupSeparator />
			<Button variant="secondary">Paste</Button>
		</ButtonGroup>
	);
}
