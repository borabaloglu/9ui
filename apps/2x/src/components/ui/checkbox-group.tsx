"use client"

import * as React from "react"
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group"

import { cn } from "@/lib/utils"

function CheckboxGroup({
	className,
	...props
}: React.ComponentProps<typeof BaseCheckboxGroup>) {
	return (
		<BaseCheckboxGroup
			className={cn("flex flex-col items-start gap-1", className)}
			{...props}
		/>
	)
}

export { CheckboxGroup }
