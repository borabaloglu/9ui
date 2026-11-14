import { EllipsisIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const projects = [
	{ name: "Marketing site", owner: "Olivia Martin", updated: "2 hours ago" },
	{ name: "Mobile app", owner: "Jackson Lee", updated: "Yesterday" },
	{ name: "Design system", owner: "Isabella Nguyen", updated: "3 days ago" },
	{ name: "Billing service", owner: "William Kim", updated: "Last week" },
];

export default function TableActionsDemo() {
	return (
		<Table variant="card">
			<TableHeader>
				<TableRow>
					<TableHead>Project</TableHead>
					<TableHead>Owner</TableHead>
					<TableHead>Updated</TableHead>
					<TableHead className="w-px">
						<span className="sr-only">Actions</span>
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{projects.map((project) => (
					<TableRow key={project.name}>
						<TableCell className="font-medium">{project.name}</TableCell>
						<TableCell>{project.owner}</TableCell>
						<TableCell className="text-muted-foreground">
							{project.updated}
						</TableCell>
						<TableCell className="py-0 last:pe-2">
							<Menu>
								<MenuTrigger
									render={
										<Button
											variant="ghost"
											size="icon-sm"
											aria-label={`Actions for ${project.name}`}
										/>
									}
								>
									<EllipsisIcon />
								</MenuTrigger>
								<MenuPopup align="end">
									<MenuItem>Open</MenuItem>
									<MenuItem>Rename</MenuItem>
									<MenuItem>Duplicate</MenuItem>
									<MenuSeparator />
									<MenuItem variant="destructive">Delete</MenuItem>
								</MenuPopup>
							</Menu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
