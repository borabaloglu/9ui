"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";

const translations = {
	en: {
		quantity: "Quantity",
	},
	ar: {
		quantity: "الكمية",
	},
	he: {
		quantity: "כמות",
	},
} satisfies Translations<Record<string, string>>;

export default function NumberFieldRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<NumberField className="w-36" defaultValue={5} min={0} max={100}>
			<NumberFieldGroup>
				<NumberFieldDecrement />
				<NumberFieldInput aria-label={t.quantity} />
				<NumberFieldIncrement />
			</NumberFieldGroup>
		</NumberField>
	);
}
