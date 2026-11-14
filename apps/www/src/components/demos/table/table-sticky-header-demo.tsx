import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const countries = [
	{ name: "Argentina", capital: "Buenos Aires", population: 45.8 },
	{ name: "Brazil", capital: "Brasília", population: 216.4 },
	{ name: "Canada", capital: "Ottawa", population: 38.8 },
	{ name: "Denmark", capital: "Copenhagen", population: 5.9 },
	{ name: "Egypt", capital: "Cairo", population: 112.7 },
	{ name: "France", capital: "Paris", population: 68.2 },
	{ name: "Germany", capital: "Berlin", population: 84.5 },
	{ name: "India", capital: "New Delhi", population: 1428.6 },
	{ name: "Japan", capital: "Tokyo", population: 124.5 },
	{ name: "Kenya", capital: "Nairobi", population: 55.1 },
	{ name: "Mexico", capital: "Mexico City", population: 128.5 },
	{ name: "Norway", capital: "Oslo", population: 5.5 },
	{ name: "Türkiye", capital: "Ankara", population: 85.3 },
];

export default function TableStickyHeaderDemo() {
	return (
		<Table variant="card" containerClassName="max-h-72">
			<TableHeader sticky>
				<TableRow>
					<TableHead>Country</TableHead>
					<TableHead>Capital</TableHead>
					<TableHead className="text-end">Population (M)</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{countries.map((country) => (
					<TableRow key={country.name}>
						<TableCell className="font-medium">{country.name}</TableCell>
						<TableCell>{country.capital}</TableCell>
						<TableCell className="text-end">
							{country.population.toFixed(1)}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
