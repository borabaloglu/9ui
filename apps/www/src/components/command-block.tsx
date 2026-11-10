"use client";

import React from "react";
import { TerminalIcon } from "lucide-react";

import { CodeBar, CodeFrame } from "@/components/code-bar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
							<TabsList className="[&_[data-slot=tab-indicator]]:bg-foreground/8 h-7 gap-x-0.5 rounded-none bg-transparent p-0 [&_[data-slot=tab-indicator]]:rounded-md [&_[data-slot=tab-indicator]]:border-transparent [&_[data-slot=tab-indicator]]:shadow-none">
								{packageManagers.map((packageManager) => (
									<TabsTrigger
										key={packageManager}
										className="h-7 px-2.5 text-[0.8125rem] font-medium"
										value={packageManager}
									>
										{packageManager}
									</TabsTrigger>
								))}
							</TabsList>
						</>
					}
					content={command}
				/>

				<TabsContent value={activeTab}>
					<div dangerouslySetInnerHTML={{ __html: prettyCode }} />
				</TabsContent>
			</Tabs>
		</CodeFrame>
	);
};
