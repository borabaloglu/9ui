"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const files = [
	{ name: "annual-report.pdf", size: "2.4 MB", modified: "Nov 12, 2026" },
	{ name: "brand-guidelines.fig", size: "18.1 MB", modified: "Nov 9, 2026" },
	{ name: "launch-plan.md", size: "12 KB", modified: "Nov 3, 2026" },
	{ name: "team-photo.jpg", size: "4.8 MB", modified: "Oct 28, 2026" },
];

export default function TableSelectionDemo() {
	const [selected, setSelected] = useState<string[]>([files[1].name]);

	const allSelected = selected.length === files.length;

	return (
		<Table variant="card">
			<TableHeader>
				<TableRow>
					<TableHead>
						<Checkbox
							aria-label="Select all files"
							checked={allSelected}
							indeterminate={selected.length > 0 && !allSelected}
							onCheckedChange={(checked) =>
								setSelected(checked ? files.map((file) => file.name) : [])
							}
						/>
					</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Size</TableHead>
					<TableHead className="text-end">Modified</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{files.map((file) => {
					const isSelected = selected.includes(file.name);

					return (
						<TableRow key={file.name} aria-selected={isSelected}>
							<TableCell>
								<Checkbox
									aria-label={`Select ${file.name}`}
									checked={isSelected}
									onCheckedChange={(checked) =>
										setSelected((current) =>
											checked
												? [...current, file.name]
												: current.filter((name) => name !== file.name),
										)
									}
								/>
							</TableCell>
							<TableCell className="font-medium">{file.name}</TableCell>
							<TableCell>{file.size}</TableCell>
							<TableCell className="text-end">{file.modified}</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
