import { type AnchorHTMLAttributes, forwardRef } from "react";

import { cx } from "@/lib/cx";

export const LinkButton = forwardRef<
	HTMLAnchorElement,
	AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
	<a
		ref={ref}
		className={cx(
			"inline-flex h-10 items-center justify-center gap-2 rounded-sm bg-slate-900 px-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
			className,
		)}
		{...props}
	/>
));
LinkButton.displayName = "LinkButton";
