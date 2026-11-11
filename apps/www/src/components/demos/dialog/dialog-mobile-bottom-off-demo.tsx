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

export default function DialogMobileBottomOffDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				View workshop
			</DialogTrigger>
			<DialogPopup showAtBottomOnMobile={false}>
				<DialogHeader>
					<DialogTitle>Design systems workshop</DialogTitle>
					<DialogDescription>
						May 12 at 2:00–4:00 PM at Studio B. Add it to your calendar so you
						don’t miss the session.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						Not now
					</DialogClose>
					<Button>Add to calendar</Button>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
