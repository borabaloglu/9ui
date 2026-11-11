import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const countries = [
	{ label: "Select a country", value: null },
	{ label: "Argentina", value: "argentina" },
	{ label: "Australia", value: "australia" },
	{ label: "Brazil", value: "brazil" },
	{ label: "Canada", value: "canada" },
	{ label: "China", value: "china" },
	{ label: "Denmark", value: "denmark" },
	{ label: "Egypt", value: "egypt" },
	{ label: "Finland", value: "finland" },
	{ label: "France", value: "france" },
	{ label: "Germany", value: "germany" },
	{ label: "Greece", value: "greece" },
	{ label: "India", value: "india" },
	{ label: "Indonesia", value: "indonesia" },
	{ label: "Italy", value: "italy" },
	{ label: "Japan", value: "japan" },
	{ label: "Mexico", value: "mexico" },
	{ label: "Netherlands", value: "netherlands" },
	{ label: "New Zealand", value: "new-zealand" },
	{ label: "Nigeria", value: "nigeria" },
	{ label: "Norway", value: "norway" },
	{ label: "Pakistan", value: "pakistan" },
	{ label: "Poland", value: "poland" },
	{ label: "Portugal", value: "portugal" },
	{ label: "Russia", value: "russia" },
	{ label: "Saudi Arabia", value: "saudi-arabia" },
	{ label: "South Africa", value: "south-africa" },
	{ label: "South Korea", value: "south-korea" },
	{ label: "Spain", value: "spain" },
	{ label: "Sweden", value: "sweden" },
	{ label: "Turkey", value: "turkey" },
	{ label: "Ukraine", value: "ukraine" },
	{ label: "United Kingdom", value: "united-kingdom" },
	{ label: "United States", value: "united-states" },
];

export default function SelectScrollableDemo() {
	return (
		<Select items={countries}>
			<SelectTrigger aria-label="Country" className="w-44">
				<SelectValue />
			</SelectTrigger>
			<SelectPopup>
				{countries.map(({ label, value }) => (
					<SelectItem key={value} value={value}>
						{label}
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}
