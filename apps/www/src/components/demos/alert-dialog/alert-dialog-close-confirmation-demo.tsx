"use client";

import * as React from "react";

import {
	AlertDialog,
	AlertDialogClose,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogPopup,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
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
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const defaultUsername = "borabalogluu";

export default function AlertDialogCloseConfirmationDemo() {
	const [dialogOpen, setDialogOpen] = React.useState(false);
	const [confirmOpen, setConfirmOpen] = React.useState(false);
	const [username, setUsername] = React.useState(defaultUsername);

	const hasUnsavedUsername = username !== defaultUsername;

	function handleDialogOpenChange(
		nextOpen: boolean,
		details: { cancel: () => void },
	) {
		if (nextOpen) {
			setDialogOpen(true);
			setUsername(defaultUsername);
			return;
		}
		if (hasUnsavedUsername) {
			details.cancel();
			setConfirmOpen(true);
			return;
		}
		setDialogOpen(false);
	}

	function saveAndClose() {
		setUsername(defaultUsername);
		setDialogOpen(false);
	}

	function discardAndClose() {
		setUsername(defaultUsername);
		setConfirmOpen(false);
		setDialogOpen(false);
	}

	return (
		<Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
			<DialogTrigger render={<Button variant="outline" />}>
				Edit profile
			</DialogTrigger>
			<DialogPopup>
				<DialogHeader>
					<DialogTitle>Update username</DialogTitle>
					<DialogDescription>
						You can always change this later in your profile settings.
					</DialogDescription>
				</DialogHeader>
				<Field name="username">
					<FieldLabel>Username</FieldLabel>
					<Input
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
				</Field>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						Cancel
					</DialogClose>
					<Button onClick={saveAndClose}>Save</Button>
				</DialogFooter>
			</DialogPopup>
			<AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
				<AlertDialogPopup>
					<AlertDialogHeader>
						<AlertDialogTitle>Discard your changes?</AlertDialogTitle>
						<AlertDialogDescription>
							Closing will lose your changes to the username.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogClose render={<Button variant="outline" />}>
							Keep editing
						</AlertDialogClose>
						<Button variant="destructive" onClick={discardAndClose}>
							Discard
						</Button>
					</AlertDialogFooter>
				</AlertDialogPopup>
			</AlertDialog>
		</Dialog>
	);
}
