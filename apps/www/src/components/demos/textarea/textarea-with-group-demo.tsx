import { GitPullRequestIcon, MessageSquareIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupText,
	InputGroupTextarea,
} from "@/components/ui/input-group";

export default function TextareaWithGroupDemo() {
	return (
		<InputGroup className="w-full max-w-sm">
			<InputGroupAddon align="block-start" className="justify-between border-b">
				<InputGroupText>
					<GitPullRequestIcon />
					Review comment
				</InputGroupText>
				<InputGroupText className="text-xs">button.tsx:42</InputGroupText>
			</InputGroupAddon>
			<InputGroupTextarea
				aria-label="Review comment"
				className="max-h-40 min-h-24"
				placeholder="Leave a comment about this change..."
			/>
			<InputGroupAddon align="block-end" className="justify-between border-t">
				<InputGroupText className="text-xs">Markdown supported</InputGroupText>
				<InputGroupButton>
					<MessageSquareIcon />
					Comment
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	);
}
