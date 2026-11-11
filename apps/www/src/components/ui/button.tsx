"use client";

import type * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { Spinner } from "@/components/ui/spinner";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,scale,opacity] duration-150 ease-out outline-none select-none before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)] focus-visible:ring-3 aria-invalid:ring-3 data-disabled:pointer-events-none data-disabled:opacity-50 data-loading:text-transparent data-loading:transition-none any-pointer-coarse:after:absolute any-pointer-coarse:after:size-full any-pointer-coarse:after:min-h-11 any-pointer-coarse:after:min-w-11 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 motion-safe:[&:not([data-variant=link]):not([aria-haspopup])]:active:scale-98",
	{
		variants: {
			variant: {
				default:
					"border-primary bg-primary text-primary-foreground shadow-primary/30 hover:bg-primary/80 aria-expanded:bg-primary/80 *:data-[slot=button-loading-indicator]:text-primary-foreground shadow-xs not-data-disabled:inset-shadow-[0_1px_--theme(--color-white/20%)] dark:shadow-none [&:active]:inset-shadow-[0_1px_--theme(--color-black/12%)] [&:is(:active,[data-disabled])]:shadow-none",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary/80 *:data-[slot=button-loading-indicator]:text-secondary-foreground",
				ghost:
					"text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground *:data-[slot=button-loading-indicator]:text-foreground dark:aria-expanded:bg-accent/50 dark:hover:bg-accent/50",
				outline:
					"border-border bg-input text-foreground hover:bg-accent hover:text-accent-foreground aria-expanded:bg-accent aria-expanded:text-accent-foreground *:data-[slot=button-loading-indicator]:text-foreground dark:aria-expanded:bg-accent/50 dark:hover:bg-accent/50 shadow-xs not-dark:bg-clip-padding not-data-disabled:not-active:before:shadow-[0_1px_--theme(--color-black/6%)] dark:bg-clip-border dark:not-data-disabled:not-active:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:active,[data-disabled])]:shadow-none",
				link: "text-foreground *:data-[slot=button-loading-indicator]:text-foreground underline-offset-4 hover:underline",
				destructive:
					"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/60 focus-visible:ring-destructive/30 aria-expanded:bg-destructive/20 *:data-[slot=button-loading-indicator]:text-destructive dark:bg-destructive/20 dark:aria-expanded:bg-destructive/30 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/30",
				"destructive-outline":
					"border-border bg-input text-destructive hover:border-destructive/30 hover:bg-destructive/5 focus-visible:border-destructive/60 focus-visible:ring-destructive/30 aria-expanded:border-destructive/30 aria-expanded:bg-destructive/5 *:data-[slot=button-loading-indicator]:text-destructive dark:aria-expanded:bg-destructive/10 dark:focus-visible:ring-destructive/40 dark:hover:bg-destructive/10 shadow-xs not-dark:bg-clip-padding not-data-disabled:not-active:before:shadow-[0_1px_--theme(--color-black/6%)] dark:bg-clip-border dark:not-data-disabled:not-active:before:shadow-[0_-1px_--theme(--color-white/8%)] [&:is(:active,[data-disabled])]:shadow-none",
			},
			size: {
				xs: "h-6 gap-1 rounded-[min(var(--radius-md),0.625rem)] px-2 text-xs before:rounded-[calc(min(var(--radius-md),0.625rem)-1px)] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 any-pointer-coarse:h-7 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-7 gap-1 rounded-[min(var(--radius-md),0.75rem)] px-2.5 text-[0.8rem] before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 any-pointer-coarse:h-8 [&_svg:not([class*='size-'])]:size-3.5",
				default:
					"h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 any-pointer-coarse:h-9",
				lg: "h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 any-pointer-coarse:h-10",
				xl: "h-10 gap-2 px-3.5 text-base has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 any-pointer-coarse:h-11 [&_svg:not([class*='size-'])]:size-4.5",
				"icon-xs":
					"size-6 rounded-[min(var(--radius-md),0.625rem)] before:rounded-[calc(min(var(--radius-md),0.625rem)-1px)] any-pointer-coarse:size-7 [&_svg:not([class*='size-'])]:size-3",
				"icon-sm":
					"size-7 rounded-[min(var(--radius-md),0.75rem)] before:rounded-[calc(min(var(--radius-md),0.75rem)-1px)] any-pointer-coarse:size-8 [&_svg:not([class*='size-'])]:size-3.5",
				icon: "size-8 any-pointer-coarse:size-9",
				"icon-lg": "size-9 any-pointer-coarse:size-10",
				"icon-xl":
					"size-10 any-pointer-coarse:size-11 [&_svg:not([class*='size-'])]:size-4.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonProps = VariantProps<typeof buttonVariants> &
	React.ComponentProps<typeof BaseButton> & {
		loading?: boolean;
	};

function Button({
	className,
	variant,
	size,
	loading = false,
	disabled,
	children,
	...props
}: ButtonProps) {
	return (
		<BaseButton
			data-slot="button"
			data-variant={variant}
			data-loading={loading ? "" : undefined}
			aria-busy={loading || undefined}
			disabled={disabled || loading}
			focusableWhenDisabled={loading}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{children}
			{loading && (
				<Spinner
					className="pointer-events-none absolute"
					data-slot="button-loading-indicator"
				/>
			)}
		</BaseButton>
	);
}

export type { ButtonProps };
export { Button, buttonVariants };
