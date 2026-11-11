import { TriangleAlertIcon } from "lucide-react";

import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogPopup,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogIconDemo() {
	return (
		<AlertDialog>
			<AlertDialogTrigger render={<Button variant="destructive" />}>
				Disconnect integration
			</AlertDialogTrigger>
			<AlertDialogPopup>
				<AlertDialogHeader>
					<AlertDialogMedia className="bg-destructive/10 text-destructive ring-destructive/20 ring-1">
						<TriangleAlertIcon aria-hidden />
					</AlertDialogMedia>
					<AlertDialogTitle>Disconnect Slack?</AlertDialogTitle>
					<AlertDialogDescription>
						Incoming webhooks will stop working and your team will no longer
						receive notifications in this channel.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogClose render={<Button variant="outline" />}>
						Cancel
					</AlertDialogClose>
					<AlertDialogClose render={<Button variant="destructive" />}>
						Disconnect
					</AlertDialogClose>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	);
}
