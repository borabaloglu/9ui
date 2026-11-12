import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
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

export default function VaulDemo() {
	return (
		<Vaul>
			<VaulTrigger render={<Button variant="outline" />}>
				Send feedback
			</VaulTrigger>
			<VaulContent>
				<VaulHeader>
					<VaulTitle>Send feedback</VaulTitle>
					<VaulDescription>
						Tell us what works and what does not. We read every message.
					</VaulDescription>
				</VaulHeader>
				<VaulPanel>
					<Field name="feedback">
						<FieldLabel>Feedback</FieldLabel>
						<Textarea placeholder="Share your thoughts..." rows={4} />
					</Field>
				</VaulPanel>
				<VaulFooter>
					<VaulClose render={<Button variant="outline" />}>Cancel</VaulClose>
					<Button>Send</Button>
				</VaulFooter>
			</VaulContent>
		</Vaul>
	);
}
