import {
	BookOpenIcon,
	ChevronRightIcon,
	ChevronsUpDownIcon,
	FolderIcon,
	InboxIcon,
	LayoutDashboardIcon,
	LifeBuoyIcon,
	MoreHorizontalIcon,
	PlusIcon,
	SettingsIcon,
	ShapesIcon,
	UsersIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	Collapsible,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "@/components/ui/sidebar";

const projects = ["Website", "Mobile app", "Design system"];

export default function SidebarDemo() {
	return (
		<SidebarProvider>
			<Sidebar collapsible="icon">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg">
								<div className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-lg">
									<ShapesIcon />
								</div>
								<div className="grid flex-1 leading-tight">
									<span className="truncate font-medium">Acme</span>
									<span className="text-muted-foreground truncate text-xs">
										Enterprise
									</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Workspace</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive tooltip="Dashboard">
									<LayoutDashboardIcon />
									<span>Dashboard</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Inbox">
									<InboxIcon />
									<span>Inbox</span>
								</SidebarMenuButton>
								<SidebarMenuBadge>12</SidebarMenuBadge>
							</SidebarMenuItem>
							<Collapsible defaultOpen render={<SidebarMenuItem />}>
								<CollapsibleTrigger
									render={<SidebarMenuButton tooltip="Documentation" />}
								>
									<BookOpenIcon />
									<span>Documentation</span>
									<ChevronRightIcon className="text-muted-foreground ease-out-quint ms-auto transition-[rotate] duration-150 in-data-panel-open:rotate-90 in-data-panel-open:duration-200 motion-reduce:transition-none" />
								</CollapsibleTrigger>
								<CollapsiblePanel>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>Introduction</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>Get started</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>Changelog</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsiblePanel>
							</Collapsible>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Members">
									<UsersIcon />
									<span>Members</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>Projects</SidebarGroupLabel>
						<SidebarGroupAction aria-label="Add project">
							<PlusIcon />
						</SidebarGroupAction>
						<SidebarMenu>
							{projects.map((project) => (
								<SidebarMenuItem key={project}>
									<SidebarMenuButton tooltip={project}>
										<FolderIcon />
										<span>{project}</span>
									</SidebarMenuButton>
									<Menu>
										<MenuTrigger
											render={
												<SidebarMenuAction
													showOnHover
													aria-label={`${project} options`}
												/>
											}
										>
											<MoreHorizontalIcon />
										</MenuTrigger>
										<MenuPopup side="right" align="start">
											<MenuItem>Open</MenuItem>
											<MenuItem>Share</MenuItem>
											<MenuSeparator />
											<MenuItem variant="destructive">Delete</MenuItem>
										</MenuPopup>
									</Menu>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup className="mt-auto">
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Support">
									<LifeBuoyIcon />
									<span>Support</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Settings">
									<SettingsIcon />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<SidebarMenu>
						<SidebarMenuItem>
							<Menu>
								<MenuTrigger render={<SidebarMenuButton size="lg" />}>
									<Avatar className="size-8 rounded-lg">
										<AvatarImage src="/avatars/bora.png" alt="" />
										<AvatarFallback>BB</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 leading-tight">
										<span className="truncate font-medium">Bora Baloglu</span>
										<span className="text-muted-foreground truncate text-xs">
											bora@example.com
										</span>
									</div>
									<ChevronsUpDownIcon className="text-muted-foreground ms-auto" />
								</MenuTrigger>
								<MenuPopup side="top" className="w-(--anchor-width) min-w-48">
									<MenuItem>Account</MenuItem>
									<MenuItem>Billing</MenuItem>
									<MenuSeparator />
									<MenuItem>Log out</MenuItem>
								</MenuPopup>
							</Menu>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
				<SidebarRail />
			</Sidebar>
			<SidebarInset>
				<header className="flex h-12 shrink-0 items-center gap-2 border-b px-3">
					<SidebarTrigger />
					<Separator orientation="vertical" className="me-1 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="max-sm:hidden">
								<BreadcrumbLink href="#">Workspace</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="max-sm:hidden" />
							<BreadcrumbItem>
								<BreadcrumbPage>Dashboard</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</header>
				<div className="flex flex-1 flex-col gap-3 p-3">
					<div className="grid gap-3 sm:grid-cols-3">
						<div className="bg-muted/50 aspect-video rounded-xl" />
						<div className="bg-muted/50 aspect-video rounded-xl max-sm:hidden" />
						<div className="bg-muted/50 aspect-video rounded-xl max-sm:hidden" />
					</div>
					<div className="bg-muted/50 min-h-24 flex-1 rounded-xl" />
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
