"use client";

import { Button } from "@/components/ui/button";
import {
	createDrawerHandle,
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

const PLANS = [
	{
		name: "Starter",
		description: "One project and community support. Free while you try it.",
	},
	{
		name: "Team",
		description: "Unlimited projects, shared workspaces and priority support.",
	},
];

const planDrawer = createDrawerHandle<(typeof PLANS)[number]>();

export default function DrawerDetachedTriggersDemo() {
	return (
		<div className="flex gap-2">
			{PLANS.map((plan) => (
				<DrawerTrigger
					key={plan.name}
					handle={planDrawer}
					payload={plan}
					render={<Button variant="outline" />}
				>
					{plan.name}
				</DrawerTrigger>
			))}
			<Drawer handle={planDrawer}>
				{({ payload }) => (
					<DrawerPopup>
						<DrawerHeader>
							<DrawerTitle>{payload?.name}</DrawerTitle>
							<DrawerDescription>{payload?.description}</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose render={<Button variant="outline" />}>
								Cancel
							</DrawerClose>
							<DrawerClose render={<Button />}>Choose plan</DrawerClose>
						</DrawerFooter>
					</DrawerPopup>
				)}
			</Drawer>
		</div>
	);
}
