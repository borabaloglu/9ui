"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const translations = {
	en: {
		previous: "Previous",
		next: "Next",
		goToPrevious: "Go to previous page",
		goToNext: "Go to next page",
	},
	ar: {
		previous: "السابق",
		next: "التالي",
		goToPrevious: "الانتقال إلى الصفحة السابقة",
		goToNext: "الانتقال إلى الصفحة التالية",
	},
	he: {
		previous: "הקודם",
		next: "הבא",
		goToPrevious: "מעבר לעמוד הקודם",
		goToNext: "מעבר לעמוד הבא",
	},
} satisfies Translations<Record<string, string>>;

export default function PaginationRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						text={t.previous}
						aria-label={t.goToPrevious}
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" active>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" text={t.next} aria-label={t.goToNext} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
