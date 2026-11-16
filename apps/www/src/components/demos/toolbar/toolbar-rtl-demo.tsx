"use client";

import {
	AlignCenterIcon,
	AlignLeftIcon,
	AlignRightIcon,
	BoldIcon,
	EllipsisIcon,
	ItalicIcon,
	Redo2Icon,
	SearchIcon,
	UnderlineIcon,
	Undo2Icon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarInput,
	ToolbarSeparator,
} from "@/components/ui/toolbar";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const translations = {
	en: {
		editor: "Editor",
		history: "History",
		undo: "Undo",
		redo: "Redo",
		formatting: "Formatting",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
		alignment: "Alignment",
		alignStart: "Align Start",
		alignCenter: "Align Center",
		alignEnd: "Align End",
		textStyle: "Text style",
		paragraph: "Paragraph",
		heading: "Heading",
		quote: "Quote",
		more: "More actions",
		insertTable: "Insert Table",
		insertImage: "Insert Image",
		clearFormatting: "Clear Formatting",
		search: "Search",
	},
	ar: {
		editor: "المحرر",
		history: "السجل",
		undo: "تراجع",
		redo: "إعادة",
		formatting: "التنسيق",
		bold: "غامق",
		italic: "مائل",
		underline: "تسطير",
		alignment: "المحاذاة",
		alignStart: "محاذاة للبداية",
		alignCenter: "توسيط",
		alignEnd: "محاذاة للنهاية",
		textStyle: "نمط النص",
		paragraph: "فقرة",
		heading: "عنوان",
		quote: "اقتباس",
		more: "إجراءات إضافية",
		insertTable: "إدراج جدول",
		insertImage: "إدراج صورة",
		clearFormatting: "مسح التنسيق",
		search: "بحث",
	},
	he: {
		editor: "עורך",
		history: "היסטוריה",
		undo: "ביטול פעולה",
		redo: "ביצוע מחדש",
		formatting: "עיצוב",
		bold: "מודגש",
		italic: "נטוי",
		underline: "קו תחתון",
		alignment: "יישור",
		alignStart: "יישור להתחלה",
		alignCenter: "מרכוז",
		alignEnd: "יישור לסוף",
		textStyle: "סגנון טקסט",
		paragraph: "פסקה",
		heading: "כותרת",
		quote: "ציטוט",
		more: "פעולות נוספות",
		insertTable: "הוספת טבלה",
		insertImage: "הוספת תמונה",
		clearFormatting: "ניקוי עיצוב",
		search: "חיפוש",
	},
} satisfies Translations<Record<string, string>>;

export default function ToolbarRtlDemo() {
	const { dir, t } = useTranslation(translations);

	const history = [
		{ label: t.undo, icon: Undo2Icon },
		{ label: t.redo, icon: Redo2Icon },
	];

	const formats = [
		{ value: "bold", label: t.bold, icon: BoldIcon },
		{ value: "italic", label: t.italic, icon: ItalicIcon },
		{ value: "underline", label: t.underline, icon: UnderlineIcon },
	];

	const alignments = [
		{ value: "start", label: t.alignStart, icon: AlignLeftIcon },
		{ value: "center", label: t.alignCenter, icon: AlignCenterIcon },
		{ value: "end", label: t.alignEnd, icon: AlignRightIcon },
	];

	const styles = [
		{ value: "paragraph", label: t.paragraph },
		{ value: "heading", label: t.heading },
		{ value: "quote", label: t.quote },
	];

	return (
		<TooltipProvider>
			<Toolbar
				className="max-w-full overflow-x-auto before:hidden"
				aria-label={t.editor}
			>
				<ToolbarGroup aria-label={t.history}>
					{history.map(({ label, icon: Icon }) => (
						<Tooltip key={label}>
							<TooltipTrigger
								render={
									<ToolbarButton
										render={<Button variant="ghost" size="icon" />}
										aria-label={label}
									/>
								}
							>
								<Icon className="rtl:-scale-x-100" />
							</TooltipTrigger>
							<TooltipPopup dir={dir} sideOffset={8}>
								{label}
							</TooltipPopup>
						</Tooltip>
					))}
				</ToolbarGroup>
				<ToolbarSeparator />
				<Select items={styles} defaultValue="paragraph">
					<ToolbarButton
						render={
							<SelectTrigger
								aria-label={t.textStyle}
								className="w-28 shrink-0"
							/>
						}
					>
						<SelectValue />
					</ToolbarButton>
					<SelectPopup dir={dir}>
						{styles.map(({ value, label }) => (
							<SelectItem key={value} value={value}>
								{label}
							</SelectItem>
						))}
					</SelectPopup>
				</Select>
				<ToolbarSeparator />
				<ToggleGroup spacing={1} multiple aria-label={t.formatting}>
					{formats.map(({ value, label, icon: Icon }) => (
						<ToolbarButton
							key={value}
							render={<ToggleGroupItem value={value} />}
							aria-label={label}
						>
							<Icon />
						</ToolbarButton>
					))}
				</ToggleGroup>
				<ToolbarSeparator />
				<ToggleGroup
					spacing={1}
					defaultValue={["start"]}
					aria-label={t.alignment}
				>
					{alignments.map(({ value, label, icon: Icon }) => (
						<ToolbarButton
							key={value}
							render={<ToggleGroupItem value={value} />}
							aria-label={label}
						>
							<Icon className="rtl:-scale-x-100" />
						</ToolbarButton>
					))}
				</ToggleGroup>
				<ToolbarSeparator />
				<Menu>
					<ToolbarButton
						render={
							<MenuTrigger render={<Button variant="ghost" size="icon" />} />
						}
						aria-label={t.more}
					>
						<EllipsisIcon />
					</ToolbarButton>
					<MenuPopup dir={dir} align="end">
						<MenuItem>{t.insertTable}</MenuItem>
						<MenuItem>{t.insertImage}</MenuItem>
						<MenuSeparator />
						<MenuItem>{t.clearFormatting}</MenuItem>
					</MenuPopup>
				</Menu>
				<ToolbarSeparator />
				<InputGroup className="w-28 shrink-0">
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
					<ToolbarInput
						render={
							<InputGroupInput placeholder={t.search} aria-label={t.search} />
						}
					/>
				</InputGroup>
			</Toolbar>
		</TooltipProvider>
	);
}
