import { CopyIcon } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DialogNestedDemo() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="outline" />}>
				Get API key
			</DialogTrigger>
			<DialogPopup>
				<DialogHeader>
					<DialogTitle>Your API key</DialogTitle>
					<DialogDescription>
						Your API key is used to authenticate your requests to the API.
					</DialogDescription>
				</DialogHeader>
				<div className="flex gap-1">
					<Input aria-label="API key" defaultValue="sk-1234567890" readOnly />
					<Button variant="outline" size="icon" aria-label="Copy API key">
						<CopyIcon />
					</Button>
				</div>
				<DialogFooter>
					<Dialog>
						<DialogTrigger render={<Button variant="outline" />}>
							Add note
						</DialogTrigger>
						<DialogPopup size="sm">
							<DialogHeader>
								<DialogTitle>Add a note</DialogTitle>
								<DialogDescription>
									Add a note to your API key. This will be stored with the next
									key rotation. Only admins can read this.
								</DialogDescription>
							</DialogHeader>
							<Textarea
								aria-label="Note"
								placeholder="e.g. Used by billing service..."
								rows={3}
							/>
							<DialogFooter>
								<DialogClose render={<Button variant="outline" size="sm" />}>
									Discard
								</DialogClose>
								<DialogClose render={<Button size="sm" />}>Save</DialogClose>
							</DialogFooter>
						</DialogPopup>
					</Dialog>
					<DialogClose render={<Button />}>Done</DialogClose>
				</DialogFooter>
			</DialogPopup>
		</Dialog>
	);
}
