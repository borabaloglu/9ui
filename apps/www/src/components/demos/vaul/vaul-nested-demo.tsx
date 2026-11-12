import { CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Vaul,
	VaulClose,
	VaulContent,
	VaulDescription,
	VaulFooter,
	VaulHeader,
	VaulNested,
	VaulPanel,
	VaulTitle,
	VaulTrigger,
} from "@/components/ui/vaul";

export default function VaulNestedDemo() {
	return (
		<Vaul>
			<VaulTrigger render={<Button variant="outline" />}>
				Get API key
			</VaulTrigger>
			<VaulContent>
				<VaulHeader>
					<VaulTitle>Your API key</VaulTitle>
					<VaulDescription>
						Your API key is used to authenticate your requests to the API.
					</VaulDescription>
				</VaulHeader>
				<VaulPanel className="flex gap-1">
					<Input aria-label="API key" defaultValue="sk-1234567890" readOnly />
					<Button variant="outline" size="icon" aria-label="Copy API key">
						<CopyIcon />
					</Button>
				</VaulPanel>
				<VaulFooter>
					<VaulNested>
						<VaulTrigger render={<Button variant="outline" />}>
							Add note
						</VaulTrigger>
						<VaulContent>
							<VaulHeader>
								<VaulTitle>Add a note</VaulTitle>
								<VaulDescription>
									Add a note to your API key. Only admins can read this.
								</VaulDescription>
							</VaulHeader>
							<VaulPanel>
								<Textarea
									aria-label="Note"
									placeholder="e.g. Used by billing service..."
									rows={3}
								/>
							</VaulPanel>
							<VaulFooter>
								<VaulClose render={<Button variant="outline" />}>
									Discard
								</VaulClose>
								<VaulClose render={<Button />}>Save</VaulClose>
							</VaulFooter>
						</VaulContent>
					</VaulNested>
					<VaulClose render={<Button />}>Done</VaulClose>
				</VaulFooter>
			</VaulContent>
		</Vaul>
	);
}
