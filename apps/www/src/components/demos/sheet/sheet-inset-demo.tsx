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

export default function SheetInsetDemo() {
	return (
		<Sheet>
			<SheetTrigger render={<Button variant="outline" />}>
				Edit profile
			</SheetTrigger>
			<SheetPopup variant="inset">
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Update your profile information. You can always change this later.
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
					<SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
					<Button>Save</Button>
				</SheetFooter>
			</SheetPopup>
		</Sheet>
	);
}
