"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

const translations = {
	en: {
		one: "One",
		two: "Two",
		three: "Three",
	},
	ar: {
		one: "واحد",
		two: "اثنان",
		three: "ثلاثة",
	},
	he: {
		one: "אחת",
		two: "שתיים",
		three: "שלוש",
	},
} satisfies Translations<Record<string, string>>;

export default function ResizableRtlDemo() {
	const { t } = useTranslation(translations);

	return (
		<ResizablePanelGroup className="h-60 max-w-md rounded-lg border">
			<ResizablePanel defaultSize="50%">
				<div className="flex h-full items-center justify-center p-6">
					<span className="text-sm font-medium">{t.one}</span>
				</div>
			</ResizablePanel>
			<ResizableHandle showHandle />
			<ResizablePanel defaultSize="50%">
				<ResizablePanelGroup orientation="vertical">
					<ResizablePanel defaultSize="25%">
						<div className="flex h-full items-center justify-center p-6">
							<span className="text-sm font-medium">{t.two}</span>
						</div>
					</ResizablePanel>
					<ResizableHandle showHandle />
					<ResizablePanel defaultSize="75%">
						<div className="flex h-full items-center justify-center p-6">
							<span className="text-sm font-medium">{t.three}</span>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
