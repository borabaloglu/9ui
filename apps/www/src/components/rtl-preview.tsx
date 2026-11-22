"use client";

import type * as React from "react";
import { DirectionProvider } from "@base-ui/react/direction-provider";
import { InfoIcon } from "lucide-react";

import {
	LanguageProvider,
	LanguageSelector,
	useLanguage,
} from "@/components/language-selector";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverDescription,
	PopoverPopup,
	PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

interface RtlPreviewProps {
	previewClassName?: string;
	children: React.ReactNode;
}

export const RtlPreview = ({ previewClassName, children }: RtlPreviewProps) => (
	<LanguageProvider>
		<div className="flex h-12 items-center justify-between gap-2 border-b px-3">
			<LanguageSelector className="w-28" />
			<Popover>
				<PopoverTrigger
					render={
						<Button
							variant="ghost"
							size="icon-sm"
							aria-label="About the translations"
							className="text-muted-foreground"
						/>
					}
				>
					<InfoIcon />
				</PopoverTrigger>
				<PopoverPopup side="bottom" align="end" className="w-64">
					<PopoverDescription>
						The Arabic and Hebrew text in these demos was translated with AI for
						demonstration only, and may contain mistakes.
					</PopoverDescription>
				</PopoverPopup>
			</Popover>
		</div>
		<DirectionalArea className={previewClassName}>{children}</DirectionalArea>
	</LanguageProvider>
);

const DirectionalArea = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const { language, dir } = useLanguage();

	return (
		<DirectionProvider direction={dir}>
			<div
				dir={dir}
				lang={language}
				data-direction-preview=""
				className={cn(
					"relative flex min-h-[200px] items-center justify-center p-10",
					className,
				)}
			>
				{children}
			</div>
		</DirectionProvider>
	);
};
