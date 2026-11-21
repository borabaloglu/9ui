import { MessageSquareTextIcon } from "lucide-react";

import { CodeBar, CodeFrame } from "@/components/code-bar";

import { getPrompt, type PromptName } from "@/lib/prompts";
import { cn } from "@/lib/utils";

interface PromptProps {
	name?: PromptName;
	text?: string;
	className?: string;
}

export function Prompt({ name, text, className }: PromptProps) {
	const content = getPrompt({ name, text });

	return (
		<CodeFrame data-slot="prompt" className={cn(className)}>
			<CodeBar
				type="other"
				content={content}
				label={
					<>
						<MessageSquareTextIcon className="text-muted-foreground size-3.5 shrink-0" />
						<span className="text-muted-foreground truncate text-[0.8125rem] font-medium">
							Prompt
						</span>
					</>
				}
			/>
			<p className="px-4 py-3.5 font-mono text-[0.8125rem] leading-6 break-words whitespace-pre-wrap">
				{content}
			</p>
		</CodeFrame>
	);
}
