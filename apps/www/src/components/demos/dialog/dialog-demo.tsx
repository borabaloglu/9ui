import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function DialogDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				Edit profile
			</DialogTrigger>
			<DialogPopup>
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Update your profile information. You can always change this later.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<Field name="name">
						<FieldLabel>Name</FieldLabel>
						<Input defaultValue="Bora Baloglu" />
					</Field>
					<Field name="email">
						<FieldLabel>Email</FieldLabel>
						<Input type="email" defaultValue="bora@example.com" />
					</Field>
				</div>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						Cancel
					</DialogClose>
					<Button>Save</Button>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
