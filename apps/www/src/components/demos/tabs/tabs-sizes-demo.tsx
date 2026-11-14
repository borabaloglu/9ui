import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";

const sizes = ["sm", "default", "lg"] as const;

export default function TabsSizesDemo() {
	return (
		<div className="flex w-full max-w-lg flex-col items-center gap-4">
			{sizes.map((size) => (
				<Tabs key={size} className="max-w-full" defaultValue="overview">
					<TabsList size={size}>
						<TabsTab value="overview">Overview</TabsTab>
						<TabsTab value="traffic">Traffic</TabsTab>
						<TabsTab value="revenue">Revenue</TabsTab>
					</TabsList>
				</Tabs>
			))}
		</div>
	);
}
