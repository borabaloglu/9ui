import * as React from "react";

import {
	Combobox,
	ComboboxCollection,
	ComboboxEmpty,
	ComboboxGroup,
	ComboboxGroupLabel,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
	ComboboxPopup,
	ComboboxSeparator,
	ComboboxValue,
} from "@/components/ui/combobox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ComboboxGroupsDemo() {
	return (
		<Field className="max-w-sm">
			<FieldLabel>Technology</FieldLabel>
			<Combobox items={groups}>
				<ComboboxInput placeholder="e.g. React" render={<Input />} />
				<ComboboxPopup>
					<ComboboxEmpty>
						No technologies found for “<ComboboxValue />”
					</ComboboxEmpty>
					<ComboboxList>
						{(group: Group, index: number) => (
							<React.Fragment key={group.value}>
								{index > 0 && <ComboboxSeparator />}
								<ComboboxGroup items={group.items}>
									<ComboboxGroupLabel>{group.value}</ComboboxGroupLabel>
									<ComboboxCollection>
										{(item: Technology) => (
											<ComboboxItem key={item.value} value={item}>
												{item.label}
											</ComboboxItem>
										)}
									</ComboboxCollection>
								</ComboboxGroup>
							</React.Fragment>
						)}
					</ComboboxList>
				</ComboboxPopup>
			</Combobox>
		</Field>
	);
}

interface Technology {
	label: string;
	value: string;
}

interface Group {
	value: string;
	items: Technology[];
}

const groups: Group[] = [
	{
		value: "Frontend Frameworks",
		items: [
			{ label: "React", value: "react" },
			{ label: "Vue.js", value: "vue" },
			{ label: "Angular", value: "angular" },
			{ label: "Svelte", value: "svelte" },
		],
	},
	{
		value: "Backend Runtime",
		items: [
			{ label: "Node.js", value: "nodejs" },
			{ label: "Deno", value: "deno" },
			{ label: "Bun", value: "bun" },
		],
	},
	{
		value: "Backend Frameworks",
		items: [
			{ label: "Express.js", value: "express" },
			{ label: "Fastify", value: "fastify" },
			{ label: "NestJS", value: "nestjs" },
		],
	},
	{
		value: "Meta Frameworks",
		items: [
			{ label: "Next.js", value: "nextjs" },
			{ label: "Nuxt.js", value: "nuxt" },
			{ label: "Remix", value: "remix" },
		],
	},
];
