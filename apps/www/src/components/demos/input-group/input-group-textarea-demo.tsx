import { AtSignIcon, PaperclipIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupTextarea,
} from "@/components/ui/input-group";

export default function InputGroupTextareaDemo() {
	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupTextarea
				aria-label="Comment"
				className="min-h-20"
				placeholder="Leave a comment..."
			/>
			<InputGroupAddon align="block-end" className="gap-1 border-t">
				<InputGroupButton size="icon-xs" aria-label="Attach file">
					<PaperclipIcon />
				</InputGroupButton>
				<InputGroupButton size="icon-xs" aria-label="Mention someone">
					<AtSignIcon />
				</InputGroupButton>
				<InputGroupButton variant="default" className="ml-auto">
					Comment
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
