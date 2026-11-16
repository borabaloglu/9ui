"use client";

import { useMemo } from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Select,
	SelectGroup,
	SelectGroupLabel,
	SelectItem,
	SelectPopup,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const translations = {
	en: {
		produce: "Produce",
		selectItem: "Select an item",
		fruits: "Fruits",
		vegetables: "Vegetables",
		apple: "Apple",
		banana: "Banana",
		blueberry: "Blueberry",
		grape: "Grape",
		carrot: "Carrot",
		potato: "Potato",
		tomato: "Tomato",
		onion: "Onion",
	},
	ar: {
		produce: "المنتجات",
		selectItem: "اختر عنصرًا",
		fruits: "الفواكه",
		vegetables: "الخضروات",
		apple: "تفاح",
		banana: "موز",
		blueberry: "توت أزرق",
		grape: "عنب",
		carrot: "جزر",
		potato: "بطاطس",
		tomato: "طماطم",
		onion: "بصل",
	},
	he: {
		produce: "תוצרת",
		selectItem: "בחירת פריט",
		fruits: "פירות",
		vegetables: "ירקות",
		apple: "תפוח",
		banana: "בננה",
		blueberry: "אוכמנית",
		grape: "ענבים",
		carrot: "גזר",
		potato: "תפוח אדמה",
		tomato: "עגבנייה",
		onion: "בצל",
	},
} satisfies Translations<Record<string, string>>;

type Key = keyof (typeof translations)["en"];

const fruitKeys: Key[] = ["apple", "banana", "blueberry", "grape"];
const vegetableKeys: Key[] = ["carrot", "potato", "tomato", "onion"];

export default function SelectRtlDemo() {
	const { dir, t } = useTranslation(translations);

	const fruits = useMemo(
		() => fruitKeys.map((value) => ({ label: t[value], value })),
		[t],
	);
	const vegetables = useMemo(
		() => vegetableKeys.map((value) => ({ label: t[value], value })),
		[t],
	);

	return (
		<Select items={[...fruits, ...vegetables]}>
			<SelectTrigger aria-label={t.produce} className="w-44">
				<SelectValue placeholder={t.selectItem} />
			</SelectTrigger>
			<SelectPopup dir={dir}>
				<SelectGroup>
					<SelectGroupLabel>{t.fruits}</SelectGroupLabel>
					{fruits.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectGroupLabel>{t.vegetables}</SelectGroupLabel>
					{vegetables.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectPopup>
		</Select>
	);
}
