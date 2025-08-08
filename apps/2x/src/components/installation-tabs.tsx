import * as React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface InstallationTabsProps {
	children: React.ReactNode
}

export const InstallationTabs = ({ children }: InstallationTabsProps) => {
	const [automatic, manual] = React.Children.toArray(children)

	return (
		<Tabs className="mt-4 w-full" variant="underline" defaultValue="automatic">
			<TabsList>
				<TabsTrigger className="px-4" value="automatic">
					Automatic
				</TabsTrigger>
				<TabsTrigger className="px-4" value="manual">
					Manual
				</TabsTrigger>
			</TabsList>
			<TabsContent value="automatic">{automatic}</TabsContent>
			<TabsContent value="manual">{manual}</TabsContent>
		</Tabs>
	)
}
