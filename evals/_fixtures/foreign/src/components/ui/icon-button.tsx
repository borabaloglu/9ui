import { type ButtonHTMLAttributes, forwardRef } from "react";

import { cx } from "@/lib/cx";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	label: string;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	({ className, label, ...props }, ref) => (
		<button
			ref={ref}
			aria-label={label}
			className={cx(
				"inline-flex h-10 w-10 items-center justify-center rounded-sm text-slate-900 transition-all duration-300 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-40",
				className,
			)}
			{...props}
		/>
	),
);
IconButton.displayName = "IconButton";
