import * as React from "react"

import {
	Autocomplete,
	AutocompleteContent,
	AutocompleteEmpty,
	AutocompleteInput,
	AutocompleteItem,
	AutocompleteList,
} from "@/components/ui/autocomplete"
import { Label } from "@/components/ui/label"

export default function AutocompleteAutoHighlightDemo() {
	return (
		<div className="w-80">
			<Autocomplete items={tags} autoHighlight>
				<div className="flex flex-col gap-2">
					<Label htmlFor="search-tags-autohighlight">Search tags</Label>
					<AutocompleteInput
						id="search-tags-autohighlight"
						placeholder="e.g. feature, fix, bug"
					/>
				</div>
				<AutocompleteContent>
					<AutocompleteEmpty>No tags found.</AutocompleteEmpty>
					<AutocompleteList>
						{(tag: Tag) => (
							<AutocompleteItem key={tag.id} value={tag}>
								{tag.value}
							</AutocompleteItem>
						)}
					</AutocompleteList>
				</AutocompleteContent>
			</Autocomplete>
		</div>
	)
}

interface Tag {
	id: string
	value: string
}

const tags: Tag[] = [
	{ id: "t1", value: "feature" },
	{ id: "t2", value: "fix" },
	{ id: "t3", value: "bug" },
	{ id: "t4", value: "docs" },
	{ id: "t5", value: "internal" },
	{ id: "t6", value: "mobile" },
	{ id: "c-accordion", value: "component: accordion" },
	{ id: "c-alert-dialog", value: "component: alert dialog" },
	{ id: "c-autocomplete", value: "component: autocomplete" },
	{ id: "c-avatar", value: "component: avatar" },
	{ id: "c-checkbox", value: "component: checkbox" },
	{ id: "c-checkbox-group", value: "component: checkbox group" },
	{ id: "c-collapsible", value: "component: collapsible" },
	{ id: "c-combobox", value: "component: combobox" },
	{ id: "c-context-menu", value: "component: context menu" },
	{ id: "c-dialog", value: "component: dialog" },
	{ id: "c-field", value: "component: field" },
	{ id: "c-form", value: "component: form" },
	{ id: "c-input", value: "component: input" },
	{ id: "c-popover", value: "component: popover" },
	{ id: "c-select", value: "component: select" },
	{ id: "c-switch", value: "component: switch" },
	{ id: "c-tabs", value: "component: tabs" },
	{ id: "c-tooltip", value: "component: tooltip" },
]
