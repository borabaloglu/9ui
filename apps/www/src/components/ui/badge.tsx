import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"focus-visible:border-ring focus-visible:ring-ring/50 relative inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border border-transparent font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,scale] duration-150 ease-out outline-none focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3 [button&,a&]:cursor-pointer motion-safe:[button&,a&]:active:scale-98 [button&,a&]:any-pointer-coarse:after:absolute [button&,a&]:any-pointer-coarse:after:size-full [button&,a&]:any-pointer-coarse:after:min-h-11 [button&,a&]:any-pointer-coarse:after:min-w-11",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground [button&,a&]:hover:bg-primary/80",
				outline:
					"border-border bg-input text-foreground [button&,a&]:hover:bg-accent dark:[button&,a&]:hover:bg-accent/50",
				secondary:
					"bg-secondary text-secondary-foreground [button&,a&]:hover:bg-secondary/80",
				success:
					"bg-success/10 text-success dark:bg-success/20 [button&,a&]:hover:bg-success/20 dark:[button&,a&]:hover:bg-success/30",
				warning:
					"bg-warning/10 text-warning dark:bg-warning/20 [button&,a&]:hover:bg-warning/20 dark:[button&,a&]:hover:bg-warning/30",
				info: "bg-info/10 text-info dark:bg-info/20 [button&,a&]:hover:bg-info/20 dark:[button&,a&]:hover:bg-info/30",
				danger:
					"bg-destructive/10 text-destructive dark:bg-destructive/20 [button&,a&]:hover:bg-destructive/20 dark:[button&,a&]:hover:bg-destructive/30",
			},
			size: {
				sm: "h-4.5 px-1.5 text-[10px] has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 any-pointer-coarse:text-[11px] [&_svg:not([class*='size-'])]:size-2.5",
				default:
					"h-5 px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
				lg: "h-6 px-2.5 text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
				"icon-sm": "size-4.5 [&_svg:not([class*='size-'])]:size-2.5",
				icon: "size-5",
				"icon-lg": "size-6 [&_svg:not([class*='size-'])]:size-3.5",
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
