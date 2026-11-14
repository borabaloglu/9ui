import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsLineDemo() {
	return (
		<Tabs className="w-full max-w-lg" defaultValue="overview">
			<TabsList variant="line">
				<TabsTab value="overview">Overview</TabsTab>
				<TabsTab value="traffic">Traffic</TabsTab>
				<TabsTab value="conversions">Conversions</TabsTab>
				<TabsTab value="revenue">Revenue</TabsTab>
			</TabsList>

			<TabsPanel value="overview">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Overview</CardTitle>
						<CardDescription>
							Total sessions reached 28,450 this month, up 11.2% from last
							period. Bounce rate dropped to 38.4%, with average page depth
							rising to 3.7 pages per visit.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="traffic">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Traffic</CardTitle>
						<CardDescription>
							Organic search accounts for 54% of traffic, followed by direct at
							22% and referral at 14%. Social channels drove a 19% spike on
							Wednesday after the product launch post.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="conversions">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Conversions</CardTitle>
						<CardDescription>
							Conversion rate stands at 3.8%, up from 3.1% last month after the
							checkout redesign. Drop-off on the payment step fell 21% following
							the simplified form flow.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>

			<TabsPanel value="revenue">
				<Card size="sm">
					<CardHeader>
						<CardTitle>Revenue</CardTitle>
						<CardDescription>
							Monthly recurring revenue reached $62,140, a 9.4% increase over
							last month. Average order value climbed to $84.50 after the new
							upsell flow launched on the pricing page.
						</CardDescription>
					</CardHeader>
				</Card>
			</TabsPanel>
		</Tabs>
	);
}
