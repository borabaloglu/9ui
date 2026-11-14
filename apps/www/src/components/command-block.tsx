"use client";

import React from "react";
import { TerminalIcon } from "lucide-react";

import { CodeBar, CodeFrame } from "@/components/code-bar";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

import { highlightCode } from "@/lib/highlight-code";

interface CommandBlockProps {
	npmCommand: string;
	yarnCommand: string;
	pnpmCommand: string;
	bunCommand: string;
}

const packageManagers = ["npm", "yarn", "pnpm", "bun"] as const;

type PackageManager = (typeof packageManagers)[number];

export const CommandBlock = ({
	npmCommand,
	yarnCommand,
	pnpmCommand,
	bunCommand,
}: CommandBlockProps) => {
	const [activeTab, setActiveTab] = React.useState<PackageManager>("npm");

	const [prettyCode, command] = React.useMemo(() => {
		const commands: Record<PackageManager, string> = {
			npm: npmCommand,
			yarn: yarnCommand,
			pnpm: pnpmCommand,
			bun: bunCommand,
		};
		const command = commands[activeTab].trimEnd();

		return [highlightCode(command, "bash"), command];
	}, [activeTab, npmCommand, yarnCommand, pnpmCommand, bunCommand]);

	return (
		<CodeFrame>
			<Tabs className="gap-0" value={activeTab} onValueChange={setActiveTab}>
				<CodeBar
					type="command"
					label={
						<>
							<TerminalIcon className="text-muted-foreground size-3.5 shrink-0" />
							<TabsList
								size="sm"
								className="*:data-[slot=tabs-indicator]:bg-foreground/8! rounded-none bg-transparent p-0 *:data-[slot=tabs-indicator]:shadow-none!"
							>
								{packageManagers.map((packageManager) => (
									<TabsTab
										key={packageManager}
										className="px-2.5 text-[0.8125rem] focus-visible:ring-inset"
										value={packageManager}
									>
										{packageManager}
									</TabsTab>
								))}
							</TabsList>
						</>
					}
					content={command}
				/>

				<TabsPanel value={activeTab}>
					<div dangerouslySetInnerHTML={{ __html: prettyCode }} />
				</TabsPanel>
			</Tabs>
		</CodeFrame>
	);
};
