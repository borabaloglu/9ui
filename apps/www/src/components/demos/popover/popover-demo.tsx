import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverDescription,
	PopoverHeader,
	PopoverPopup,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

export default function PopoverDemo() {
	return (
		<Popover>
			<PopoverTrigger render={<Button variant="outline" />}>
				Feedback
			</PopoverTrigger>
			<PopoverPopup>
				<PopoverHeader>
					<PopoverTitle>Send feedback</PopoverTitle>
					<PopoverDescription>
						Tell us what works and what we could do better.
					</PopoverDescription>
				</PopoverHeader>
				<Textarea
					aria-label="Feedback"
					placeholder="Type your feedback here."
					rows={4}
				/>
				<Button>Send feedback</Button>
			</PopoverPopup>
		</Popover>
	);
}
