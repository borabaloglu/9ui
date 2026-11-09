import {
	CloudIcon,
	KeyboardIcon,
	LogOutIcon,
	SettingsIcon,
	UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuIconsDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Open Menu</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuItem>
					<UserIcon />
					Profile
				</MenuItem>
				<MenuItem>
					<SettingsIcon />
					Settings
				</MenuItem>
				<MenuItem>
					<KeyboardIcon />
					Keyboard Shortcuts
				</MenuItem>
				<MenuItem>
					<CloudIcon />
					Cloud Sync
				</MenuItem>
				<MenuSeparator />
				<MenuItem>
					<LogOutIcon />
					Log Out
				</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
