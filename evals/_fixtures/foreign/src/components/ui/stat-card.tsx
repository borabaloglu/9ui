import { forwardRef, type HTMLAttributes } from "react";

import { cx } from "@/lib/cx";

export const StatCard = forwardRef<
	HTMLDivElement,
	HTMLAttributes<HTMLDivElement> & { label: string; value: string }
>(({ className, label, value, ...props }, ref) => (
	<div
		ref={ref}
		className={cx(
			"rounded-sm border border-slate-200 bg-white p-6 shadow-sm",
			className,
		)}
		{...props}
	>
		<p className="truncate text-sm text-slate-500">{label}</p>
		<p className="text-2xl font-semibold text-slate-900">{value}</p>
	</div>
));
StatCard.displayName = "StatCard";
