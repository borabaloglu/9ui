import { ExternalLinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuLinkItem,
	MenuPopup,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuLinkDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Resources</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuLinkItem href="/docs/getting-started/introduction">
					Documentation
				</MenuLinkItem>
				<MenuLinkItem href="/docs/getting-started/theming">
					Theming
				</MenuLinkItem>
				<MenuLinkItem
					href="https://github.com/borabaloglu/9ui"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
					<ExternalLinkIcon className="ml-auto" />
				</MenuLinkItem>
			</MenuPopup>
		</Menu>
	);
}
