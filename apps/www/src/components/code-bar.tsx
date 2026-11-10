import type * as React from "react";
import { CodeIcon, FileIcon, TerminalIcon } from "lucide-react";

import { CopyButton } from "@/components/copy-button";

import { cn } from "@/lib/utils";

const terminalLangs = ["bash", "sh", "shell", "zsh"];

function getLabelIcon(label: string, lang?: string) {
	if (lang && terminalLangs.includes(lang)) {
		return TerminalIcon;
	}

	if (label.includes(".")) {
		return FileIcon;
	}

	return CodeIcon;
}

export function CodeFrame({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="code-frame"
			className={cn(
				"mt-4 overflow-hidden rounded-xl border bg-(--code-surface)",
				className,
			)}
			{...props}
		/>
	);
}

interface CodeBarProps {
	label?: string | React.ReactNode;
	lang?: string;
	type?: "demo" | "component" | "command" | "other";
	content: string;
	className?: string;
	children?: React.ReactNode;
}

export function CodeBar({
	label,
	lang,
	type,
	content,
	className,
	children,
}: CodeBarProps) {
	const Icon = typeof label === "string" ? getLabelIcon(label, lang) : null;

	return (
		<div
			data-slot="code-bar"
			className={cn(
				"flex h-10 items-center gap-2 border-b ps-3.5 pe-1.5",
				className,
			)}
		>
			{typeof label === "string" ? (
				<>
					{Icon && <Icon className="text-muted-foreground size-3.5 shrink-0" />}
					<span className="text-muted-foreground truncate text-[0.8125rem] font-medium">
						{label}
					</span>
				</>
			) : (
				label
			)}

			<div className="ms-auto flex shrink-0 items-center gap-0.5">
				{children}
				<CopyButton
					content={content}
					eventType={type}
					label={typeof label === "string" ? label : undefined}
				/>
			</div>
		</div>
	);
}
