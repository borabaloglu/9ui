"use client";

import { type KeyboardEvent, useState } from "react";
import { FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react";

import {
	Collapsible,
	CollapsiblePanel,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { cn } from "@/lib/utils";

interface FileNode {
	name: string;
	children?: FileNode[];
}

const tree: FileNode[] = [
	{
		name: "src",
		children: [
			{
				name: "components",
				children: [
					{
						name: "ui",
						children: [
							{ name: "button.tsx" },
							{ name: "collapsible.tsx" },
							{ name: "input.tsx" },
						],
					},
					{
						name: "demos",
						children: [
							{ name: "collapsible-demo.tsx" },
							{ name: "input-demo.tsx" },
						],
					},
				],
			},
			{
				name: "app",
				children: [{ name: "layout.tsx" }, { name: "page.tsx" }],
			},
			{
				name: "lib",
				children: [{ name: "utils.ts" }],
			},
		],
	},
];

const itemClassName =
	"focus-visible:ring-ring/50 flex min-h-7 w-full items-center gap-2 rounded-sm pe-2 text-start text-sm outline-none select-none focus-visible:ring-3 focus-visible:ring-inset any-pointer-coarse:min-h-9 [&_svg]:size-4 [&_svg]:shrink-0";

function FileTreeNode({
	node,
	path,
	depth,
	active,
	onActiveChange,
}: {
	node: FileNode;
	path: string;
	depth: number;
	active: string;
	onActiveChange: (path: string) => void;
}) {
	const item = {
		role: "treeitem",
		"aria-level": depth + 1,
		tabIndex: path === active ? 0 : -1,
		onFocus: () => onActiveChange(path),
		style: { paddingInlineStart: `${depth * 16 + 8}px` },
	};

	if (!node.children) {
		return (
			<div {...item} className={cn(itemClassName, "text-muted-foreground")}>
				<FileIcon />
				{node.name}
			</div>
		);
	}

	return (
		<Collapsible
			role="none"
			defaultOpen={depth === 0}
			onOpenChange={(open) => {
				if (!open && active.startsWith(`${path}/`)) {
					onActiveChange(path);
				}
			}}
		>
			<CollapsibleTrigger
				{...item}
				className={cn(itemClassName, "hover:bg-accent font-medium")}
			>
				<FolderIcon className="in-data-panel-open:hidden" />
				<FolderOpenIcon className="not-in-data-panel-open:hidden" />
				{node.name}
			</CollapsibleTrigger>
			<CollapsiblePanel role="group" keepMounted>
				{node.children.map((child) => (
					<FileTreeNode
						key={child.name}
						node={child}
						path={`${path}/${child.name}`}
						depth={depth + 1}
						active={active}
						onActiveChange={onActiveChange}
					/>
				))}
			</CollapsiblePanel>
		</Collapsible>
	);
}

function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
	const current = event.target as HTMLElement;
	if (current.getAttribute("role") !== "treeitem") {
		return;
	}

	const items = Array.from(
		event.currentTarget.querySelectorAll<HTMLElement>("[role=treeitem]"),
	).filter(
		(item) => !item.closest("[data-slot=collapsible-panel][data-closed]"),
	);
	const index = items.indexOf(current);
	const expanded = current.getAttribute("aria-expanded");

	let target: HTMLElement | null | undefined;

	switch (event.key) {
		case "ArrowDown":
			target = items[index + 1];
			break;
		case "ArrowUp":
			target = items[index - 1];
			break;
		case "Home":
			target = items[0];
			break;
		case "End":
			target = items.at(-1);
			break;
		case "ArrowRight":
			if (expanded === "false") {
				current.click();
			} else if (expanded === "true") {
				target = items[index + 1];
			}
			break;
		case "ArrowLeft":
			if (expanded === "true") {
				current.click();
			} else {
				target = current.closest("[data-slot=collapsible-panel]")
					?.previousElementSibling as HTMLElement | null;
			}
			break;
		default:
			return;
	}

	event.preventDefault();
	target?.focus();
}

export default function CollapsibleFileTreeDemo() {
	const [active, setActive] = useState(tree[0].name);

	return (
		<div
			role="tree"
			aria-label="Files"
			className="mx-auto w-full max-w-64"
			onKeyDown={handleKeyDown}
		>
			{tree.map((node) => (
				<FileTreeNode
					key={node.name}
					node={node}
					path={node.name}
					depth={0}
					active={active}
					onActiveChange={setActive}
				/>
			))}
		</div>
	);
}
