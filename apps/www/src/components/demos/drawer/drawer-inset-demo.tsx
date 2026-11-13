import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const DRAWER_SIDES = [
	{ label: "Top", swipeDirection: "up" },
	{ label: "Right", swipeDirection: "right" },
	{ label: "Bottom", swipeDirection: "down" },
	{ label: "Left", swipeDirection: "left" },
] as const;

export default function DrawerInsetDemo() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{DRAWER_SIDES.map((side) => (
				<Drawer key={side.label} swipeDirection={side.swipeDirection}>
					<DrawerTrigger render={<Button variant="outline" />}>
						{side.label}
					</DrawerTrigger>
					<DrawerPopup variant="inset">
						<DrawerHeader>
							<DrawerTitle>Edit profile</DrawerTitle>
							<DrawerDescription>
								Update your profile information. You can always change this
								later.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerPanel className="flex flex-col gap-4">
							<Field name="name">
								<FieldLabel>Name</FieldLabel>
								<Input defaultValue="Bora Baloglu" />
							</Field>
							<Field name="email">
								<FieldLabel>Email</FieldLabel>
								<Input type="email" defaultValue="bora@example.com" />
							</Field>
						</DrawerPanel>
						<DrawerFooter>
							<DrawerClose render={<Button variant="outline" />}>
								Cancel
							</DrawerClose>
							<Button>Save</Button>
						</DrawerFooter>
					</DrawerPopup>
				</Drawer>
			))}
		</div>
	);
}
