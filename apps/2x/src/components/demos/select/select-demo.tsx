import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const items = [
	{
		label: "Select a fruit",
		value: null,
	},
	{
		label: "Apple",
		value: "apple",
	},
	{
		label: "Banana",
		value: "banana",
	},
	{
		label: "Cherry",
		value: "cherry",
	},
]

export default function SelectDemo() {
	return (
		<div className="w-80">
			<Select items={items}>
				<SelectTrigger className="w-full">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{items.map((item) => (
						<SelectItem key={item.value} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
