import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsVerticalLineDemo() {
	return (
		<Tabs
			className="w-full max-w-lg"
			defaultValue="introduction"
			orientation="vertical"
		>
			<TabsList variant="line">
				<TabsTab value="introduction">Introduction</TabsTab>
				<TabsTab value="installation">Installation</TabsTab>
				<TabsTab value="configuration">Configuration</TabsTab>
				<TabsTab value="api">API Reference</TabsTab>
			</TabsList>

			<TabsPanel value="introduction">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Introduction</CardTitle>
						<CardDescription>
							Accessible, unstyled UI components built on Base UI. Every
							component follows WAI-ARIA guidelines with full keyboard support.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="installation">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Installation</CardTitle>
						<CardDescription>
							Install via npm, pnpm, or yarn. Requires React 18+ and Base UI.
							Run the init command to scaffold config files automatically.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="configuration">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Configuration</CardTitle>
						<CardDescription>
							Customize tokens, colors, and border radius in the theme config.
							All values map to CSS variables and can be overridden per
							component.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="api">
				<Card size="sm">
					<CardHeader>
						<CardTitle>API Reference</CardTitle>
						<CardDescription>
							Each component exposes its full props including forwarded Base UI
							props. See per-component API tables for values and defaults.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>
		</Tabs>
	);
}
