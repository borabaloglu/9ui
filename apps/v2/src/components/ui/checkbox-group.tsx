"use client"

import * as React from "react"
import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui-components/react/checkbox-group"

import { cn } from "@/lib/utils"

const CheckboxGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseCheckboxGroup>
>(({ className, ...props }, ref) => (
	<BaseCheckboxGroup
		ref={ref}
		className={cn("flex flex-col items-start gap-1", className)}
		{...props}
	/>
))
CheckboxGroup.displayName = "CheckboxGroup"

export { CheckboxGroup }
