"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Menubar,
	MenubarCheckboxItem,
	MenubarItem,
	MenubarMenu,
	MenubarPopup,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubPopup,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";

const translations = {
	en: {
		file: "File",
		newFile: "New File",
		newWindow: "New Window",
		open: "Open",
		openFolder: "Open Folder",
		openRecent: "Open Recent",
		save: "Save",
		saveAs: "Save As",
		closeWindow: "Close Window",
		edit: "Edit",
		undo: "Undo",
		redo: "Redo",
		cut: "Cut",
		copy: "Copy",
		paste: "Paste",
		find: "Find",
		replace: "Replace",
		view: "View",
		appearance: "Appearance",
		system: "System",
		light: "Light",
		dark: "Dark",
		toggleSidebar: "Show/Hide Sidebar",
		commandPalette: "Command Palette",
		expandTabs: "Expand Tabs",
		zoomIn: "Zoom In",
		zoomOut: "Zoom Out",
		resetZoom: "Reset Zoom",
		showToolbar: "Show Toolbar",
		showStatusBar: "Show Status Bar",
		help: "Help",
		gettingStarted: "Getting Started",
		reportIssue: "Report Issue",
		checkUpdates: "Check for Updates",
		contactTeam: "Contact the Team",
	},
	ar: {
		file: "الملف",
		newFile: "ملف جديد",
		newWindow: "نافذة جديدة",
		open: "فتح",
		openFolder: "فتح مجلد",
		openRecent: "فتح الأخيرة",
		save: "حفظ",
		saveAs: "حفظ باسم",
		closeWindow: "إغلاق النافذة",
		edit: "تعديل",
		undo: "تراجع",
		redo: "إعادة",
		cut: "قص",
		copy: "نسخ",
		paste: "لصق",
		find: "بحث",
		replace: "استبدال",
		view: "عرض",
		appearance: "المظهر",
		system: "النظام",
		light: "فاتح",
		dark: "داكن",
		toggleSidebar: "إظهار/إخفاء الشريط الجانبي",
		commandPalette: "لوحة الأوامر",
		expandTabs: "توسيع علامات التبويب",
		zoomIn: "تكبير",
		zoomOut: "تصغير",
		resetZoom: "إعادة ضبط التكبير",
		showToolbar: "إظهار شريط الأدوات",
		showStatusBar: "إظهار شريط الحالة",
		help: "المساعدة",
		gettingStarted: "البدء",
		reportIssue: "الإبلاغ عن مشكلة",
		checkUpdates: "التحقق من التحديثات",
		contactTeam: "التواصل مع الفريق",
	},
	he: {
		file: "קובץ",
		newFile: "קובץ חדש",
		newWindow: "חלון חדש",
		open: "פתיחה",
		openFolder: "פתיחת תיקייה",
		openRecent: "פתיחת אחרונים",
		save: "שמירה",
		saveAs: "שמירה בשם",
		closeWindow: "סגירת חלון",
		edit: "עריכה",
		undo: "ביטול פעולה",
		redo: "ביצוע מחדש",
		cut: "גזירה",
		copy: "העתקה",
		paste: "הדבקה",
		find: "חיפוש",
		replace: "החלפה",
		view: "תצוגה",
		appearance: "מראה",
		system: "מערכת",
		light: "בהיר",
		dark: "כהה",
		toggleSidebar: "הצגה/הסתרה של סרגל הצד",
		commandPalette: "לוח פקודות",
		expandTabs: "הרחבת כרטיסיות",
		zoomIn: "הגדלה",
		zoomOut: "הקטנה",
		resetZoom: "איפוס תצוגה",
		showToolbar: "הצגת סרגל כלים",
		showStatusBar: "הצגת שורת מצב",
		help: "עזרה",
		gettingStarted: "תחילת העבודה",
		reportIssue: "דיווח על בעיה",
		checkUpdates: "בדיקת עדכונים",
		contactTeam: "יצירת קשר עם הצוות",
	},
} satisfies Translations<Record<string, string>>;

export default function MenubarRtlDemo() {
	const { dir, t } = useTranslation(translations);

	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>{t.file}</MenubarTrigger>
				<MenubarPopup dir={dir} className="min-w-48">
					<MenubarItem>
						{t.newFile}
						<MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.newWindow}
						<MenubarShortcut>⇧⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						{t.open}
						<MenubarShortcut>⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.openFolder}
						<MenubarShortcut>⇧⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled>{t.openRecent}</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						{t.save}
						<MenubarShortcut>⌘S</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.saveAs}
						<MenubarShortcut>⇧⌘S</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						{t.closeWindow}
						<MenubarShortcut>⌘W</MenubarShortcut>
					</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>{t.edit}</MenubarTrigger>
				<MenubarPopup dir={dir} className="min-w-40">
					<MenubarItem>
						{t.undo}
						<MenubarShortcut>⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.redo}
						<MenubarShortcut>⌘Y</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						{t.cut}
						<MenubarShortcut>⌘X</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.copy}
						<MenubarShortcut>⌘C</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.paste}
						<MenubarShortcut>⌘V</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						{t.find}
						<MenubarShortcut>⌘F</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.replace}
						<MenubarShortcut>⌥⌘F</MenubarShortcut>
					</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>{t.view}</MenubarTrigger>
				<MenubarPopup dir={dir} className="min-w-56">
					<MenubarSub>
						<MenubarSubTrigger>{t.appearance}</MenubarSubTrigger>
						<MenubarSubPopup dir={dir}>
							<MenubarRadioGroup defaultValue="system">
								<MenubarRadioItem value="system">{t.system}</MenubarRadioItem>
								<MenubarRadioItem value="light">{t.light}</MenubarRadioItem>
								<MenubarRadioItem value="dark">{t.dark}</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarSubPopup>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						{t.toggleSidebar}
						<MenubarShortcut>⌃⌥⌘*</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.commandPalette}
						<MenubarShortcut>⇧⌘P</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>{t.expandTabs}</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						{t.zoomIn}
						<MenubarShortcut>⌘+</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.zoomOut}
						<MenubarShortcut>⌘-</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						{t.resetZoom}
						<MenubarShortcut>⌘0</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarCheckboxItem defaultChecked>
						{t.showToolbar}
					</MenubarCheckboxItem>
					<MenubarCheckboxItem>{t.showStatusBar}</MenubarCheckboxItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>{t.help}</MenubarTrigger>
				<MenubarPopup dir={dir} className="min-w-48">
					<MenubarItem>{t.gettingStarted}</MenubarItem>
					<MenubarItem>{t.reportIssue}</MenubarItem>
					<MenubarItem>{t.checkUpdates}</MenubarItem>
					<MenubarItem>{t.contactTeam}</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
		</Menubar>
	);
}
