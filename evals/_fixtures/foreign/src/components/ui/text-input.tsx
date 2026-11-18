import { forwardRef, type InputHTMLAttributes } from "react";

import { cx } from "@/lib/cx";

export const TextInput = forwardRef<
	HTMLInputElement,
	InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
	<input
		ref={ref}
		className={cx(
			"h-10 w-full rounded-sm border border-slate-300 bg-white px-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus-visible:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 disabled:opacity-40 aria-[invalid=true]:border-red-600",
			className,
		)}
		{...props}
	/>
));
TextInput.displayName = "TextInput";
