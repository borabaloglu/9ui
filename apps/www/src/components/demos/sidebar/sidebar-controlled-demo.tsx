"use client";

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
	useSidebar,
} from "@/components/ui/sidebar";

const items = [
	{ title: "Home", icon: HomeIcon },
	{ title: "Inbox", icon: InboxIcon },
	{ title: "Calendar", icon: CalendarIcon },
	{ title: "Settings", icon: SettingsIcon },
];

function SidebarToggle() {
	const { isMobile, open, openMobile, toggleSidebar } = useSidebar();
	const isOpen = isMobile ? openMobile : open;

	return (
		<Button variant="outline" size="sm" onClick={toggleSidebar}>
			{isOpen ? "Close" : "Open"} sidebar
		</Button>
	);
}

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
					<SidebarToggle />
				</header>
				<div className="flex flex-1 p-3 pt-0">
					<div className="bg-muted/50 flex-1 rounded-xl" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
