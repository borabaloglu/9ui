import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
	className,
	...props
}: Omit<BaseCheckbox.Root.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseCheckbox.Root
			data-slot="checkbox"
			className={cn(
				"bg-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:border-destructive/60 aria-invalid:ring-destructive/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground dark:aria-invalid:ring-destructive/40 aria-invalid:data-checked:border-primary aria-invalid:data-indeterminate:border-primary not-data-disabled:data-unchecked:[&:is(:active,label:active_*,label:active+*,:has(+input+label:active,+input+input+label:active))]:bg-foreground/10 dark:not-data-disabled:data-unchecked:[&:is(:active,label:active_*,label:active+*,:has(+input+label:active,+input+input+label:active))]:bg-accent not-data-disabled:not-data-unchecked:[&:is(:active,label:active_*,label:active+*,:has(+input+label:active,+input+input+label:active))]:bg-primary/75 relative inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border shadow-xs transition-[background-color,border-color,box-shadow,scale] duration-150 ease-out outline-none not-dark:bg-clip-padding before:pointer-events-none before:absolute before:inset-0 before:rounded-[3px] not-data-disabled:not-data-checked:not-data-indeterminate:not-aria-invalid:before:shadow-[0_1px_--theme(--color-black/6%)] after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 focus-visible:outline-hidden focus-visible:duration-0 data-disabled:cursor-not-allowed data-disabled:opacity-50 motion-safe:not-data-disabled:active:scale-95 motion-safe:not-data-disabled:in-[label:active]:scale-95 motion-safe:not-data-disabled:has-[+input+label:active,+input+input+label:active]:scale-95 dark:not-data-disabled:not-data-checked:not-data-indeterminate:not-aria-invalid:before:shadow-[0_-1px_--theme(--color-white/8%)] any-pointer-coarse:size-5 any-pointer-coarse:after:-inset-[13px] [&:is([data-disabled],[data-checked],[data-indeterminate],[aria-invalid=true])]:shadow-none motion-safe:not-data-disabled:[label:active+&]:scale-95",
				className,
			)}
			{...props}
		>
			<BaseCheckbox.Indicator
				data-slot="checkbox-indicator"
				className="group/checkbox-indicator flex items-center justify-center [&>svg]:size-3 any-pointer-coarse:[&>svg]:size-3.5"
			>
				<CheckIcon
					strokeWidth={3}
					className="group-data-indeterminate/checkbox-indicator:hidden"
				/>
				<MinusIcon
					strokeWidth={3}
					className="group-not-data-indeterminate/checkbox-indicator:hidden"
				/>
			</BaseCheckbox.Indicator>
		</BaseCheckbox.Root>
	);
}

export { Checkbox };
