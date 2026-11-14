import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const rows = ["first", "second", "third", "fourth", "fifth"];

export default function SkeletonTableDemo() {
	return (
		<Table
			variant="card"
			containerClassName="max-w-lg"
			aria-busy="true"
			aria-label="Loading members"
		>
			<TableHeader>
				<TableRow>
					<TableHead>Name</TableHead>
					<TableHead className="max-sm:hidden">Email</TableHead>
					<TableHead>Role</TableHead>
					<TableHead className="text-end">Joined</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{rows.map((row) => (
					<TableRow key={row}>
						<TableCell>
							<Skeleton className="h-5 w-24" />
						</TableCell>
						<TableCell className="max-sm:hidden">
							<Skeleton className="h-5 w-36" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-5 w-16" />
						</TableCell>
						<TableCell>
							<Skeleton className="ms-auto h-5 w-20" />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
