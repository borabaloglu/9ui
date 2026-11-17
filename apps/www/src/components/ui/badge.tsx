import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"focus-visible:border-ring focus-visible:ring-ring/50 relative inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border border-transparent font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,scale] duration-150 ease-out outline-none focus-visible:ring-3 focus-visible:outline-hidden focus-visible:duration-0 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3 [button&,a&]:cursor-pointer [button&,a&]:active:transition-[border-color,box-shadow,scale] motion-safe:[button&,a&]:active:scale-98 [button&,a&]:any-pointer-coarse:after:absolute [button&,a&]:any-pointer-coarse:after:size-full [button&,a&]:any-pointer-coarse:after:min-h-11 [button&,a&]:any-pointer-coarse:after:min-w-11",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground [button&,a&]:hover:bg-primary/80 [button&,a&]:active:bg-primary/75",
				outline:
					"border-border bg-input text-foreground [button&,a&]:hover:bg-accent [button&,a&]:hover:text-accent-foreground dark:[button&,a&]:hover:bg-accent/50 [button&,a&]:active:bg-foreground/15 dark:[button&,a&]:active:bg-accent",
				secondary:
					"bg-secondary text-secondary-foreground [button&,a&]:hover:bg-secondary/80 [button&,a&]:active:bg-secondary/60",
				success:
					"bg-success/10 text-success dark:bg-success/20 [button&,a&]:hover:bg-success/20 dark:[button&,a&]:hover:bg-success/30 [button&,a&]:active:bg-success/30 dark:[button&,a&]:active:bg-success/40",
				warning:
					"bg-warning/10 text-warning dark:bg-warning/20 [button&,a&]:hover:bg-warning/20 dark:[button&,a&]:hover:bg-warning/30 [button&,a&]:active:bg-warning/30 dark:[button&,a&]:active:bg-warning/40",
				info: "bg-info/10 text-info dark:bg-info/20 [button&,a&]:hover:bg-info/20 dark:[button&,a&]:hover:bg-info/30 [button&,a&]:active:bg-info/30 dark:[button&,a&]:active:bg-info/40",
				danger:
					"bg-destructive/10 text-destructive dark:bg-destructive/20 [button&,a&]:hover:bg-destructive/20 dark:[button&,a&]:hover:bg-destructive/30 [button&,a&]:active:bg-destructive/30 dark:[button&,a&]:active:bg-destructive/40",
			},
			size: {
				sm: "h-4.5 px-1.5 text-[0.6875rem] has-data-[icon=inline-end]:pe-1 has-data-[icon=inline-start]:ps-1 [&_svg:not([class*='size-'])]:size-2.5",
				default:
					"h-5 px-2 text-xs has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5",
				lg: "h-6 px-2.5 text-sm has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2 [&_svg:not([class*='size-'])]:size-3.5",
				"icon-sm":
					"size-4.5 [&_svg:not([class*='size-'])]:size-2.5 motion-safe:[button&,a&]:active:scale-95",
				icon: "size-5 motion-safe:[button&,a&]:active:scale-95",
				"icon-lg":
					"size-6 [&_svg:not([class*='size-'])]:size-3.5 motion-safe:[button&,a&]:active:scale-95",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type BadgeProps = useRender.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants>;

function Badge({
	className,
	variant = "default",
	size = "default",
	render,
	...props
}: BadgeProps) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(
			{
				className: cn(badgeVariants({ variant, size }), className),
			},
			props,
		),
		render,
		state: {
			slot: "badge",
			variant,
			size,
		},
	});
}

export type { BadgeProps };
export { Badge, badgeVariants };
