import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const members = [
	{ name: "Olivia Martin", email: "olivia@example.com", role: "Owner" },
	{ name: "Jackson Lee", email: "jackson@example.com", role: "Admin" },
	{ name: "Isabella Nguyen", email: "isabella@example.com", role: "Member" },
	{ name: "William Kim", email: "william@example.com", role: "Member" },
];

export default function TableDefaultDemo() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead>Role</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{members.map((member) => (
					<TableRow key={member.email}>
						<TableCell className="font-medium">{member.name}</TableCell>
						<TableCell className="text-muted-foreground">
							{member.email}
						</TableCell>
						<TableCell>{member.role}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
