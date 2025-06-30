import * as React from "react"

import { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"

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
				<Tab className="w-fit px-4" value="cli">
					CLI
				</Tab>
				<Tab className="w-fit px-4" value="manual">
					Manual
				</Tab>
			</TabsList>
			<TabContent className="border-none p-0" value="cli">
				{cli}
			</TabContent>
			<TabContent className="border-none p-0" value="manual">
				{manual}
			</TabContent>
		</Tabs>
	)
}
