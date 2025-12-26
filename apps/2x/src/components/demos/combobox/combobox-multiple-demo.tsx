import * as React from "react"

import {
	Combobox,
	ComboboxChip,
	ComboboxChips,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxValue,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"

export default function ComboboxMultipleDemo() {
	const containerRef = React.useRef<HTMLDivElement | null>(null)

	return (
		<Combobox items={langs} multiple>
			<div className="flex w-80 flex-col gap-2">
				<Label htmlFor="select-language">Select a language</Label>
				<ComboboxChips ref={containerRef}>
					<ComboboxValue>
						{(value: ProgrammingLanguage[]) => (
							<React.Fragment>
								{value.length > 0 && (
									<div className="flex flex-wrap gap-1 p-1">
										{value.map((language) => (
											<ComboboxChip
												key={language.id}
												aria-label={language.value}
											>
												{language.value}
											</ComboboxChip>
										))}
									</div>
								)}
								<ComboboxInput
									id="select-language"
									placeholder="e.g. TypeScript"
									showClear={false}
									multiple
								/>
							</React.Fragment>
						)}
					</ComboboxValue>
				</ComboboxChips>
			</div>

			<ComboboxContent anchor={containerRef}>
				<ComboboxEmpty>No languages found.</ComboboxEmpty>
				<ComboboxList>
					{(language: ProgrammingLanguage) => (
						<ComboboxItem key={language.id} value={language}>
							{language.value}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	)
}

interface ProgrammingLanguage {
	id: string
	value: string
}

const langs: ProgrammingLanguage[] = [
	{ id: "js", value: "JavaScript" },
	{ id: "ts", value: "TypeScript" },
	{ id: "py", value: "Python" },
	{ id: "java", value: "Java" },
	{ id: "cpp", value: "C++" },
	{ id: "cs", value: "C#" },
	{ id: "php", value: "PHP" },
	{ id: "ruby", value: "Ruby" },
	{ id: "go", value: "Go" },
	{ id: "rust", value: "Rust" },
	{ id: "swift", value: "Swift" },
]
