import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarProvider,
} from "@/components/ui/sidebar";

export default function SidebarLoadingDemo() {
	return (
		<SidebarProvider>
			<Sidebar collapsible="none" className="border-r">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Projects</SidebarGroupLabel>
						<SidebarMenu>
							{Array.from({ length: 5 }).map((_, index) => (
								<SidebarMenuItem key={index}>
									<SidebarMenuSkeleton showIcon />
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	);
}
