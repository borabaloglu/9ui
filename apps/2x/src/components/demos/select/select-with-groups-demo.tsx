import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const items = [
	{
		label: "Select an option",
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
	{
		label: "Carrot",
		value: "carrot",
	},
	{
		label: "Potato",
		value: "potato",
	},
	{
		label: "Tomato",
		value: "tomato",
	},
]

export default function SelectWithGroupsDemo() {
	return (
		<div className="w-80">
			<Select items={items}>
				<SelectTrigger className="w-full">
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="cherry">Cherry</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Vegetables</SelectLabel>
						<SelectItem value="carrot">Carrot</SelectItem>
						<SelectItem value="potato">Potato</SelectItem>
						<SelectItem value="tomato">Tomato</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
