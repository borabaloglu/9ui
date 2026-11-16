"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupOverflow,
	AvatarImage,
} from "@/components/ui/avatar";

const translations = {
	en: { name: "Bora Baloglu", online: "Online", group: "Avatar Group" },
	ar: { name: "بورا بال أوغلو", online: "متصل", group: "مجموعة الصور الرمزية" },
	he: { name: "בורה באלואוגלו", online: "מחובר", group: "קבוצת אווטארים" },
} satisfies Translations<Record<string, string>>;

const people = [
	{ src: "/avatars/p1.jpg", name: "Maya Chen", initials: "MC" },
	{ src: "/avatars/p2.jpg", name: "Emma Wright", initials: "EW" },
	{ src: "/avatars/p3.jpg", name: "Daniel Okafor", initials: "DO" },
];

export default function AvatarRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<div className="flex flex-wrap items-center justify-center gap-6">
			<Avatar>
				<AvatarImage src="/avatars/bora.png" alt={t.name} />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/avatars/bora.png" alt={t.name} />
				<AvatarFallback>BB</AvatarFallback>
				<AvatarBadge className="bg-success">
					<span className="sr-only">{t.online}</span>
				</AvatarBadge>
			</Avatar>
			<AvatarGroup aria-label={t.group}>
				{people.map((person) => (
					<Avatar key={person.name}>
						<AvatarImage src={person.src} alt={person.name} />
						<AvatarFallback>{person.initials}</AvatarFallback>
					</Avatar>
				))}
				<AvatarGroupOverflow>+3</AvatarGroupOverflow>
			</AvatarGroup>
		</div>
	);
}
