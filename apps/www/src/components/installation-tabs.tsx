import * as React from "react";

import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

interface InstallationTabsProps {
	children: React.ReactNode;
}

export const InstallationTabs = ({ children }: InstallationTabsProps) => {
	const [quick, manual] = React.Children.toArray(children);

	return (
		<Tabs className="mt-4 w-full" defaultValue="quick">
			<TabsList variant="line">
				<TabsTab className="px-3" value="quick">
					Quick Setup
				</TabsTab>
				<TabsTab className="px-3" value="manual">
					Manual Setup
				</TabsTab>
			</TabsList>
			<TabsPanel value="quick">{quick}</TabsPanel>
			<TabsPanel value="manual">{manual}</TabsPanel>
		</Tabs>
	);
};
