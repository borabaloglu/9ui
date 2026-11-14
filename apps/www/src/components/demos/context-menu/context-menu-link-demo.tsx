import { ExternalLinkIcon } from "lucide-react";

import {
	ContextMenu,
	ContextMenuLinkItem,
	ContextMenuPopup,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuLinkDemo() {
	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
				<span className="hidden pointer-fine:inline-block">
					Right click here
				</span>
				<span className="hidden pointer-coarse:inline-block">
					Long press here
				</span>
			</ContextMenuTrigger>
			<ContextMenuPopup className="w-48">
				<ContextMenuLinkItem href="/docs/getting-started/introduction">
					Documentation
				</ContextMenuLinkItem>
				<ContextMenuLinkItem href="/docs/getting-started/theming">
					Theming
				</ContextMenuLinkItem>
				<ContextMenuLinkItem
					href="https://github.com/borabaloglu/9ui"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
					<ExternalLinkIcon className="ml-auto" />
				</ContextMenuLinkItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
