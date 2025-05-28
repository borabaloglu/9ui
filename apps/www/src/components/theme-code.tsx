"use client"

import React from "react"

import { CodeBar } from "@/components/code-bar"

import { highlighter } from "@/lib/rehype/syntax-highlighting"

interface ThemeCodeProps {
	css: string
}

export const ThemeCode = ({ css }: ThemeCodeProps) => {
	const prettyCode = React.useMemo(() => {
		return highlighter.codeToHtml(css, {
			lang: "css",
			themes: {
				dark: "github-dark-default",
				light: "github-light-default",
			},
			transformers: [
				{
					pre(node) {
						node.properties.style = "tab-size: 2"
					},
					code(node) {
						node.properties.style = "tab-size: 2"
					},
				},
			],
		})
	}, [css])

	return (
		<div className="w-full overflow-hidden rounded-md border">
			<CodeBar label="globals.css" className="border-t-0" content={css} />

			<div
				className="max-h-[600px] overflow-auto p-4 text-sm"
				dangerouslySetInnerHTML={{ __html: prettyCode }}
			/>
		</div>
	)
}
