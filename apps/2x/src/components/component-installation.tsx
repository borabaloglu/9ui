import * as React from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ComponentInstallationProps {
	children: React.ReactNode
}

export const ComponentInstallation = ({
	children,
}: ComponentInstallationProps) => {
	const [cli, manual] = React.Children.toArray(children)

	return (
		<Tabs className="mt-4 w-full" variant="underline" defaultValue="cli">
			<TabsList>
				<TabsTrigger className="px-4" value="cli">
					CLI
				</TabsTrigger>
				<TabsTrigger className="px-4" value="manual">
					Manual
				</TabsTrigger>
			</TabsList>
			<TabsContent value="cli">{cli}</TabsContent>
			<TabsContent value="manual">{manual}</TabsContent>
		</Tabs>
	)
}
