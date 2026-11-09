"use client";

import { useState } from "react";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuGroup,
	MenuGroupLabel,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuRadioIconDemo() {
	const [theme, setTheme] = useState("system");

	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>
				Appearance
			</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuGroup>
					<MenuGroupLabel>Theme</MenuGroupLabel>
					<MenuRadioGroup value={theme} onValueChange={setTheme}>
						<MenuRadioItem value="light">
							<SunIcon />
							Light
						</MenuRadioItem>
						<MenuRadioItem value="dark">
							<MoonIcon />
							Dark
						</MenuRadioItem>
						<MenuRadioItem value="system">
							<LaptopIcon />
							System
						</MenuRadioItem>
					</MenuRadioGroup>
				</MenuGroup>
			</MenuPopup>
		</Menu>
	);
}
