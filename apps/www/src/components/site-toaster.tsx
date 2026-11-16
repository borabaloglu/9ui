"use client";

import * as React from "react";

import { Toaster } from "@/components/ui/sonner";

export const SiteToaster = () => {
	const [dir, setDir] = React.useState<"ltr" | "rtl">("ltr");

	React.useEffect(() => {
		const handleInteraction = (event: Event) => {
			const target = event.target;
			if (!(target instanceof Element)) return;
			if (target.closest("[data-sonner-toaster]")) return;
			const preview = target.closest("[data-direction-preview]");
			setDir(preview?.getAttribute("dir") === "rtl" ? "rtl" : "ltr");
		};

		document.addEventListener("pointerdown", handleInteraction, true);
		document.addEventListener("keydown", handleInteraction, true);

		return () => {
			document.removeEventListener("pointerdown", handleInteraction, true);
			document.removeEventListener("keydown", handleInteraction, true);
		};
	}, []);

	return <Toaster dir={dir} />;
};
