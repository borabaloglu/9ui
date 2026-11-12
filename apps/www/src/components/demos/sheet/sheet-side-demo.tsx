import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Sheet,
	SheetClose,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetPopup,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export default function SheetSideDemo() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{SHEET_SIDES.map((side) => (
				<Sheet key={side}>
					<SheetTrigger
						render={<Button variant="outline" className="capitalize" />}
					>
						{side}
					</SheetTrigger>
					<SheetPopup side={side}>
						<SheetHeader>
							<SheetTitle>Edit profile</SheetTitle>
							<SheetDescription>
								Update your profile information. You can always change this
								later.
							</SheetDescription>
						</SheetHeader>
						<SheetPanel className="flex flex-col gap-4">
							<Field name="name">
								<FieldLabel>Name</FieldLabel>
								<Input defaultValue="Bora Baloglu" />
							</Field>
							<Field name="email">
								<FieldLabel>Email</FieldLabel>
								<Input type="email" defaultValue="bora@example.com" />
							</Field>
						</SheetPanel>
						<SheetFooter>
							<SheetClose render={<Button variant="outline" />}>
								Cancel
							</SheetClose>
							<Button>Save</Button>
						</SheetFooter>
					</SheetPopup>
				</Sheet>
			))}
		</div>
	);
}
