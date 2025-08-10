import * as React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface InstallationTabsProps {
	children: React.ReactNode
}

export const InstallationTabs = ({ children }: InstallationTabsProps) => {
	const [quick, manual] = React.Children.toArray(children)

	return (
		<Tabs className="mt-4 w-full" variant="underline" defaultValue="quick">
			<TabsList>
				<TabsTrigger className="px-4" value="quick">
					Quick Setup
				</TabsTrigger>
				<TabsTrigger className="px-4" value="manual">
					Manual Setup
				</TabsTrigger>
			</TabsList>
			<TabsContent value="quick">{quick}</TabsContent>
			<TabsContent value="manual">{manual}</TabsContent>
		</Tabs>
	)
}
