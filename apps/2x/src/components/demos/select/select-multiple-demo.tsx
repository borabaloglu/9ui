import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

const languages = {
	javascript: "JavaScript",
	typescript: "TypeScript",
	python: "Python",
	java: "Java",
	csharp: "C#",
	php: "PHP",
	cpp: "C++",
	rust: "Rust",
	go: "Go",
	swift: "Swift",
}

type Language = keyof typeof languages

const values = Object.keys(languages) as Language[]

function renderValue(value: Language[]) {
	if (value.length === 0) {
		return "Select languages..."
	}

	const firstLanguage = languages[value[0]]
	const additionalLanguages =
		value.length > 1 ? ` (+${value.length - 1} more)` : ""
	return firstLanguage + additionalLanguages
}

export default function SelectMultipleDemo() {
	return (
		<div className="w-80">
			<Select multiple>
				<SelectTrigger className="w-full">
					<SelectValue>{renderValue}</SelectValue>
				</SelectTrigger>
				<SelectContent>
					{values.map((value) => (
						<SelectItem key={value} value={value}>
							{languages[value]}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
