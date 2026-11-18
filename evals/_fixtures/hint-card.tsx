import { Popover as BasePopover } from "@base-ui/react/popover";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function HintCard({ ...props }: BasePopover.Root.Props) {
	return <BasePopover.Root {...props} />;
}

function HintCardTrigger({ ...props }: BasePopover.Trigger.Props) {
	return <BasePopover.Trigger data-slot="hint-card-trigger" {...props} />;
}

function HintCardPopup({
	className,
	children,
	align = "center",
	side = "bottom",
	sideOffset = 4,
	...props
}: Omit<BasePopover.Popup.Props, "className"> &
	Pick<BasePopover.Positioner.Props, "align" | "side" | "sideOffset"> & {
		className?: string;
	}) {
	return (
		<BasePopover.Portal data-slot="hint-card-portal">
			<BasePopover.Positioner
				data-slot="hint-card-positioner"
				className="z-50"
				align={align}
				side={side}
				sideOffset={sideOffset}
			>
				<BasePopover.Popup
					data-slot="hint-card-popup"
					className={cn(
						"bg-popover text-popover-foreground relative flex w-96 origin-(--transform-origin) flex-col gap-4 rounded-md border p-4 text-sm shadow-md transition-all duration-500 ease-in outline-none data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0",
						className,
					)}
					{...props}
				>
					{children}
					<BasePopover.Close
						aria-label="Close"
						className="text-muted-foreground hover:text-foreground absolute top-2 right-2 flex size-7 cursor-pointer items-center justify-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
					>
						<XIcon className="size-4" />
					</BasePopover.Close>
				</BasePopover.Popup>
			</BasePopover.Positioner>
		</BasePopover.Portal>
	);
}

function HintCardTitle({
	className,
	...props
}: Omit<BasePopover.Title.Props, "className"> & {
	className?: string;
}) {
	return (
		<BasePopover.Title
			data-slot="hint-card-title"
			className={cn("leading-snug font-medium", className)}
			{...props}
		/>
	);
}

function HintCardDescription({
	className,
	...props
}: Omit<BasePopover.Description.Props, "className"> & {
	className?: string;
}) {
	return (
		<BasePopover.Description
			data-slot="hint-card-description"
			className={cn("text-muted-foreground", className)}
			{...props}
		/>
	);
}

export {
	HintCard,
	HintCardDescription,
	HintCardPopup,
	HintCardTitle,
	HintCardTrigger,
};
