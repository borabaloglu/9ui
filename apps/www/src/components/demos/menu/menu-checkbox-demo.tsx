"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuCheckboxItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuCheckboxDemo() {
	const [showStatusBar, setShowStatusBar] = useState(true);
	const [showLineNumbers, setShowLineNumbers] = useState(false);
	const [wordWrap, setWordWrap] = useState(true);

	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>
				View Options
			</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuCheckboxItem
					checked={showStatusBar}
					onCheckedChange={setShowStatusBar}
				>
					Status Bar
				</MenuCheckboxItem>
				<MenuCheckboxItem
					checked={showLineNumbers}
					onCheckedChange={setShowLineNumbers}
				>
					Line Numbers
				</MenuCheckboxItem>
				<MenuCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
					Word Wrap
				</MenuCheckboxItem>
				<MenuSeparator />
				<MenuCheckboxItem disabled>Minimap</MenuCheckboxItem>
			</MenuPopup>
		</Menu>
	);
}
