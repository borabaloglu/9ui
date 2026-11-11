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

export default function AlertDialogFooterBareDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger render={<Button variant="outline" />}>
				Sign out
			</AlertDialogTrigger>
			<AlertDialogPopup>
				<AlertDialogHeader>
					<AlertDialogTitle>Sign out of your account?</AlertDialogTitle>
					<AlertDialogDescription>
						You will need to sign in again to access your workspace.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter variant="bare">
					<AlertDialogClose render={<Button variant="outline" size="sm" />}>
						Cancel
					</AlertDialogClose>
					<Button size="sm">Sign out</Button>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	);
}
