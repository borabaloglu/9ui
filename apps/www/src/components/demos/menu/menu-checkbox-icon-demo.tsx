"use client";

import { useState } from "react";
import { BellIcon, GlobeIcon, ShieldIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuCheckboxItem,
	MenuPopup,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuCheckboxIconDemo() {
	const [notifications, setNotifications] = useState(true);
	const [location, setLocation] = useState(false);
	const [security, setSecurity] = useState(true);

	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>
				Preferences
			</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuCheckboxItem
					checked={notifications}
					onCheckedChange={setNotifications}
				>
					<BellIcon />
					Notifications
				</MenuCheckboxItem>
				<MenuCheckboxItem checked={location} onCheckedChange={setLocation}>
					<GlobeIcon />
					Location
				</MenuCheckboxItem>
				<MenuCheckboxItem checked={security} onCheckedChange={setSecurity}>
					<ShieldIcon />
					Security
				</MenuCheckboxItem>
			</MenuPopup>
		</Menu>
	);
}
