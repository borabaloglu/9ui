import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export default function SelectWithGroups() {
	return (
		<div className="w-80">
			<Select>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Select an option" />
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
