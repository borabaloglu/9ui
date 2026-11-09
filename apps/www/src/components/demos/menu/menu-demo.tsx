import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Open Menu</MenuTrigger>
			<MenuPopup>
				<MenuItem>New File</MenuItem>
				<MenuItem>Open File</MenuItem>
				<MenuItem>Save</MenuItem>
				<MenuSeparator />
				<MenuItem disabled>Print</MenuItem>
				<MenuItem>Exit</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
