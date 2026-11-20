"use client";

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
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
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
import { Separator } from "@/components/ui/separator";

export function DangerZoneCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Project settings</CardTitle>
				<CardDescription>Changes here affect everyone.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex items-center justify-between gap-4">
					<div>
						<p className="font-medium">Rename project</p>
						<p className="text-muted-foreground">Currently 9ui-docs.</p>
					</div>
					<Dialog>
						<DialogTrigger render={<Button variant="outline" size="sm" />}>
							Rename
						</DialogTrigger>
						<DialogPopup>
							<DialogHeader>
								<DialogTitle>Rename project</DialogTitle>
								<DialogDescription>
									The project URL changes with the name.
								</DialogDescription>
							</DialogHeader>
							<Field name="name">
								<FieldLabel>Name</FieldLabel>
								<Input defaultValue="9ui-docs" />
							</Field>
							<DialogFooter>
								<DialogClose render={<Button variant="outline" />}>
									Cancel
								</DialogClose>
								<Button>Save</Button>
							</DialogFooter>
						</DialogPopup>
					</Dialog>
				</div>
				<Separator />
				<div className="flex items-center justify-between gap-4">
					<div>
						<p className="font-medium">Delete project</p>
						<p className="text-muted-foreground">This cannot be undone.</p>
					</div>
					<AlertDialog>
						<AlertDialogTrigger
							render={<Button variant="destructive" size="sm" />}
						>
							Delete
						</AlertDialogTrigger>
						<AlertDialogPopup>
							<AlertDialogHeader>
								<AlertDialogTitle>Delete 9ui-docs?</AlertDialogTitle>
								<AlertDialogDescription>
									All deployments and settings will be permanently removed.
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
				</div>
			</CardContent>
		</Card>
	);
}
