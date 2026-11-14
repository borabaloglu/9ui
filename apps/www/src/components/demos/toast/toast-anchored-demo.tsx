"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnchoredToastProvider } from "@/components/ui/toast";

import { useToast } from "@/hooks/use-toast";

export default function ToastAnchoredDemo() {
	return (
		<AnchoredToastProvider>
			<CopyLinkButton />
		</AnchoredToastProvider>
	);
}

function CopyLinkButton() {
	const toast = useToast();
	const anchorRef = React.useRef<HTMLButtonElement>(null);
	const [copied, setCopied] = React.useState(false);

	return (
		<Button
			ref={anchorRef}
			variant="outline"
			disabled={copied}
			focusableWhenDisabled
			onClick={() => {
				setCopied(true);
				toast.add({
					title: "Link copied",
					type: "success",
					timeout: 2000,
					positionerProps: {
						anchor: anchorRef.current,
						side: "top",
					},
					onClose: () => setCopied(false),
				});
			}}
		>
			{copied ? <CheckIcon /> : <CopyIcon />}
			Copy link
		</Button>
	);
}
