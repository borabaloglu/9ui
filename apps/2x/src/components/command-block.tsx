"use client"

import React from "react"

import { CodeBar } from "@/components/code-bar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { highlighter } from "@/lib/rehype/syntax-highlighting"

interface CommandBlockProps {
	npmCommand: string
	yarnCommand: string
	pnpmCommand: string
	bunCommand: string
}

export const CommandBlock = ({
	npmCommand,
	yarnCommand,
	pnpmCommand,
	bunCommand,
}: CommandBlockProps) => {
	const [activeTab, setActiveTab] = React.useState("npm")

	const [prettyCode, command] = React.useMemo(() => {
		const command =
			activeTab === "npm"
				? npmCommand
				: activeTab === "yarn"
					? yarnCommand
					: activeTab === "pnpm"
						? pnpmCommand
						: bunCommand

		return [
			highlighter.codeToHtml(command, {
				lang: "bash",
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
			}),
			command,
		]
	}, [activeTab])

	return (
		<Tabs
			className="mt-4 w-full gap-0 overflow-hidden rounded-md border"
			variant="underline"
			value={activeTab}
			onValueChange={setActiveTab}
		>
			<CodeBar
				className="h-9 border-t-0"
				label={
					<TabsList>
						<TabsTrigger className="px-4" value="npm">
							npm
						</TabsTrigger>
						<TabsTrigger className="px-4" value="yarn">
							yarn
						</TabsTrigger>
						<TabsTrigger className="px-4" value="pnpm">
							pnpm
						</TabsTrigger>
						<TabsTrigger className="px-4" value="bun">
							bun
						</TabsTrigger>
					</TabsList>
				}
				content={command}
			/>

			<TabsContent className="mt-0 border-none p-4" value={activeTab}>
				<div
					className="command-block"
					dangerouslySetInnerHTML={{ __html: prettyCode }}
				/>
			</TabsContent>
		</Tabs>
	)
}
