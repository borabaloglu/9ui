import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuShortcut,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuShortcutDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Open Menu</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuItem>
					Undo
					<MenuShortcut>⌘Z</MenuShortcut>
				</MenuItem>
				<MenuItem>
					Redo
					<MenuShortcut>⇧⌘Z</MenuShortcut>
				</MenuItem>
				<MenuSeparator />
				<MenuItem>
					Cut
					<MenuShortcut>⌘X</MenuShortcut>
				</MenuItem>
				<MenuItem>
					Copy
					<MenuShortcut>⌘C</MenuShortcut>
				</MenuItem>
				<MenuItem>
					Paste
					<MenuShortcut>⌘V</MenuShortcut>
				</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
