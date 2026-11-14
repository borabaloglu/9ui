import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const movies = [
	{ title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
	{ title: "The Godfather", year: 1972, rating: 9.2 },
	{ title: "The Dark Knight", year: 2008, rating: 9.0 },
	{ title: "12 Angry Men", year: 1957, rating: 9.0 },
];

export default function TableCaptionDemo() {
	return (
		<Table variant="card">
			<TableCaption>Top rated movies of all time.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Title</TableHead>
					<TableHead className="text-end">Year</TableHead>
					<TableHead className="text-end">Rating</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{movies.map((movie) => (
					<TableRow key={movie.title}>
						<TableCell className="font-medium">{movie.title}</TableCell>
						<TableCell className="text-end">{movie.year}</TableCell>
						<TableCell className="text-end">
							{movie.rating.toFixed(1)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
