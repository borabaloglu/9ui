import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogSmDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger render={<Button variant="outline" />}>
				Remove tag
			</AlertDialogTrigger>
			<AlertDialogPopup size="sm">
				<AlertDialogHeader>
					<AlertDialogTitle>Remove this tag?</AlertDialogTitle>
					<AlertDialogDescription>
						The tag will be removed from this item. You can add it again later.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogClose render={<Button variant="outline" />}>
						Cancel
					</AlertDialogClose>
					<Button variant="destructive">Remove</Button>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	);
}
