import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cx } from "@/lib/cx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	tone?: "solid" | "quiet";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, tone = "solid", ...props }, ref) => (
		<button
			ref={ref}
			className={cx(
				"inline-flex h-10 items-center justify-center gap-2 rounded-sm px-4 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40",
				tone === "solid" && "bg-slate-900 text-white hover:bg-slate-700",
				tone === "quiet" && "text-slate-900 hover:bg-slate-100",
				className,
			)}
			{...props}
		/>
	),
);
Button.displayName = "Button";
