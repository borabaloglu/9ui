"use client";

import { useState } from "react";
import {
	BookOpenIcon,
	CopyIcon,
	PencilIcon,
	ShareIcon,
	Trash2Icon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuCheckboxItem,
	MenuGroup,
	MenuGroupLabel,
	MenuItem,
	MenuLinkItem,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuShortcut,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
} from "@/components/ui/menu";

const translations = {
	en: {
		open: "Open Menu",
		file: "File",
		edit: "Edit",
		copy: "Copy",
		share: "Share",
		email: "Email",
		message: "Message",
		copyLink: "Copy Link",
		rename: "Rename",
		help: "Help",
		docs: "Documentation",
		pin: "Pin to Top",
		sort: "Sort By",
		newest: "Newest",
		oldest: "Oldest",
		delete: "Delete",
	},
	ar: {
		open: "فتح القائمة",
		file: "الملف",
		edit: "تعديل",
		copy: "نسخ",
		share: "مشاركة",
		email: "البريد الإلكتروني",
		message: "رسالة",
		copyLink: "نسخ الرابط",
		rename: "إعادة التسمية",
		help: "المساعدة",
		docs: "التوثيق",
		pin: "تثبيت في الأعلى",
		sort: "الترتيب",
		newest: "الأحدث",
		oldest: "الأقدم",
		delete: "حذف",
	},
	he: {
		open: "פתח תפריט",
		file: "קובץ",
		edit: "עריכה",
		copy: "העתקה",
		share: "שיתוף",
		email: "אימייל",
		message: "הודעה",
		copyLink: "העתקת קישור",
		rename: "שינוי שם",
		help: "עזרה",
		docs: "תיעוד",
		pin: "הצמדה למעלה",
		sort: "מיון",
		newest: "החדש ביותר",
		oldest: "הישן ביותר",
		delete: "מחיקה",
	},
} satisfies Translations<Record<string, string>>;

export default function MenuRtlDemo() {
	const { dir, t } = useTranslation(translations);
	const [pinned, setPinned] = useState(true);
	const [sort, setSort] = useState("newest");

	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" />}>{t.open}</MenuTrigger>
			<MenuPopup dir={dir} className="w-56">
				<MenuGroup>
					<MenuGroupLabel>{t.file}</MenuGroupLabel>
					<MenuItem>
						<PencilIcon />
						{t.edit}
						<MenuShortcut>⌘E</MenuShortcut>
					</MenuItem>
					<MenuItem>
						<CopyIcon />
						{t.copy}
						<MenuShortcut>⌘C</MenuShortcut>
					</MenuItem>
					<MenuSub>
						<MenuSubTrigger>
							<ShareIcon />
							{t.share}
						</MenuSubTrigger>
						<MenuSubPopup dir={dir}>
							<MenuItem>{t.email}</MenuItem>
							<MenuItem>{t.message}</MenuItem>
							<MenuItem>{t.copyLink}</MenuItem>
						</MenuSubPopup>
					</MenuSub>
					<MenuItem inset>{t.rename}</MenuItem>
				</MenuGroup>
				<MenuSeparator />
				<MenuCheckboxItem checked={pinned} onCheckedChange={setPinned}>
					{t.pin}
				</MenuCheckboxItem>
				<MenuSeparator />
				<MenuGroup>
					<MenuGroupLabel>{t.sort}</MenuGroupLabel>
					<MenuRadioGroup value={sort} onValueChange={setSort}>
						<MenuRadioItem value="newest">{t.newest}</MenuRadioItem>
						<MenuRadioItem value="oldest">{t.oldest}</MenuRadioItem>
					</MenuRadioGroup>
				</MenuGroup>
				<MenuSeparator />
				<MenuGroup>
					<MenuGroupLabel inset>{t.help}</MenuGroupLabel>
					<MenuLinkItem href="/docs/getting-started/rtl">
						<BookOpenIcon />
						{t.docs}
					</MenuLinkItem>
				</MenuGroup>
				<MenuSeparator />
				<MenuItem variant="destructive">
					<Trash2Icon />
					{t.delete}
				</MenuItem>
			</MenuPopup>
		</Menu>
	);
}
