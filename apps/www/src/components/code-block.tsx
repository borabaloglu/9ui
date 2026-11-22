import type * as React from "react";

import { CodeBar, CodeFrame } from "@/components/code-bar";
import { CodeCollapsible } from "@/components/code-collapsible";
import { CopyButton } from "@/components/copy-button";

import { isLongCode } from "@/lib/highlight-code";

interface CodeBlockProps extends React.ComponentProps<"pre"> {
	content: string;
	lang?: string;
	topBar?: {
		label: string;
	};
}

export const CodeBlock = ({
	content,
	topBar,
	lang,
	...props
}: CodeBlockProps) => {
	const pre = <pre {...props} />;

	return (
		<CodeFrame className="relative">
			{topBar ? (
				<CodeBar
					label={topBar.label}
					lang={lang}
					content={content}
					type="other"
				/>
			) : (
				content && (
					<CopyButton
						content={content}
						eventType="other"
						className="absolute top-2.5 right-2 z-10 bg-(--code-surface)"
					/>
				)
			)}
			{isLongCode(content) ? <CodeCollapsible>{pre}</CodeCollapsible> : pre}
		</CodeFrame>
	);
};
