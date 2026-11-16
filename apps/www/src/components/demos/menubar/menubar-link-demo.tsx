import { ExternalLinkIcon } from "lucide-react";

import {
	Menubar,
	MenubarItem,
	MenubarLinkItem,
	MenubarMenu,
	MenubarPopup,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarLinkDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarPopup className="min-w-40">
					<MenubarItem>New File</MenubarItem>
					<MenubarItem>Open</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Save</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Help</MenubarTrigger>
				<MenubarPopup className="min-w-48">
					<MenubarLinkItem href="/docs/getting-started/introduction">
						Documentation
					</MenubarLinkItem>
					<MenubarLinkItem href="/docs/getting-started/theming">
						Theming
					</MenubarLinkItem>
					<MenubarLinkItem
						href="https://github.com/borabaloglu/9ui"
						target="_blank"
						rel="noreferrer"
					>
						GitHub
						<ExternalLinkIcon className="ms-auto" />
					</MenubarLinkItem>
				</MenubarPopup>
			</MenubarMenu>
		</Menubar>
	);
}
