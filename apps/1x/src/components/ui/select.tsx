import * as React from "react"
import { Select as BaseSelect } from "@base-ui-components/react/select"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const SelectGroup = BaseSelect.Group
SelectGroup.displayName = "SelectGroup"

const Select = <T,>(props: BaseSelect.Root.Props<T>) => (
	<BaseSelect.Root alignItemToTrigger={false} modal={false} {...props} />
)
Select.displayName = "Select"

const SelectTrigger = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ children, className, ...props }, ref) => (
	<BaseSelect.Trigger
		ref={ref}
		className={cn(
			"flex h-9 cursor-pointer items-center justify-between rounded-md border bg-popover px-4 py-2 text-popover-foreground focus:outline-none focus:ring-1 focus:ring-ring data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:size-4",
			className
		)}
		{...props}
	>
		{children}
		<BaseSelect.Icon>
			<ChevronDownIcon />
		</BaseSelect.Icon>
	</BaseSelect.Trigger>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectValue = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Value>
>(({ className, ...props }, ref) => (
	<BaseSelect.Value ref={ref} className={cn("text-sm", className)} {...props} />
))
SelectValue.displayName = "SelectValue"

interface SelectContentProps
	extends React.ComponentPropsWithoutRef<typeof BaseSelect.Popup> {
	positionerProps?: BaseSelect.Positioner.Props
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
	({ children, className, positionerProps, ...props }, ref) => (
		<BaseSelect.Positioner sideOffset={4} {...positionerProps} className="z-10">
			<BaseSelect.Popup
				ref={ref}
				className={cn(
					"w-[--anchor-width] origin-[var(--transform-origin)] overflow-y-auto overscroll-contain rounded-md border bg-popover p-1.5 text-sm text-popover-foreground shadow-sm outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none",
					className
				)}
				{...props}
			>
				{children}
			</BaseSelect.Popup>
		</BaseSelect.Positioner>
	)
)
SelectContent.displayName = "SelectContent"

const SelectItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ children, className, ...props }, ref) => (
	<BaseSelect.Item
		ref={ref}
		className={cn(
			"flex select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
			className
		)}
		{...props}
	>
		<div className="size-4">
			<BaseSelect.ItemIndicator>
				<CheckIcon className="size-full" />
			</BaseSelect.ItemIndicator>
		</div>
		<BaseSelect.ItemText>{children}</BaseSelect.ItemText>
	</BaseSelect.Item>
))
SelectItem.displayName = "SelectItem"

const SelectGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(({ className, ...props }, ref) => (
	<BaseSelect.GroupLabel
		ref={ref}
		className={cn(
			"px-2 py-1.5 text-sm font-medium text-muted-foreground",
			className
		)}
		{...props}
	/>
))
SelectGroupLabel.displayName = "SelectGroupLabel"

const SelectSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseSelect.Separator>
>(({ className, ...props }, ref) => (
	<BaseSelect.Separator
		ref={ref}
		className={cn("-mx-1 my-1 h-px bg-muted", className)}
		{...props}
	/>
))
SelectSeparator.displayName = "SelectSeparator"

export {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectGroup,
	SelectGroupLabel,
	SelectSeparator,
}
