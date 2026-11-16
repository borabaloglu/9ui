"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

const translations = {
	en: {
		inbox: "Inbox",
		inboxDescription: "You have 3 new messages from the design team.",
		team: "Team",
		teamDescription: "Your team has 8 members, 2 of them invited.",
		files: "Files",
		filesDescription: "12 files were uploaded this week.",
		settings: "Settings",
		settingsDescription: "Change language, theme and notifications.",
		general: "General",
		generalDescription: "Update your display name and language.",
		security: "Security",
		securityDescription: "Manage your password and sessions.",
		notifications: "Notifications",
		notificationsDescription: "Choose which events notify you.",
	},
	ar: {
		inbox: "الرسائل",
		inboxDescription: "لديك 3 رسائل جديدة من فريق التصميم.",
		team: "الفريق",
		teamDescription: "يضم فريقك 8 أعضاء، منهم 2 بانتظار قبول الدعوة.",
		files: "الملفات",
		filesDescription: "تم رفع 12 ملفًا هذا الأسبوع.",
		settings: "الإعدادات",
		settingsDescription: "غيّر اللغة والمظهر والإشعارات.",
		general: "عام",
		generalDescription: "حدّث اسمك المعروض ولغتك.",
		security: "الأمان",
		securityDescription: "أدر كلمة المرور والجلسات.",
		notifications: "الإشعارات",
		notificationsDescription: "اختر الأحداث التي تصلك عنها إشعارات.",
	},
	he: {
		inbox: "דואר נכנס",
		inboxDescription: "יש לך 3 הודעות חדשות מצוות העיצוב.",
		team: "צוות",
		teamDescription: "בצוות שלך 8 חברים, 2 מהם הוזמנו.",
		files: "קבצים",
		filesDescription: "12 קבצים הועלו השבוע.",
		settings: "הגדרות",
		settingsDescription: "שינוי שפה, ערכת נושא והתראות.",
		general: "כללי",
		generalDescription: "עדכון שם התצוגה והשפה.",
		security: "אבטחה",
		securityDescription: "ניהול הסיסמה וההתחברויות.",
		notifications: "התראות",
		notificationsDescription: "בחירת האירועים שעליהם תקבלו התראה.",
	},
} satisfies Translations<Record<string, string>>;

type Key = keyof (typeof translations)["en"];

function Panel({
	value,
	title,
	description,
}: {
	value: string;
	title: string;
	description: string;
}) {
	return (
		<TabsPanel value={value}>
			<Card size="sm">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>{description}</CardDescription>
				</CardHeader>
			</Card>
		</TabsPanel>
	);
}

export default function TabsRtlDemo() {
	const { t } = useTranslation(translations);

	const panels = (keys: Key[]) =>
		keys.map((key) => (
			<Panel
				key={key}
				value={key}
				title={t[key]}
				description={t[`${key}Description` as Key]}
			/>
		));

	return (
		<div className="flex w-full max-w-lg flex-col gap-8">
			<Tabs defaultValue="inbox">
				<TabsList>
					<TabsTab value="inbox">{t.inbox}</TabsTab>
					<TabsTab value="team">{t.team}</TabsTab>
					<TabsTab value="files">{t.files}</TabsTab>
					<TabsTab value="settings">{t.settings}</TabsTab>
				</TabsList>
				{panels(["inbox", "team", "files", "settings"])}
			</Tabs>
			<Tabs defaultValue="general" orientation="vertical">
				<TabsList>
					<TabsTab value="general">{t.general}</TabsTab>
					<TabsTab value="security">{t.security}</TabsTab>
					<TabsTab value="notifications">{t.notifications}</TabsTab>
				</TabsList>
				{panels(["general", "security", "notifications"])}
			</Tabs>
		</div>
	);
}
