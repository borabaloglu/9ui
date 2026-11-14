import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
	"group/toggle text-foreground hover:bg-accent/50 hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-ring/50 data-pressed:bg-accent data-pressed:text-accent-foreground relative inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,scale] duration-150 ease-out outline-none select-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] focus-visible:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 motion-safe:active:scale-98 any-pointer-coarse:after:absolute any-pointer-coarse:after:size-full any-pointer-coarse:after:min-h-11 any-pointer-coarse:after:min-w-11 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&:is(:active,[data-pressed])]:transition-[border-color,box-shadow,scale]",
	{
		variants: {
			variant: {
				default: "",
				outline:
					"border-border bg-input shadow-xs not-dark:bg-clip-padding not-data-disabled:not-data-pressed:not-active:before:shadow-[0_1px_--theme(--color-black/6%)] dark:bg-clip-border dark:not-data-disabled:not-data-pressed:not-active:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:active,[data-pressed],[data-disabled])]:shadow-none",
			},
			size: {
				sm: "h-7 min-w-7 gap-1 rounded-[min(var(--radius-md),0.75rem)] px-1.5 text-[0.8rem] before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] any-pointer-coarse:h-8 any-pointer-coarse:min-w-8 [&_svg:not([class*='size-'])]:size-3.5",
				default:
					"h-8 min-w-8 gap-1.5 px-2 any-pointer-coarse:h-9 any-pointer-coarse:min-w-9",
				lg: "h-9 min-w-9 gap-1.5 px-2.5 any-pointer-coarse:h-10 any-pointer-coarse:min-w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Toggle({
	className,
	variant,
	size,
	...props
}: Omit<BaseToggle.Props, "className"> &
	VariantProps<typeof toggleVariants> & {
		className?: string;
	}) {
	return (
		<BaseToggle
			data-slot="toggle"
			className={cn(toggleVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Toggle, toggleVariants };
