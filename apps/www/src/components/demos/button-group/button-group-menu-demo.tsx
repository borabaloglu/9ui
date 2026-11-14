import {
	BellOffIcon,
	ChevronDownIcon,
	ShareIcon,
	TrashIcon,
	UserRoundXIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
	Menu,
	MenuGroup,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

export default function ButtonGroupMenuDemo() {
	return (
		<ButtonGroup>
			<Button variant="outline">Follow</Button>
			<Menu>
				<MenuTrigger
					render={
						<Button variant="outline" size="icon" aria-label="More options" />
					}
				>
					<ChevronDownIcon />
				</MenuTrigger>
				<MenuPopup align="end" className="w-44">
					<MenuGroup>
						<MenuItem>
							<BellOffIcon />
							Mute conversation
						</MenuItem>
						<MenuItem>
							<ShareIcon />
							Share conversation
						</MenuItem>
						<MenuItem>
							<UserRoundXIcon />
							Block user
						</MenuItem>
					</MenuGroup>
					<MenuSeparator />
					<MenuGroup>
						<MenuItem variant="destructive">
							<TrashIcon />
							Delete conversation
						</MenuItem>
					</MenuGroup>
				</MenuPopup>
			</Menu>
		</ButtonGroup>
	);
}
