import * as React from "react"
import { Radio } from "@base-ui-components/react/radio"
import { RadioGroup as BaseRadioGroup } from "@base-ui-components/react/radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
	className,
	...props
}: React.ComponentProps<typeof BaseRadioGroup>) {
	return (
		<BaseRadioGroup
			data-slot="radio-group"
			className={cn("grid gap-3", className)}
			{...props}
		/>
	)
}

function RadioGroupItem({
	className,
	...props
}: React.ComponentProps<typeof Radio.Root>) {
	return (
		<Radio.Root
			data-slot="radio-group-item"
			className={cn(
				"bg-input text-primary focus-visible:ring-ring/50 aria-invalid:ring-destructive/50 aria-invalid:border-destructive data-checked:border-primary aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			{...props}
		>
			<Radio.Indicator
				data-slot="radio-group-indicator"
				className="relative flex items-center justify-center"
			>
				<CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
			</Radio.Indicator>
		</Radio.Root>
	)
}

export { RadioGroup, RadioGroupItem }
