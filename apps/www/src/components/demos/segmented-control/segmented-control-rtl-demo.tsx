"use client";

import { ColumnsIcon, GridIcon, ListIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

const translations = {
	en: {
		layout: "Layout",
		list: "List",
		grid: "Grid",
		board: "Board",
	},
	ar: {
		layout: "التخطيط",
		list: "قائمة",
		grid: "شبكة",
		board: "لوحة",
	},
	he: {
		layout: "פריסה",
		list: "רשימה",
		grid: "רשת",
		board: "לוח",
	},
} satisfies Translations<Record<string, string>>;

export default function SegmentedControlRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<SegmentedControl defaultValue="list" aria-label={t.layout}>
			<SegmentedControlItem value="list">
				<ListIcon />
				{t.list}
			</SegmentedControlItem>
			<SegmentedControlItem value="grid">
				<GridIcon />
				{t.grid}
			</SegmentedControlItem>
			<SegmentedControlItem value="board">
				<ColumnsIcon />
				{t.board}
			</SegmentedControlItem>
		</SegmentedControl>
	);
}
