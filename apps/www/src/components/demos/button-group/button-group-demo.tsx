import {
	ArchiveIcon,
	ArrowLeftIcon,
	CalendarPlusIcon,
	ClockIcon,
	EllipsisIcon,
	ListFilterIcon,
	MailCheckIcon,
	TagIcon,
	TrashIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
	Menu,
	MenuGroup,
	MenuItem,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
} from "@/components/ui/menu";

export default function ButtonGroupDemo() {
	return (
		<ButtonGroup aria-label="Message actions">
			<ButtonGroup className="hidden sm:flex">
				<Button variant="outline" size="icon" aria-label="Go back">
					<ArrowLeftIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline">Archive</Button>
				<Button variant="outline">Report</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline">Snooze</Button>
				<Menu>
					<MenuTrigger
						render={
							<Button variant="outline" size="icon" aria-label="More options" />
						}
					>
						<EllipsisIcon />
					</MenuTrigger>
					<MenuPopup align="end" className="w-44">
						<MenuGroup>
							<MenuItem>
								<MailCheckIcon />
								Mark as read
							</MenuItem>
							<MenuItem>
								<ArchiveIcon />
								Archive
							</MenuItem>
						</MenuGroup>
						<MenuSeparator />
						<MenuGroup>
							<MenuItem>
								<ClockIcon />
								Snooze
							</MenuItem>
							<MenuItem>
								<CalendarPlusIcon />
								Add to calendar
							</MenuItem>
							<MenuItem>
								<ListFilterIcon />
								Add to list
							</MenuItem>
							<MenuSub>
								<MenuSubTrigger>
									<TagIcon />
									Label as
								</MenuSubTrigger>
								<MenuSubPopup>
									<MenuRadioGroup defaultValue="personal">
										<MenuRadioItem value="personal">Personal</MenuRadioItem>
										<MenuRadioItem value="work">Work</MenuRadioItem>
										<MenuRadioItem value="other">Other</MenuRadioItem>
									</MenuRadioGroup>
								</MenuSubPopup>
							</MenuSub>
						</MenuGroup>
						<MenuSeparator />
						<MenuGroup>
							<MenuItem variant="destructive">
								<TrashIcon />
								Trash
							</MenuItem>
						</MenuGroup>
					</MenuPopup>
				</Menu>
			</ButtonGroup>
		</ButtonGroup>
	);
}
