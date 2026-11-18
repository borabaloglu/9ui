import { forwardRef, type TextareaHTMLAttributes } from "react";

import { cx } from "@/lib/cx";

export const TextArea = forwardRef<
	HTMLTextAreaElement,
	TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
	<textarea
		ref={ref}
		className={cx(
			"min-h-24 w-full rounded-sm border border-slate-300 bg-white px-3 py-2 text-[15px] text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus-visible:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 disabled:opacity-40 aria-[invalid=true]:border-red-600",
			className,
		)}
		{...props}
	/>
));
TextArea.displayName = "TextArea";
