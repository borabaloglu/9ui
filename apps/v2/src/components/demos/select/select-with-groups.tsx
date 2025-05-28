import {
	Select,
	SelectContent,
	SelectGroup,
	SelectGroupLabel,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export default function SelectWithGroups() {
	return (
		<div className="w-80">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Select an option" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectGroupLabel>Fruits</SelectGroupLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="cherry">Cherry</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectGroupLabel>Vegetables</SelectGroupLabel>
						<SelectItem value="carrot">Carrot</SelectItem>
						<SelectItem value="potato">Potato</SelectItem>
						<SelectItem value="tomato">Tomato</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
