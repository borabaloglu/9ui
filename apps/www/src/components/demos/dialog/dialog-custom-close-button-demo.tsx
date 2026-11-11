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
import { Kbd } from "@/components/ui/kbd";

export default function DialogCustomCloseButtonDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				Quick tips
			</DialogTrigger>
			<DialogPopup showCloseButton={false}>
				<DialogHeader>
					<DialogTitle>Keyboard shortcuts</DialogTitle>
					<DialogDescription>
						Press <Kbd>?</Kbd> anytime to open the command palette.
					</DialogDescription>
				</DialogHeader>
				<ul className="text-muted-foreground list-inside list-disc">
					<li>Search across projects and files</li>
					<li>Jump to recent items</li>
					<li>Run quick actions</li>
				</ul>
				<DialogFooter>
					<DialogClose render={<Button />}>Got it</DialogClose>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
