import { CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DrawerDemo() {
	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="outline" />}>
				Get API key
			</DrawerTrigger>
			<DrawerPopup>
				<DrawerHeader>
					<DrawerTitle>Your API key</DrawerTitle>
					<DrawerDescription>
						Your API key is used to authenticate your requests to the API.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerPanel className="flex gap-1">
					<Input aria-label="API key" defaultValue="sk-1234567890" readOnly />
					<Button variant="outline" size="icon" aria-label="Copy API key">
						<CopyIcon />
					</Button>
				</DrawerPanel>
				<DrawerFooter>
					<Drawer>
						<DrawerTrigger render={<Button variant="outline" />}>
							Add note
						</DrawerTrigger>
						<DrawerPopup>
							<DrawerHeader>
								<DrawerTitle>Add a note</DrawerTitle>
								<DrawerDescription>
									Add a note to your API key. Only admins can read this.
								</DrawerDescription>
							</DrawerHeader>
							<DrawerPanel>
								<Textarea
									aria-label="Note"
									placeholder="e.g. Used by billing service..."
									rows={3}
								/>
							</DrawerPanel>
							<DrawerFooter>
								<DrawerClose render={<Button variant="outline" />}>
									Discard
								</DrawerClose>
								<DrawerClose render={<Button />}>Save</DrawerClose>
							</DrawerFooter>
						</DrawerPopup>
					</Drawer>
					<DrawerClose render={<Button />}>Done</DrawerClose>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}
