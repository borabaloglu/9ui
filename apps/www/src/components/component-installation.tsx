import * as React from "react";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

interface ComponentInstallationProps {
	children: React.ReactNode;
}

export const ComponentInstallation = ({
	children,
}: ComponentInstallationProps) => {
	const [cli, manual] = React.Children.toArray(children);

	return (
		<Tabs className="mt-4 w-full" defaultValue="cli">
			<TabsList variant="line">
				<TabsTab className="px-3" value="cli">
					CLI
				</TabsTab>
				<TabsTab className="px-3" value="manual">
					Manual
				</TabsTab>
			</TabsList>
			<TabsPanel value="cli">{cli}</TabsPanel>
			<TabsPanel value="manual">{manual}</TabsPanel>
		</Tabs>
	);
};
