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
import { Textarea } from "@/components/ui/textarea";

export default function DrawerDemo() {
	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="outline" />}>
				Send feedback
			</DrawerTrigger>
			<DrawerPopup>
				<DrawerHeader>
					<DrawerTitle>Send feedback</DrawerTitle>
					<DrawerDescription>
						Tell us what works and what does not. We read every message.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerPanel>
					<Field name="feedback">
						<FieldLabel>Feedback</FieldLabel>
						<Textarea placeholder="Share your thoughts..." rows={4} />
					</Field>
				</DrawerPanel>
				<DrawerFooter>
					<DrawerClose render={<Button variant="outline" />}>
						Cancel
					</DrawerClose>
					<Button>Send</Button>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}
