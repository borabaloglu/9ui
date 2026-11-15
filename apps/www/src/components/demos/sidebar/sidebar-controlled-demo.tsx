import * as React from "react";
import { CalendarIcon, HomeIcon, InboxIcon, SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "@/components/ui/sidebar";

const items = [
	{ title: "Home", icon: HomeIcon },
	{ title: "Inbox", icon: InboxIcon },
	{ title: "Calendar", icon: CalendarIcon },
	{ title: "Settings", icon: SettingsIcon },
];

export default function SidebarControlledDemo() {
	const [open, setOpen] = React.useState(true);

	return (
		<SidebarProvider open={open} onOpenChange={setOpen}>
			<Sidebar>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Application</SidebarGroupLabel>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton>
										<item.icon />
										<span>{item.title}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
			<SidebarInset>
				<header className="flex h-12 shrink-0 items-center px-3">
					<Button
						variant="outline"
						size="sm"
						onClick={() => setOpen((current) => !current)}
					>
						{open ? "Close" : "Open"} sidebar
					</Button>
				</header>
				<div className="flex flex-1 p-3 pt-0">
					<div className="bg-muted/50 flex-1 rounded-xl" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
