"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuLinkItem,
	MenuPopup,
	MenuTrigger,
} from "@/components/ui/menu";

const translations = {
	en: {
		home: "Home",
		showHidden: "Show hidden pages",
		docs: "Docs",
		gettingStarted: "Getting Started",
		installation: "Installation",
		components: "Components",
		breadcrumb: "Breadcrumb",
	},
	ar: {
		home: "الرئيسية",
		showHidden: "عرض الصفحات المخفية",
		docs: "التوثيق",
		gettingStarted: "البدء",
		installation: "التثبيت",
		components: "المكونات",
		breadcrumb: "مسار التنقل",
	},
	he: {
		home: "דף הבית",
		showHidden: "הצגת דפים מוסתרים",
		docs: "תיעוד",
		gettingStarted: "תחילת עבודה",
		installation: "התקנה",
		components: "רכיבים",
		breadcrumb: "פירורי לחם",
	},
} satisfies Translations<Record<string, string>>;

export default function BreadcrumbRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">{t.home}</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Menu>
						<MenuTrigger
							render={
								<Button
									variant="ghost"
									size="icon-xs"
									aria-label={t.showHidden}
								/>
							}
						>
							<BreadcrumbEllipsis />
						</MenuTrigger>
						<MenuPopup dir={dir}>
							<MenuLinkItem href="#">{t.docs}</MenuLinkItem>
							<MenuLinkItem href="#">{t.gettingStarted}</MenuLinkItem>
							<MenuLinkItem href="#">{t.installation}</MenuLinkItem>
						</MenuPopup>
					</Menu>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#">{t.components}</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>{t.breadcrumb}</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
