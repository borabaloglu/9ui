"use client";

import React from "react";

import { CodeBar, CodeFrame } from "@/components/code-bar";

import { highlightCode } from "@/lib/highlight-code";

interface ThemeCodeProps {
	css: string;
}

export const ThemeCode = ({ css }: ThemeCodeProps) => {
	const prettyCode = React.useMemo(() => highlightCode(css, "css"), [css]);

	return (
		<CodeFrame className="mt-0 w-full min-w-0">
			<CodeBar label="globals.css" lang="css" content={css} type="other" />

			<div dangerouslySetInnerHTML={{ __html: prettyCode }} />
		</CodeFrame>
	);
};
