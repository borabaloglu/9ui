import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

const movies = [
	{ title: "The Shawshank Redemption", year: 1994, rating: 9.3 },
	{ title: "The Godfather", year: 1972, rating: 9.2 },
	{ title: "The Dark Knight", year: 2008, rating: 9.0 },
	{ title: "The Godfather Part II", year: 1974, rating: 9.0 },
	{ title: "12 Angry Men", year: 1957, rating: 9.0 },
	{ title: "Schindler's List", year: 1993, rating: 9.0 },
	{
		title: "The Lord of the Rings: The Return of the King",
		year: 2003,
		rating: 9.0,
	},
	{ title: "Pulp Fiction", year: 1994, rating: 8.9 },
	{
		title: "The Lord of the Rings: The Fellowship of the Ring",
		year: 2001,
		rating: 8.8,
	},
	{ title: "Forrest Gump", year: 1994, rating: 8.8 },
]

export default function TableDemo() {
	return (
		<div className="w-full overflow-hidden rounded-lg border pb-2">
			<Table>
				<TableCaption>Top 10 Movies of All Time</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead className="w-20">Year</TableHead>
						<TableHead className="w-20 text-right">IMDB</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{movies.map((movie) => (
						<TableRow key={movie.title}>
							<TableCell className="py-4 font-medium sm:py-0">
								{movie.title}
							</TableCell>
							<TableCell>{movie.year}</TableCell>
							<TableCell className="text-right">{movie.rating}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
