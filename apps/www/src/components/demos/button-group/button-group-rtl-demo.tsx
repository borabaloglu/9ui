"use client";

import {
	ArchiveIcon,
	ArrowLeftIcon,
	CalendarPlusIcon,
	ClockIcon,
	EllipsisIcon,
	ListFilterIcon,
	MailCheckIcon,
	TagIcon,
	TrashIcon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
	Menu,
	MenuGroup,
	MenuItem,
	MenuPopup,
	MenuRadioGroup,
	MenuRadioItem,
	MenuSeparator,
	MenuSub,
	MenuSubPopup,
	MenuSubTrigger,
	MenuTrigger,
} from "@/components/ui/menu";

const translations = {
	en: {
		messageActions: "Message actions",
		goBack: "Go back",
		archive: "Archive",
		report: "Report",
		snooze: "Snooze",
		more: "More options",
		markAsRead: "Mark as read",
		addToCalendar: "Add to calendar",
		addToList: "Add to list",
		labelAs: "Label as",
		personal: "Personal",
		work: "Work",
		other: "Other",
		trash: "Trash",
	},
	ar: {
		messageActions: "إجراءات الرسالة",
		goBack: "رجوع",
		archive: "أرشفة",
		report: "إبلاغ",
		snooze: "تأجيل",
		more: "خيارات إضافية",
		markAsRead: "تعليم كمقروء",
		addToCalendar: "إضافة إلى التقويم",
		addToList: "إضافة إلى قائمة",
		labelAs: "تصنيف كـ",
		personal: "شخصي",
		work: "عمل",
		other: "أخرى",
		trash: "سلة المهملات",
	},
	he: {
		messageActions: "פעולות הודעה",
		goBack: "חזרה",
		archive: "העברה לארכיון",
		report: "דיווח",
		snooze: "נודניק",
		more: "אפשרויות נוספות",
		markAsRead: "סימון כנקרא",
		addToCalendar: "הוספה ליומן",
		addToList: "הוספה לרשימה",
		labelAs: "תיוג בתור",
		personal: "אישי",
		work: "עבודה",
		other: "אחר",
		trash: "העברה לאשפה",
	},
} satisfies Translations<Record<string, string>>;

export default function ButtonGroupRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<ButtonGroup aria-label={t.messageActions}>
			<ButtonGroup className="hidden sm:flex">
				<Button variant="outline" size="icon" aria-label={t.goBack}>
					<ArrowLeftIcon className="rtl:rotate-180" />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline">{t.archive}</Button>
				<Button variant="outline">{t.report}</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="outline">{t.snooze}</Button>
				<Menu>
					<MenuTrigger
						render={
							<Button variant="outline" size="icon" aria-label={t.more} />
						}
					>
						<EllipsisIcon />
					</MenuTrigger>
					<MenuPopup dir={dir} align="end" className="w-44">
						<MenuGroup>
							<MenuItem>
								<MailCheckIcon />
								{t.markAsRead}
							</MenuItem>
							<MenuItem>
								<ArchiveIcon />
								{t.archive}
							</MenuItem>
						</MenuGroup>
						<MenuSeparator />
						<MenuGroup>
							<MenuItem>
								<ClockIcon />
								{t.snooze}
							</MenuItem>
							<MenuItem>
								<CalendarPlusIcon />
								{t.addToCalendar}
							</MenuItem>
							<MenuItem>
								<ListFilterIcon />
								{t.addToList}
							</MenuItem>
							<MenuSub>
								<MenuSubTrigger>
									<TagIcon />
									{t.labelAs}
								</MenuSubTrigger>
								<MenuSubPopup dir={dir}>
									<MenuRadioGroup defaultValue="personal">
										<MenuRadioItem value="personal">{t.personal}</MenuRadioItem>
										<MenuRadioItem value="work">{t.work}</MenuRadioItem>
										<MenuRadioItem value="other">{t.other}</MenuRadioItem>
									</MenuRadioGroup>
								</MenuSubPopup>
							</MenuSub>
						</MenuGroup>
						<MenuSeparator />
						<MenuGroup>
							<MenuItem variant="destructive">
								<TrashIcon />
								{t.trash}
							</MenuItem>
						</MenuGroup>
					</MenuPopup>
				</Menu>
			</ButtonGroup>
		</ButtonGroup>
	);
}
