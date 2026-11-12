import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Vaul,
	VaulClose,
	VaulContent,
	VaulDescription,
	VaulFooter,
	VaulHeader,
	VaulPanel,
	VaulTitle,
	VaulTrigger,
} from "@/components/ui/vaul";

const VAUL_DIRECTIONS = ["top", "right", "bottom", "left"] as const;

export default function VaulDirectionDemo() {
	return (
		<div className="grid grid-cols-2 gap-2">
			{VAUL_DIRECTIONS.map((direction) => (
				<Vaul key={direction} direction={direction}>
					<VaulTrigger
						render={<Button variant="outline" className="capitalize" />}
					>
						{direction}
					</VaulTrigger>
					<VaulContent>
						<VaulHeader>
							<VaulTitle>Edit profile</VaulTitle>
							<VaulDescription>
								Update your profile information. You can always change this
								later.
							</VaulDescription>
						</VaulHeader>
						<VaulPanel className="flex flex-col gap-4">
							<Field name="name">
								<FieldLabel>Name</FieldLabel>
								<Input defaultValue="Bora Baloglu" />
							</Field>
							<Field name="email">
								<FieldLabel>Email</FieldLabel>
								<Input type="email" defaultValue="bora@example.com" />
							</Field>
						</VaulPanel>
						<VaulFooter>
							<VaulClose render={<Button variant="outline" />}>
								Cancel
							</VaulClose>
							<Button>Save</Button>
						</VaulFooter>
					</VaulContent>
				</Vaul>
			))}
		</div>
	);
}
