import type * as React from "react";
import { Dialog as BaseSheet } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof BaseSheet.Root>) {
	return <BaseSheet.Root {...props} />;
}

function SheetTrigger({
	...props
}: React.ComponentProps<typeof BaseSheet.Trigger>) {
	return <BaseSheet.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
	...props
}: React.ComponentProps<typeof BaseSheet.Close>) {
	return <BaseSheet.Close data-slot="sheet-close" {...props} />;
}

function SheetBackdrop({
	className,
	...props
}: React.ComponentProps<typeof BaseSheet.Backdrop>) {
	return (
		<BaseSheet.Backdrop
			data-slot="sheet-backdrop"
			className={cn(
				"fixed inset-0 z-50 min-h-dvh bg-black/30 transition-opacity duration-400 data-ending-style:opacity-0 data-ending-style:duration-250 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs supports-[-webkit-touch-callout:none]:absolute",
				className,
			)}
			{...props}
		/>
	);
}

function SheetPopup({
	className,
	children,
	side = "right",
	variant = "default",
	showCloseButton = true,
	...props
}: React.ComponentProps<typeof BaseSheet.Popup> & {
	side?: "top" | "right" | "bottom" | "left";
	variant?: "default" | "inset";
	showCloseButton?: boolean;
}) {
	return (
		<BaseSheet.Portal data-slot="sheet-portal">
			<SheetBackdrop />
			<BaseSheet.Viewport
				data-slot="sheet-viewport"
				className={cn(
					"fixed inset-0 z-50 flex",
					side === "top" && "flex-col justify-start pb-12",
					side === "right" && "justify-end",
					side === "bottom" && "flex-col justify-end pt-12",
					side === "left" && "justify-start",
					variant === "inset" && "sm:p-4",
				)}
			>
				<BaseSheet.Popup
					data-slot="sheet-popup"
					data-side={side}
					data-variant={variant}
					className={cn(
						"group/sheet-popup bg-popover text-popover-foreground ease-drawer relative flex flex-col gap-4 overflow-y-auto overscroll-contain pt-(--sheet-top) pb-(--sheet-bottom) text-sm shadow-lg transition-[translate,opacity,filter] duration-400 outline-none [--sheet-offset:0px] data-ending-style:duration-250 data-nested-dialog-open:brightness-90 motion-reduce:data-ending-style:opacity-0 motion-reduce:data-starting-style:opacity-0 dark:data-nested-dialog-open:brightness-75",
						side === "top" &&
							"max-h-full w-full border-b [--sheet-bottom:0px] [--sheet-top:env(safe-area-inset-top,0px)] motion-safe:data-ending-style:-translate-y-[calc(100%+var(--sheet-offset))] motion-safe:data-starting-style:-translate-y-[calc(100%+var(--sheet-offset))]",
						side === "right" &&
							"h-full w-[calc(100%-(--spacing(12)))] max-w-sm border-l [--sheet-bottom:env(safe-area-inset-bottom,0px)] [--sheet-top:env(safe-area-inset-top,0px)] motion-safe:data-ending-style:translate-x-[calc(100%+var(--sheet-offset))] motion-safe:data-starting-style:translate-x-[calc(100%+var(--sheet-offset))]",
						side === "bottom" &&
							"max-h-full w-full border-t [--sheet-bottom:env(safe-area-inset-bottom,0px)] [--sheet-top:0px] motion-safe:data-ending-style:translate-y-[calc(100%+var(--sheet-offset))] motion-safe:data-starting-style:translate-y-[calc(100%+var(--sheet-offset))]",
						side === "left" &&
							"h-full w-[calc(100%-(--spacing(12)))] max-w-sm border-r [--sheet-bottom:env(safe-area-inset-bottom,0px)] [--sheet-top:env(safe-area-inset-top,0px)] motion-safe:data-ending-style:-translate-x-[calc(100%+var(--sheet-offset))] motion-safe:data-starting-style:-translate-x-[calc(100%+var(--sheet-offset))]",
						variant === "inset" &&
							"bg-size-[var(--radius-2xl)_var(--radius-2xl),var(--radius-2xl)_var(--radius-2xl),calc(100%-2*var(--radius-2xl))_1px] bg-position-[0_0,100%_0,50%_0] bg-no-repeat bg-origin-border sm:rounded-2xl sm:border sm:[--sheet-bottom:0px] sm:[--sheet-offset:--spacing(4)] sm:[--sheet-top:0px] sm:not-dark:shadow-[0_1px_--theme(--color-black/6%),var(--shadow-lg)] sm:dark:bg-[radial-gradient(circle_at_var(--radius-2xl)_calc(var(--radius-2xl)+1px),transparent_calc(var(--radius-2xl)-0.5px),--theme(--color-white/8%)_calc(var(--radius-2xl)+0.5px)),radial-gradient(circle_at_0_calc(var(--radius-2xl)+1px),transparent_calc(var(--radius-2xl)-0.5px),--theme(--color-white/8%)_calc(var(--radius-2xl)+0.5px)),linear-gradient(--theme(--color-white/8%),--theme(--color-white/8%))]",
						className,
					)}
					{...props}
				>
					{children}
					{showCloseButton && (
						<BaseSheet.Close
							data-slot="sheet-close"
							aria-label="Close"
							render={
								<Button
									variant="ghost"
									size="icon-sm"
									className="absolute end-2 top-[calc(--spacing(2)+var(--sheet-top))]"
								/>
							}
						>
							<XIcon />
						</BaseSheet.Close>
					)}
				</BaseSheet.Popup>
			</BaseSheet.Viewport>
		</BaseSheet.Portal>
	);
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-header"
			className={cn(
				"flex flex-col gap-1.5 p-4 group-has-[>[data-slot=sheet-close]]/sheet-popup:pe-12",
				className,
			)}
			{...props}
		/>
	);
}

function SheetPanel({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="sheet-panel"
			className={cn(
				"-my-1 min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-1",
				className,
			)}
			{...props}
		/>
	);
}

function SheetFooter({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"div"> & {
	variant?: "default" | "bare";
}) {
	return (
		<div
			data-slot="sheet-footer"
			data-variant={variant}
			className={cn(
				"mt-auto flex flex-col-reverse gap-2 p-4 sm:flex-row sm:justify-end",
				variant === "default" &&
					"bg-muted/50 -mb-(--sheet-bottom) border-t pb-[calc(--spacing(4)+var(--sheet-bottom))]",
				className,
			)}
			{...props}
		/>
	);
}

function SheetTitle({
	className,
	...props
}: React.ComponentProps<typeof BaseSheet.Title>) {
	return (
		<BaseSheet.Title
			data-slot="sheet-title"
			className={cn("text-base leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function SheetDescription({
	className,
	...props
}: React.ComponentProps<typeof BaseSheet.Description>) {
	return (
		<BaseSheet.Description
			data-slot="sheet-description"
			className={cn(
				"text-muted-foreground *:[a]:hover:text-foreground text-sm text-pretty *:[a]:underline *:[a]:underline-offset-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Sheet,
	SheetBackdrop,
	SheetClose,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetPopup,
	SheetTitle,
	SheetTrigger,
};
