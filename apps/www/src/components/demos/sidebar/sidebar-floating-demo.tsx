import { CalendarIcon, HomeIcon, InboxIcon, SettingsIcon } from "lucide-react";

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
	SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
	{ title: "Home", icon: HomeIcon },
	{ title: "Inbox", icon: InboxIcon },
	{ title: "Calendar", icon: CalendarIcon },
	{ title: "Settings", icon: SettingsIcon },
];

export default function SidebarFloatingDemo() {
	return (
		<SidebarProvider>
			<Sidebar variant="floating" className="p-3">
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
			<SidebarInset className="md:peer-data-[state=expanded]/sidebar:-ml-3">
				<header className="flex h-12 shrink-0 items-center px-3">
					<SidebarTrigger />
				</header>
				<div className="flex flex-1 p-3 pt-0">
					<div className="bg-muted/50 flex-1 rounded-xl" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
