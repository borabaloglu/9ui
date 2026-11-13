import * as React from "react";

import {
	Autocomplete,
	AutocompleteCollection,
	AutocompleteEmpty,
	AutocompleteGroup,
	AutocompleteGroupLabel,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
	AutocompletePopup,
	AutocompleteSeparator,
	AutocompleteValue,
} from "@/components/ui/autocomplete";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function AutocompleteGroupsDemo() {
	return (
		<Field className="max-w-sm">
			<FieldLabel>Technology</FieldLabel>
			<Autocomplete items={groups}>
				<AutocompleteInput
					placeholder="e.g. React, Vue, Angular"
					render={<Input />}
				/>
				<AutocompletePopup className="w-(--anchor-width)">
					<AutocompleteEmpty>
						No technologies found for “<AutocompleteValue />”
					</AutocompleteEmpty>
					<AutocompleteList>
						{({ id: groupId, value: groupLabel, items }, index) => (
							<React.Fragment key={groupId}>
								{index > 0 && <AutocompleteSeparator />}
								<AutocompleteGroup items={items}>
									<AutocompleteGroupLabel>{groupLabel}</AutocompleteGroupLabel>
									<AutocompleteCollection>
										{({ id, value }) => (
											<AutocompleteItem key={id} value={value}>
												{value}
											</AutocompleteItem>
										)}
									</AutocompleteCollection>
								</AutocompleteGroup>
							</React.Fragment>
						)}
					</AutocompleteList>
				</AutocompletePopup>
			</Autocomplete>
		</Field>
	);
}

type Group = {
	id: string;
	value: string;
	items: { id: string; value: string }[];
};

const groups: Group[] = [
	{
		id: "frontend-frameworks",
		value: "Frontend Frameworks",
		items: [
			{ id: "react", value: "React" },
			{ id: "vue", value: "Vue.js" },
			{ id: "angular", value: "Angular" },
			{ id: "svelte", value: "Svelte" },
		],
	},
	{
		id: "backend-runtime",
		value: "Backend Runtime",
		items: [
			{ id: "nodejs", value: "Node.js" },
			{ id: "deno", value: "Deno" },
			{ id: "bun", value: "Bun" },
		],
	},
	{
		id: "backend-frameworks",
		value: "Backend Frameworks",
		items: [
			{ id: "express", value: "Express.js" },
			{ id: "fastify", value: "Fastify" },
			{ id: "nestjs", value: "NestJS" },
		],
	},
	{
		id: "meta-frameworks",
		value: "Meta Frameworks",
		items: [
			{ id: "nextjs", value: "Next.js" },
			{ id: "nuxt", value: "Nuxt.js" },
			{ id: "remix", value: "Remix" },
		],
	},
];
