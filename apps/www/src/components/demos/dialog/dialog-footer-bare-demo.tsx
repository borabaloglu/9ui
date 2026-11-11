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

export default function DialogFooterBareDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				Share link
			</DialogTrigger>
			<DialogPopup>
				<DialogHeader>
					<DialogTitle>Anyone with the link</DialogTitle>
					<DialogDescription>
						Viewers can comment. Editors can change files.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter variant="bare">
					<DialogClose render={<Button variant="outline" size="sm" />}>
						Cancel
					</DialogClose>
					<Button size="sm">Copy link</Button>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
