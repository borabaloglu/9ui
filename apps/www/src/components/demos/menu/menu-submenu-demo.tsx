import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuSubmenuDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Open Menu</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuItem>New File</MenuItem>
				<MenuItem>Open File</MenuItem>
				<MenuSeparator />
				<MenuSub>
					<MenuSubTrigger>Share</MenuSubTrigger>
					<MenuSubPopup>
						<MenuItem>Email</MenuItem>
						<MenuItem>Message</MenuItem>
						<MenuSub>
							<MenuSubTrigger>Social Media</MenuSubTrigger>
							<MenuSubPopup>
								<MenuItem>Twitter</MenuItem>
								<MenuItem>Facebook</MenuItem>
								<MenuItem>LinkedIn</MenuItem>
							</MenuSubPopup>
						</MenuSub>
					</MenuSubPopup>
				</MenuSub>
				<MenuSeparator />
				<MenuItem>Exit</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
