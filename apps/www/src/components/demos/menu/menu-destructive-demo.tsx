import { ArchiveIcon, PencilIcon, ShareIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export default function MenuDestructiveDemo() {
	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>Actions</MenuTrigger>
			<MenuPopup className="w-48">
				<MenuItem>
					<PencilIcon />
					Edit
				</MenuItem>
				<MenuItem>
					<ShareIcon />
					Share
				</MenuItem>
				<MenuItem>
					<ArchiveIcon />
					Archive
				</MenuItem>
				<MenuSeparator />
				<MenuItem variant="destructive">
					<Trash2Icon />
					Delete
				</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
