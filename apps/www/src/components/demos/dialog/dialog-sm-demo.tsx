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

export default function DialogSmDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				Update available
			</DialogTrigger>
			<DialogPopup size="sm">
				<DialogHeader>
					<DialogTitle>Update available</DialogTitle>
					<DialogDescription>
						A new version of the app is ready to install.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>Later</DialogClose>
					<Button>Install</Button>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
