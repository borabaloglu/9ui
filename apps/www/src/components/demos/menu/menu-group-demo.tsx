import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuGroupDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Open Menu</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuGroup>
					<MenuGroupLabel>File</MenuGroupLabel>
					<MenuItem>New</MenuItem>
					<MenuItem>Open</MenuItem>
					<MenuItem>Save</MenuItem>
				</MenuGroup>
				<MenuSeparator />
				<MenuGroup>
					<MenuGroupLabel>Edit</MenuGroupLabel>
					<MenuItem>Undo</MenuItem>
					<MenuItem>Redo</MenuItem>
					<MenuItem>Find</MenuItem>
				</MenuGroup>
			</MenuPopup>
		</Menu>
	);
}
