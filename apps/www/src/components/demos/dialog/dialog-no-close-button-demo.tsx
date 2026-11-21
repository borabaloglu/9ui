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

export default function DialogNoCloseButtonDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				Rate experience
			</DialogTrigger>
			<DialogPopup showCloseButton={false}>
				<DialogHeader>
					<DialogTitle>How was checkout?</DialogTitle>
					<DialogDescription>
						If anything felt unclear, slow, or broken, say so while it is still
						fresh. This is optional and does not change your order.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						Not now
					</DialogClose>
					<Button>Send feedback</Button>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
