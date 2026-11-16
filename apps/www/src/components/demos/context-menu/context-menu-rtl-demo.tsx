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
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuGroup,
	ContextMenuGroupLabel,
	ContextMenuItem,
	ContextMenuLinkItem,
	ContextMenuPopup,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubPopup,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "@/components/ui/context-menu";

const translations = {
	en: {
		rightClick: "Right click here",
		longPress: "Long press here",
		file: "File",
		edit: "Edit",
		copy: "Copy",
		share: "Share",
		email: "Email",
		message: "Message",
		copyLink: "Copy Link",
		rename: "Rename",
		pin: "Pin to Top",
		sort: "Sort By",
		newest: "Newest",
		oldest: "Oldest",
		help: "Help",
		docs: "Documentation",
		delete: "Delete",
	},
	ar: {
		rightClick: "انقر بزر الفأرة الأيمن هنا",
		longPress: "اضغط مطولًا هنا",
		file: "الملف",
		edit: "تعديل",
		copy: "نسخ",
		share: "مشاركة",
		email: "البريد الإلكتروني",
		message: "رسالة",
		copyLink: "نسخ الرابط",
		rename: "إعادة التسمية",
		pin: "تثبيت في الأعلى",
		sort: "الترتيب",
		newest: "الأحدث",
		oldest: "الأقدم",
		help: "المساعدة",
		docs: "التوثيق",
		delete: "حذف",
	},
	he: {
		rightClick: "לחצו כאן לחיצה ימנית",
		longPress: "לחצו כאן לחיצה ארוכה",
		file: "קובץ",
		edit: "עריכה",
		copy: "העתקה",
		share: "שיתוף",
		email: "אימייל",
		message: "הודעה",
		copyLink: "העתקת קישור",
		rename: "שינוי שם",
		pin: "הצמדה למעלה",
		sort: "מיון",
		newest: "החדש ביותר",
		oldest: "הישן ביותר",
		help: "עזרה",
		docs: "תיעוד",
		delete: "מחיקה",
	},
} satisfies Translations<Record<string, string>>;

export default function ContextMenuRtlDemo() {
	const { dir, t } = useTranslation(translations);
	const [pinned, setPinned] = useState(true);
	const [sort, setSort] = useState("newest");

	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
				<span className="hidden pointer-fine:inline-block">{t.rightClick}</span>
				<span className="hidden pointer-coarse:inline-block">
					{t.longPress}
				</span>
			</ContextMenuTrigger>
			<ContextMenuPopup dir={dir} className="w-56">
				<ContextMenuGroup>
					<ContextMenuGroupLabel>{t.file}</ContextMenuGroupLabel>
					<ContextMenuItem>
						<PencilIcon />
						{t.edit}
						<ContextMenuShortcut>⌘E</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuItem>
						<CopyIcon />
						{t.copy}
						<ContextMenuShortcut>⌘C</ContextMenuShortcut>
					</ContextMenuItem>
					<ContextMenuSub>
						<ContextMenuSubTrigger>
							<ShareIcon />
							{t.share}
						</ContextMenuSubTrigger>
						<ContextMenuSubPopup dir={dir}>
							<ContextMenuItem>{t.email}</ContextMenuItem>
							<ContextMenuItem>{t.message}</ContextMenuItem>
							<ContextMenuItem>{t.copyLink}</ContextMenuItem>
						</ContextMenuSubPopup>
					</ContextMenuSub>
					<ContextMenuItem inset>{t.rename}</ContextMenuItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuCheckboxItem checked={pinned} onCheckedChange={setPinned}>
					{t.pin}
				</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuGroupLabel>{t.sort}</ContextMenuGroupLabel>
					<ContextMenuRadioGroup value={sort} onValueChange={setSort}>
						<ContextMenuRadioItem value="newest">
							{t.newest}
						</ContextMenuRadioItem>
						<ContextMenuRadioItem value="oldest">
							{t.oldest}
						</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuGroup>
					<ContextMenuGroupLabel inset>{t.help}</ContextMenuGroupLabel>
					<ContextMenuLinkItem href="/docs/getting-started/rtl">
						<BookOpenIcon />
						{t.docs}
					</ContextMenuLinkItem>
				</ContextMenuGroup>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">
					<Trash2Icon />
					{t.delete}
				</ContextMenuItem>
			</ContextMenuPopup>
		</ContextMenu>
	);
}
