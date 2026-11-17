"use client";

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

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
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

const translations = {
	en: {
		workspace: "Workspace",
		enterprise: "Enterprise",
		dashboard: "Dashboard",
		inbox: "Inbox",
		documentation: "Documentation",
		introduction: "Introduction",
		getStarted: "Get started",
		changelog: "Changelog",
		members: "Members",
		projects: "Projects",
		addProject: "Add project",
		website: "Website",
		mobileApp: "Mobile app",
		designSystem: "Design system",
		options: "Options",
		open: "Open",
		share: "Share",
		delete: "Delete",
		support: "Support",
		settings: "Settings",
		account: "Account",
		billing: "Billing",
		logOut: "Log out",
	},
	ar: {
		workspace: "مساحة العمل",
		enterprise: "المؤسسات",
		dashboard: "لوحة التحكم",
		inbox: "الوارد",
		documentation: "التوثيق",
		introduction: "مقدمة",
		getStarted: "البدء",
		changelog: "سجل التغييرات",
		members: "الأعضاء",
		projects: "المشاريع",
		addProject: "إضافة مشروع",
		website: "الموقع الإلكتروني",
		mobileApp: "تطبيق الجوال",
		designSystem: "نظام التصميم",
		options: "خيارات",
		open: "فتح",
		share: "مشاركة",
		delete: "حذف",
		support: "الدعم",
		settings: "الإعدادات",
		account: "الحساب",
		billing: "الفوترة",
		logOut: "تسجيل الخروج",
	},
	he: {
		workspace: "סביבת עבודה",
		enterprise: "ארגוני",
		dashboard: "לוח בקרה",
		inbox: "דואר נכנס",
		documentation: "תיעוד",
		introduction: "מבוא",
		getStarted: "תחילת עבודה",
		changelog: "יומן שינויים",
		members: "חברים",
		projects: "פרויקטים",
		addProject: "הוספת פרויקט",
		website: "אתר",
		mobileApp: "אפליקציה",
		designSystem: "מערכת עיצוב",
		options: "אפשרויות",
		open: "פתח",
		share: "שיתוף",
		delete: "מחיקה",
		support: "תמיכה",
		settings: "הגדרות",
		account: "חשבון",
		billing: "חיוב",
		logOut: "התנתקות",
	},
} satisfies Translations<Record<string, string>>;

export default function SidebarRtlDemo() {
	const { dir, t } = useTranslation(translations);
	const projects = [t.website, t.mobileApp, t.designSystem];

	return (
		<SidebarProvider>
			<Sidebar
				collapsible="icon"
				side={dir === "rtl" ? "right" : "left"}
				dir={dir}
			>
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
										{t.enterprise}
									</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>{t.workspace}</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									active
									tooltip={{ children: t.dashboard, dir }}
								>
									<LayoutDashboardIcon />
									<span>{t.dashboard}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip={{ children: t.inbox, dir }}>
									<InboxIcon />
									<span>{t.inbox}</span>
								</SidebarMenuButton>
								<SidebarMenuBadge>12</SidebarMenuBadge>
							</SidebarMenuItem>
							<Collapsible defaultOpen render={<SidebarMenuItem />}>
								<CollapsibleTrigger
									render={
										<SidebarMenuButton
											tooltip={{ children: t.documentation, dir }}
										/>
									}
								>
									<BookOpenIcon />
									<span>{t.documentation}</span>
									<ChevronRightIcon className="text-muted-foreground ease-out-quint ms-auto transition-[rotate] duration-150 in-data-panel-open:rotate-90 in-data-panel-open:duration-200 motion-reduce:transition-none rtl:not-in-data-panel-open:rotate-180" />
								</CollapsibleTrigger>
								<CollapsiblePanel>
									<SidebarMenuSub>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>{t.introduction}</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>{t.getStarted}</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
										<SidebarMenuSubItem>
											<SidebarMenuSubButton href="#">
												<span>{t.changelog}</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									</SidebarMenuSub>
								</CollapsiblePanel>
							</Collapsible>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip={{ children: t.members, dir }}>
									<UsersIcon />
									<span>{t.members}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>{t.projects}</SidebarGroupLabel>
						<SidebarGroupAction aria-label={t.addProject}>
							<PlusIcon />
						</SidebarGroupAction>
						<SidebarMenu>
							{projects.map((project) => (
								<SidebarMenuItem key={project}>
									<SidebarMenuButton tooltip={{ children: project, dir }}>
										<FolderIcon />
										<span>{project}</span>
									</SidebarMenuButton>
									<Menu>
										<MenuTrigger
											render={
												<SidebarMenuAction
													showOnHover
													aria-label={`${t.options}: ${project}`}
												/>
											}
										>
											<MoreHorizontalIcon />
										</MenuTrigger>
										<MenuPopup side="inline-end" align="start" dir={dir}>
											<MenuItem>{t.open}</MenuItem>
											<MenuItem>{t.share}</MenuItem>
											<MenuSeparator />
											<MenuItem variant="destructive">{t.delete}</MenuItem>
										</MenuPopup>
									</Menu>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup className="mt-auto">
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip={{ children: t.support, dir }}>
									<LifeBuoyIcon />
									<span>{t.support}</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip={{ children: t.settings, dir }}>
									<SettingsIcon />
									<span>{t.settings}</span>
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
								<MenuPopup
									side="top"
									dir={dir}
									className="w-(--anchor-width) min-w-48"
								>
									<MenuItem>{t.account}</MenuItem>
									<MenuItem>{t.billing}</MenuItem>
									<MenuSeparator />
									<MenuItem>{t.logOut}</MenuItem>
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
								<BreadcrumbLink href="#">{t.workspace}</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="max-sm:hidden" />
							<BreadcrumbItem>
								<BreadcrumbPage>{t.dashboard}</BreadcrumbPage>
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
