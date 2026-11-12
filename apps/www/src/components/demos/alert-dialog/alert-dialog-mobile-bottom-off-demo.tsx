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

export default function AlertDialogMobileBottomOffDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger render={<Button variant="outline" />}>
				Leave organization
			</AlertDialogTrigger>
			<AlertDialogPopup showAtBottomOnMobile={false}>
				<AlertDialogHeader>
					<AlertDialogTitle>Leave organization?</AlertDialogTitle>
					<AlertDialogDescription>
						You will lose access to shared projects. An admin can invite you
						again later.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogClose render={<Button variant="outline" />}>
						Stay
					</AlertDialogClose>
					<Button variant="destructive">Leave</Button>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	);
}
