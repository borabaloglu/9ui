import * as React from "react";

import {
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";

interface ApiTableRow {
	name: string;
	type: string;
	shortType?: string;
	default?: string;
	baseDefault?: string;
	description: React.ReactNode;
}

interface ApiTableProps {
	label?: string;
	baseLabel?: string;
	rows: ApiTableRow[];
	className?: string;
}

const codeClassName =
	"bg-muted text-accent-foreground rounded-sm px-[0.3rem] py-[0.2rem] font-mono text-[0.8125rem] leading-6 box-decoration-clone wrap-break-word";

function ApiCode({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<code dir="ltr" className={cn(codeClassName, className)}>
			{children}
		</code>
	);
}

function breakAtDots(text: string) {
	return text.split(".").map((part, index) => (
		<React.Fragment key={part}>
			{index > 0 && (
				<>
					.<wbr />
				</>
			)}
			{part}
		</React.Fragment>
	));
}

function ApiName({ name }: { name: string }) {
	return <ApiCode className="font-medium">{breakAtDots(name)}</ApiCode>;
}

function ApiType({ type }: { type: string }) {
	return (
		<ApiCode>
			{type.split(" | ").map((part, index, parts) => (
				<React.Fragment key={part}>
					{index > 0 && " "}
					<span className="whitespace-nowrap">
						{part}
						{index < parts.length - 1 && (
							<span className="text-muted-foreground"> |</span>
						)}
					</span>
				</React.Fragment>
			))}
		</ApiCode>
	);
}

function ApiEmpty() {
	return <span className="text-muted-foreground/60">—</span>;
}

function ApiTable({
	label = "Prop",
	baseLabel = "Base UI",
	rows,
	className,
}: ApiTableProps) {
	const hasDefaults = rows.some((row) => row.default || row.baseDefault);
	const columns = hasDefaults
		? "grid-cols-[minmax(0,1fr)_minmax(0,1fr)_1rem] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)_1rem]"
		: "grid-cols-[minmax(0,1fr)_minmax(0,1fr)_1rem]";

	return (
		<div
			data-slot="api-table"
			className={cn("mt-4 overflow-hidden rounded-xl border", className)}
		>
			<div
				aria-hidden="true"
				className={cn(
					"bg-muted/40 text-muted-foreground grid gap-4 border-b px-4 py-2.5 text-xs font-medium",
					columns,
				)}
			>
				<span>{label}</span>
				<span>Type</span>
				{hasDefaults && <span className="max-sm:hidden">Default</span>}
			</div>
			<Accordion>
				{rows.map((row) => (
					<AccordionItem key={row.name}>
						<AccordionTrigger
							className={cn(
								"grid items-center gap-4 rounded-none px-4 py-3 text-start text-sm font-normal hover:no-underline",
								columns,
							)}
						>
							<span className="min-w-0">
								<ApiName name={row.name} />
							</span>
							<span className="min-w-0">
								<ApiCode>{breakAtDots(row.shortType ?? row.type)}</ApiCode>
							</span>
							{hasDefaults && (
								<span className="min-w-0 max-sm:hidden">
									{row.default ? (
										<ApiCode>{row.default}</ApiCode>
									) : (
										<ApiEmpty />
									)}
								</span>
							)}
						</AccordionTrigger>
						<AccordionPanel className="pb-0">
							<dl className="text-muted-foreground [&_a]:text-foreground [&_dd_code:not([dir])]:text-foreground grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 px-4 pb-4 text-sm leading-6 [&_a]:underline [&_a]:underline-offset-3 [&_dd_code:not([dir])]:font-mono [&_dd_code:not([dir])]:text-[0.8125rem]">
								<dt>Description</dt>
								<dd className="text-pretty">{row.description}</dd>
								{row.shortType && (
									<>
										<dt>Type</dt>
										<dd>
											<ApiType type={row.type} />
										</dd>
									</>
								)}
								{hasDefaults && (
									<>
										<dt className="sm:hidden">Default</dt>
										<dd className="sm:hidden">
											{row.default ? (
												<ApiCode>{row.default}</ApiCode>
											) : (
												<ApiEmpty />
											)}
										</dd>
									</>
								)}
								{row.baseDefault && (
									<>
										<dt>{baseLabel}</dt>
										<dd>
											<ApiCode>{row.baseDefault}</ApiCode>
										</dd>
									</>
								)}
							</dl>
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}

export { ApiTable };
