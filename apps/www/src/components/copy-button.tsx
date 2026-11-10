"use client";

import React from "react";
import { useOpenPanel } from "@openpanel/nextjs";
import { CheckIcon, CopyIcon } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type CopyButtonProps = ButtonProps & {
	content: string;
	label?: string;
	eventType?: "demo" | "component" | "command" | "other";
};

const iconClassName =
	"transition-[opacity,scale,filter] duration-150 ease-out motion-reduce:transition-none";

export const CopyButton = ({
	content,
	eventType,
	label,
	className,
	...props
}: CopyButtonProps) => {
	const op = useOpenPanel();

	const [copied, setCopied] = React.useState(false);
	const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

	React.useEffect(() => {
		return () => clearTimeout(timeoutRef.current);
	}, []);

	const onCopy = async () => {
		op.track("copy", {
			type: eventType || "other",
			content: eventType === "command" ? content : undefined,
			label,
		});
		try {
			await navigator.clipboard.writeText(content);
		} catch {
			return;
		}
		setCopied(true);
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Button
			onClick={onCopy}
			variant="ghost"
			size="icon-sm"
			aria-label={copied ? "Copied" : "Copy code"}
			className={cn(
				"text-muted-foreground hover:text-foreground shrink-0",
				className,
			)}
			{...props}
		>
			<CopyIcon
				className={cn(iconClassName, copied && "scale-50 opacity-0 blur-[2px]")}
			/>
			<CheckIcon
				className={cn(
					iconClassName,
					"absolute",
					!copied && "scale-50 opacity-0 blur-[2px]",
				)}
			/>
		</Button>
	);
};
