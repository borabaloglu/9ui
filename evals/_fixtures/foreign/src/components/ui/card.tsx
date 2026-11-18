import { forwardRef, type HTMLAttributes } from "react";

import { cx } from "@/lib/cx";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cx(
				"rounded-sm border border-slate-200 bg-white p-6 shadow-sm",
				className,
			)}
			{...props}
		/>
	),
);
Card.displayName = "Card";

export const CardTitle = forwardRef<
	HTMLHeadingElement,
	HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cx("truncate text-lg font-semibold text-slate-900", className)}
		{...props}
	/>
));
CardTitle.displayName = "CardTitle";
