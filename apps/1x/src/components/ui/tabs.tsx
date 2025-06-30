"use client"

import * as React from "react"
import { Tabs as BaseTabs } from "@base-ui-components/react/tabs"

import { cn } from "@/lib/utils"

type TabsVariant = "capsule" | "underline"

type TabsContext = {
	variant: TabsVariant
}

const TabsContext = React.createContext<TabsContext | null>(null)

const useTabs = () => {
	const context = React.useContext(TabsContext)

	if (!context) {
		throw new Error("useTabs must be used within a Tabs")
	}

	return context
}

interface TabsProps
	extends React.ComponentPropsWithoutRef<typeof BaseTabs.Root> {
	variant?: TabsVariant
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
	({ variant = "capsule", ...props }, ref) => (
		<TabsContext.Provider value={{ variant }}>
			<BaseTabs.Root ref={ref} {...props} />
		</TabsContext.Provider>
	)
)
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.List>
>(({ className, children, ...props }, ref) => {
	const { variant } = useTabs()

	return (
		<BaseTabs.List
			ref={ref}
			className={cn(
				"relative flex gap-1 text-sm font-medium",
				variant === "capsule" ? "rounded-md border px-1" : "border-b",
				className
			)}
			{...props}
		>
			{children}
			<TabIndicator />
		</BaseTabs.List>
	)
})
TabsList.displayName = "TabsList"

const Tab = React.forwardRef<
	HTMLButtonElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className, ...props }, ref) => (
	<BaseTabs.Tab
		ref={ref}
		className={cn(
			"z-[1] min-h-10 w-full text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
			className
		)}
		{...props}
	/>
))
Tab.displayName = "Tab"

const TabIndicator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Indicator>
>(({ className, ...props }, ref) => {
	const { variant } = useTabs()
	return (
		<BaseTabs.Indicator
			ref={ref}
			className={cn(
				"absolute left-0 w-[var(--active-tab-width)] -translate-y-1/2 translate-x-[var(--active-tab-left)] transition-all duration-200 ease-in-out",
				variant === "underline"
					? "top-full z-10 h-px bg-primary"
					: "top-1/2 h-[calc(var(--active-tab-height)-0.5rem)] rounded-md bg-muted",
				className
			)}
			{...props}
		/>
	)
})
TabIndicator.displayName = "TabIndicator"

const TabContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className, ...props }, ref) => (
	<BaseTabs.Panel
		ref={ref}
		className={cn("mt-2 flex-1 rounded-md border p-4", className)}
		{...props}
	/>
))
TabContent.displayName = "TabContent"

export { Tabs, TabsList, Tab, TabContent }
