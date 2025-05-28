import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
	return (
		<div className="w-80">
			<Select>
				<SelectTrigger>
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="cherry">Cherry</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
