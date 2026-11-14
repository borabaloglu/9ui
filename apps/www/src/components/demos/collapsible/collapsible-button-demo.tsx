"use client";

import { useRef, useState } from "react";
import { ChevronsUpDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Collapsible,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";

import { cn } from "@/lib/utils";

type Corner = "tl" | "tr" | "bl" | "br";

const corners: Corner[] = ["tl", "tr", "bl", "br"];

const labels: Record<Corner, string> = {
	tl: "Top left radius",
	tr: "Top right radius",
	bl: "Bottom left radius",
	br: "Bottom right radius",
};

function RadiusInput({
	label,
	value,
	onChange,
	active,
	className,
}: {
	label: string;
	value: number | null;
	onChange: (value: number) => void;
	active: Corner[];
	className?: string;
}) {
	const [draft, setDraft] = useState<string | null>(null);
	const valueOnFocus = useRef<number | null>(null);

	const mixed = value === null;

	return (
		<InputGroup className={className}>
			<InputGroupAddon>
				<span aria-hidden className="grid grid-cols-2 gap-0.75">
					{corners.map((corner) => (
						<span
							key={corner}
							className={cn(
								"bg-foreground size-1 rounded-full",
								!active.includes(corner) && "opacity-20",
							)}
						/>
					))}
				</span>
			</InputGroupAddon>
			<InputGroupInput
				aria-label={label}
				inputMode="numeric"
				value={draft ?? (mixed ? "" : String(value))}
				placeholder={mixed ? "Mixed" : undefined}
				onFocus={() => {
					valueOnFocus.current = value;
				}}
				onChange={(event) => {
					const raw = event.target.value.replace(/\D/g, "");
					setDraft(raw);
					if (raw !== "") {
						onChange(Math.min(48, Number.parseInt(raw, 10)));
					}
				}}
				onBlur={() => {
					if (draft === "" && valueOnFocus.current !== null) {
						onChange(valueOnFocus.current);
					}
					setDraft(null);
				}}
				className="tabular-nums"
			/>
		</InputGroup>
	);
}

export default function CollapsibleButtonDemo() {
	const [radius, setRadius] = useState<Record<Corner, number>>({
		tl: 8,
		tr: 8,
		bl: 8,
		br: 8,
	});

	const equal = corners.every((corner) => radius[corner] === radius.tl);

	return (
		<div className="flex flex-col items-center gap-6">
			<div
				className="bg-muted size-24 border"
				style={{
					borderTopLeftRadius: radius.tl,
					borderTopRightRadius: radius.tr,
					borderBottomLeftRadius: radius.bl,
					borderBottomRightRadius: radius.br,
				}}
			/>
			<Collapsible className="w-52">
				<div className="flex items-center gap-2">
					<RadiusInput
						label="Radius"
						value={equal ? radius.tl : null}
						onChange={(value) =>
							setRadius({ tl: value, tr: value, bl: value, br: value })
						}
						active={corners}
						className="flex-1"
					/>
					<CollapsibleTrigger
						render={
							<Button
								variant="outline"
								size="icon"
								aria-label="Toggle corner radii"
							/>
						}
					>
						<ChevronsUpDownIcon />
					</CollapsibleTrigger>
				</div>
				<CollapsiblePanel className="-m-1">
					<div className="grid grid-cols-2 gap-2 p-1 pt-3">
						{corners.map((corner) => (
							<RadiusInput
								key={corner}
								label={labels[corner]}
								value={radius[corner]}
								onChange={(value) =>
									setRadius((previous) => ({ ...previous, [corner]: value }))
								}
								active={[corner]}
							/>
						))}
					</div>
				</CollapsiblePanel>
			</Collapsible>
		</div>
	);
}
