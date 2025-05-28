"use client"

import React from "react"

import { CodeBar } from "@/components/code-bar"
import { Tab, TabContent, Tabs, TabsList } from "@/components/ui/tabs"

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
			className="mt-4 w-full overflow-hidden rounded-md border"
			variant="underline"
			value={activeTab}
			onValueChange={setActiveTab}
		>
			<CodeBar
				className="border-t-0"
				label={
					<TabsList className="flex h-8 items-center justify-between border-none px-2 text-xs">
						<div className="z-10">
							<Tab className="w-fit px-4" value="npm">
								npm
							</Tab>
							<Tab className="w-fit px-4" value="yarn">
								yarn
							</Tab>
							<Tab className="w-fit px-4" value="pnpm">
								pnpm
							</Tab>
							<Tab className="w-fit px-4" value="bun">
								bun
							</Tab>
						</div>
					</TabsList>
				}
				content={command}
			/>

			<TabContent className="mt-0 border-none" value={activeTab}>
				<div
					className="command-block"
					dangerouslySetInnerHTML={{ __html: prettyCode }}
				/>
			</TabContent>
		</Tabs>
	)
}
