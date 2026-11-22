"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Autocomplete,
	AutocompleteClear,
	AutocompleteCollection,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteInputGroup,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
	AutocompleteSeparator,
} from "@/components/ui/autocomplete";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
	InputGroupText,
} from "@/components/ui/input-group";

const translations = {
	en: {
		search: "Search",
		searchPlaceholder: "e.g. Apple",
		clear: "Clear",
		empty: "No results found.",
		fruits: "Fruits",
		vegetables: "Vegetables",
		apple: "Apple",
		apricot: "Apricot",
		banana: "Banana",
		cherry: "Cherry",
		date: "Date",
		fig: "Fig",
		grape: "Grape",
		mango: "Mango",
		pomegranate: "Pomegranate",
		carrot: "Carrot",
		cucumber: "Cucumber",
		eggplant: "Eggplant",
		onion: "Onion",
		tomato: "Tomato",
	},
	ar: {
		search: "بحث",
		searchPlaceholder: "مثال: تفاح",
		clear: "مسح",
		empty: "لا توجد نتائج.",
		fruits: "الفواكه",
		vegetables: "الخضروات",
		apple: "تفاح",
		apricot: "مشمش",
		banana: "موز",
		cherry: "كرز",
		date: "تمر",
		fig: "تين",
		grape: "عنب",
		mango: "مانجو",
		pomegranate: "رمان",
		carrot: "جزر",
		cucumber: "خيار",
		eggplant: "باذنجان",
		onion: "بصل",
		tomato: "طماطم",
	},
	he: {
		search: "חיפוש",
		searchPlaceholder: "לדוגמה: תפוח",
		clear: "ניקוי",
		empty: "לא נמצאו תוצאות.",
		fruits: "פירות",
		vegetables: "ירקות",
		apple: "תפוח",
		apricot: "משמש",
		banana: "בננה",
		cherry: "דובדבן",
		date: "תמר",
		fig: "תאנה",
		grape: "ענבים",
		mango: "מנגו",
		pomegranate: "רימון",
		carrot: "גזר",
		cucumber: "מלפפון",
		eggplant: "חציל",
		onion: "בצל",
		tomato: "עגבנייה",
	},
} satisfies Translations<Record<string, string>>;

type Key = keyof (typeof translations)["en"];

interface Item {
	value: Key;
	label: string;
}

interface Group {
	value: Key;
	label: string;
	items: Item[];
}

const fruitKeys: Key[] = [
	"apple",
	"apricot",
	"banana",
	"cherry",
	"date",
	"fig",
	"grape",
	"mango",
	"pomegranate",
];

const vegetableKeys: Key[] = [
	"carrot",
	"cucumber",
	"eggplant",
	"onion",
	"tomato",
];

export default function AutocompleteRtlDemo() {
	const { language, dir, t } = useTranslation(translations);

	const fruits = React.useMemo<Item[]>(
		() => fruitKeys.map((value) => ({ value, label: t[value] })),
		[t],
	);
	const groups = React.useMemo<Group[]>(
		() => [
			{ value: "fruits", label: t.fruits, items: fruits },
			{
				value: "vegetables",
				label: t.vegetables,
				items: vegetableKeys.map((value) => ({ value, label: t[value] })),
			},
		],
		[t, fruits],
	);

	return (
		<Autocomplete key={language} items={groups}>
			<AutocompleteInputGroup
				render={<InputGroup className="w-full max-w-sm" />}
			>
				<InputGroupAddon align="inline-start">
					<InputGroupText>
						<SearchIcon />
					</InputGroupText>
				</InputGroupAddon>
				<InputGroupInput
					aria-label={t.search}
					placeholder={t.searchPlaceholder}
					render={<AutocompleteInput />}
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						size="icon-xs"
						variant="ghost"
						render={<AutocompleteClear />}
						aria-label={t.clear}
					>
						<XIcon />
					</InputGroupButton>
				</InputGroupAddon>
			</AutocompleteInputGroup>
			<AutocompletePopup dir={dir}>
				<AutocompleteEmpty>{t.empty}</AutocompleteEmpty>
				<AutocompleteList>
					{(group: Group, index: number) => (
						<React.Fragment key={group.value}>
							{index > 0 && <AutocompleteSeparator />}
							<AutocompleteGroup items={group.items}>
								<AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
								<AutocompleteCollection>
									{(item: Item) => (
										<AutocompleteItem key={item.value} value={item}>
											{item.label}
										</AutocompleteItem>
									)}
								</AutocompleteCollection>
							</AutocompleteGroup>
						</React.Fragment>
					)}
				</AutocompleteList>
			</AutocompletePopup>
		</Autocomplete>
	);
}
