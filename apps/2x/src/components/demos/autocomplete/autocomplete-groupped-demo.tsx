import * as React from "react"

import {
	Autocomplete,
	AutocompleteCollection,
	AutocompleteContent,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompleteSeparator,
	AutocompleteValue,
} from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

export default function AutocompleteGrouppedDemo() {
	// Filter and group items by category
	const groupedItems = React.useMemo(() => {
		const groups: { [key: string]: Item[] } = items.reduce(
			(acc, item) => {
				acc[item.category] = acc[item.category] || []
				acc[item.category].push(item)
				return acc
			},
			{} as { [key: string]: Item[] }
		)

		const order = [
			"Frontend Frameworks",
			"Backend Runtime",
			"Backend Frameworks",
			"Meta Frameworks",
		]

		return order.map((value) => ({ value, items: groups[value] ?? [] }))
	}, [])

	return (
		<div className="w-80">
			<Autocomplete items={groupedItems}>
				<div className="flex flex-col gap-2">
					<Label htmlFor="search-technologies">Search technologies</Label>
					<AutocompleteInput
						id="search-technologies"
						placeholder="e.g. React, Vue, Angular"
					/>
				</div>
				<AutocompleteContent>
					<AutocompleteEmpty>
						No technologies found for &quot;
						<AutocompleteValue />
						&quot;
					</AutocompleteEmpty>
					<AutocompleteList>
						{(group: Group, index: number) => (
							<React.Fragment key={group.value}>
								{index > 0 && <AutocompleteSeparator />}
								<AutocompleteGroup items={group.items}>
									<AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
									<AutocompleteCollection>
										{(item: Item) => (
											<AutocompleteItem key={item.id} value={item.value}>
												{item.value}
											</AutocompleteItem>
										)}
									</AutocompleteCollection>
								</AutocompleteGroup>
							</React.Fragment>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</Autocomplete>
		</div>
	)
}

interface Group {
	value: string
	items: Item[]
}

interface Item {
	id: string
	value: string
	category: string
}

const items: Item[] = [
	{ id: "react", value: "React", category: "Frontend Frameworks" },
	{ id: "vue", value: "Vue.js", category: "Frontend Frameworks" },
	{ id: "angular", value: "Angular", category: "Frontend Frameworks" },
	{ id: "svelte", value: "Svelte", category: "Frontend Frameworks" },
	{ id: "nodejs", value: "Node.js", category: "Backend Runtime" },
	{ id: "deno", value: "Deno", category: "Backend Runtime" },
	{ id: "bun", value: "Bun", category: "Backend Runtime" },
	{ id: "express", value: "Express.js", category: "Backend Frameworks" },
	{ id: "fastify", value: "Fastify", category: "Backend Frameworks" },
	{ id: "nestjs", value: "NestJS", category: "Backend Frameworks" },
	{ id: "nextjs", value: "Next.js", category: "Meta Frameworks" },
	{ id: "nuxt", value: "Nuxt.js", category: "Meta Frameworks" },
	{ id: "remix", value: "Remix", category: "Meta Frameworks" },
]
