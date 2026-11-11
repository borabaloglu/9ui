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

export default function AlertDialogDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger render={<Button variant="destructive" />}>
				Delete post
			</AlertDialogTrigger>
			<AlertDialogPopup>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete this post?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. Your post will be permanently deleted.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogClose render={<Button variant="outline" />}>
						Cancel
					</AlertDialogClose>
					<Button variant="destructive">Delete</Button>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	);
}
