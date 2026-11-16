"use client";

import Link from "next/link";
import { BookOpenIcon, ComponentIcon, PaletteIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuPopup,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const translations = {
	en: {
		gettingStarted: "Getting Started",
		introduction: "Introduction",
		introductionDescription: "Learn what 9ui is and how it works.",
		installation: "Installation",
		installationDescription: "Add 9ui to your project.",
		customize: "Customize",
		customizeDescription: "Make 9ui match your brand.",
		theming: "Theming",
		themingDescription: "Change colors, radius and fonts.",
		darkMode: "Dark Mode",
		darkModeDescription: "Add a dark theme to your project.",
		components: "Components",
		button: "Button",
		buttonDescription: "Actions, icon buttons and loading states.",
		field: "Field",
		fieldDescription: "Labels, descriptions and errors for controls.",
		menu: "Menu",
		menuDescription: "A list of actions that opens from a button.",
		popover: "Popover",
		popoverDescription: "Floating content anchored to a trigger.",
		guides: "Guides",
		setup: "Setup",
		setupHint: "Set up your project.",
		library: "Library",
		libraryHint: "Browse the components.",
		resources: "Resources",
		documentation: "Documentation",
	},
	ar: {
		gettingStarted: "البدء",
		introduction: "مقدمة",
		introductionDescription: "تعرّف على 9ui وطريقة عمله.",
		installation: "التثبيت",
		installationDescription: "أضف 9ui إلى مشروعك.",
		customize: "التخصيص",
		customizeDescription: "اجعل 9ui يطابق علامتك التجارية.",
		theming: "السمات",
		themingDescription: "غيّر الألوان والزوايا والخطوط.",
		darkMode: "الوضع الداكن",
		darkModeDescription: "أضف سمة داكنة إلى مشروعك.",
		components: "المكونات",
		button: "الزر",
		buttonDescription: "الإجراءات وأزرار الأيقونات وحالات التحميل.",
		field: "الحقل",
		fieldDescription: "التسميات والأوصاف والأخطاء لعناصر الإدخال.",
		menu: "القائمة",
		menuDescription: "قائمة إجراءات تُفتح من زر.",
		popover: "النافذة المنبثقة",
		popoverDescription: "محتوى عائم مرتبط بزر.",
		guides: "الأدلة",
		setup: "الإعداد",
		setupHint: "جهّز مشروعك.",
		library: "المكتبة",
		libraryHint: "تصفح المكونات.",
		resources: "الموارد",
		documentation: "التوثيق",
	},
	he: {
		gettingStarted: "תחילת עבודה",
		introduction: "מבוא",
		introductionDescription: "מה זה 9ui ואיך הוא עובד.",
		installation: "התקנה",
		installationDescription: "הוספת 9ui לפרויקט שלך.",
		customize: "התאמה אישית",
		customizeDescription: "התאמת 9ui למותג שלך.",
		theming: "ערכות נושא",
		themingDescription: "שינוי צבעים, פינות וגופנים.",
		darkMode: "מצב כהה",
		darkModeDescription: "הוספת ערכת נושא כהה לפרויקט.",
		components: "רכיבים",
		button: "כפתור",
		buttonDescription: "פעולות, כפתורי אייקון ומצבי טעינה.",
		field: "שדה",
		fieldDescription: "תוויות, תיאורים ושגיאות לפקדים.",
		menu: "תפריט",
		menuDescription: "רשימת פעולות שנפתחת מכפתור.",
		popover: "חלונית קופצת",
		popoverDescription: "תוכן צף שמעוגן לכפתור.",
		guides: "מדריכים",
		setup: "הגדרה",
		setupHint: "הכנת הפרויקט שלך.",
		library: "ספרייה",
		libraryHint: "עיון ברכיבים.",
		resources: "משאבים",
		documentation: "תיעוד",
	},
} satisfies Translations<Record<string, string>>;

type Key = keyof (typeof translations)["en"];

const overview: { title: Key; description: Key; href: string }[] = [
	{
		title: "introduction",
		description: "introductionDescription",
		href: "/docs/getting-started/introduction",
	},
	{
		title: "installation",
		description: "installationDescription",
		href: "/docs/getting-started/installation",
	},
];

const customize: { title: Key; description: Key; href: string }[] = [
	{
		title: "theming",
		description: "themingDescription",
		href: "/docs/getting-started/theming",
	},
	{
		title: "darkMode",
		description: "darkModeDescription",
		href: "/docs/getting-started/dark-mode",
	},
];

const components: { title: Key; description: Key; href: string }[] = [
	{
		title: "button",
		description: "buttonDescription",
		href: "/docs/components/button",
	},
	{
		title: "field",
		description: "fieldDescription",
		href: "/docs/components/field",
	},
	{
		title: "menu",
		description: "menuDescription",
		href: "/docs/components/menu",
	},
	{
		title: "popover",
		description: "popoverDescription",
		href: "/docs/components/popover",
	},
];

const sections: {
	value: string;
	label: Key;
	hint: Key;
	links: { title: Key; description: Key; href: string }[];
}[] = [
	{ value: "setup", label: "setup", hint: "setupHint", links: overview },
	{
		value: "customize",
		label: "customize",
		hint: "customizeDescription",
		links: customize,
	},
	{
		value: "library",
		label: "library",
		hint: "libraryHint",
		links: components.slice(0, 3),
	},
];

const resources: {
	title: Key;
	href: string;
	icon: typeof BookOpenIcon;
}[] = [
	{
		title: "documentation",
		href: "/docs/getting-started/introduction",
		icon: BookOpenIcon,
	},
	{ title: "components", href: "/docs/components/button", icon: ComponentIcon },
	{
		title: "theming",
		href: "/docs/getting-started/theming",
		icon: PaletteIcon,
	},
];

export default function NavigationMenuRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{t.gettingStarted}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-64">
							{overview.map((item) => (
								<ListItem
									key={item.href}
									href={item.href}
									title={t[item.title]}
									description={t[item.description]}
								/>
							))}
							<li>
								<NavigationMenu orientation="vertical">
									<NavigationMenuList>
										<NavigationMenuItem>
											<NavigationMenuTrigger variant="link">
												<span className="flex flex-col items-start gap-1">
													<span className="leading-none font-medium">
														{t.customize}
													</span>
													<span className="text-muted-foreground">
														{t.customizeDescription}
													</span>
												</span>
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className="w-64">
													{customize.map((item) => (
														<ListItem
															key={item.href}
															href={item.href}
															title={t[item.title]}
															description={t[item.description]}
														/>
													))}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									</NavigationMenuList>
									<NavigationMenuPopup
										dir={dir}
										side="inline-end"
										alignOffset={-5}
									/>
								</NavigationMenu>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{t.components}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-64 sm:w-120 sm:grid-cols-2">
							{components.map((item) => (
								<ListItem
									key={item.href}
									href={item.href}
									title={t[item.title]}
									description={t[item.description]}
								/>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{t.guides}</NavigationMenuTrigger>
					<NavigationMenuContent className="[--navigation-menu-padding:0px]">
						<NavigationMenu orientation="vertical" defaultValue="setup">
							<div className="grid w-[min(--spacing(128),calc(100vw-2rem))] grid-cols-[--spacing(40)_1fr]">
								<NavigationMenuList className="border-e p-1">
									{sections.map((section) => (
										<NavigationMenuItem
											key={section.value}
											value={section.value}
										>
											<NavigationMenuTrigger variant="link" showIcon={false}>
												<span className="flex flex-col items-start gap-1">
													<span className="leading-none font-medium">
														{t[section.label]}
													</span>
													<span className="text-muted-foreground">
														{t[section.hint]}
													</span>
												</span>
											</NavigationMenuTrigger>
											<NavigationMenuContent className="w-full">
												<ul>
													{section.links.map((link) => (
														<ListItem
															key={link.href}
															href={link.href}
															title={t[link.title]}
															description={t[link.description]}
														/>
													))}
												</ul>
											</NavigationMenuContent>
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
								<NavigationMenuViewport className="h-auto min-h-44" />
							</div>
						</NavigationMenu>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{t.resources}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-48">
							{resources.map((item) => (
								<li key={item.href}>
									<NavigationMenuLink render={<Link href={item.href} />}>
										<item.icon aria-hidden="true" className="opacity-80" />
										{t[item.title]}
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						variant="trigger"
						href="https://github.com/borabaloglu/9ui"
					>
						GitHub
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuPopup dir={dir} />
		</NavigationMenu>
	);
}

function ListItem({
	title,
	description,
	href,
}: {
	title: string;
	description: string;
	href: string;
}) {
	return (
		<li>
			<NavigationMenuLink
				className="flex-col items-start gap-1"
				render={<Link href={href} />}
			>
				<span className="leading-none font-medium">{title}</span>
				<span className="text-muted-foreground">{description}</span>
			</NavigationMenuLink>
		</li>
	);
}
