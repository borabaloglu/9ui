import * as React from "react"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ComboboxCreatableDemo() {
	const id = React.useId()

	const [labels, setLabels] = React.useState<LabelItem[]>(initialLabels)
	const [selected, setSelected] = React.useState<LabelItem[]>([])
	const [query, setQuery] = React.useState("")
	const [openDialog, setOpenDialog] = React.useState(false)

	const containerRef = React.useRef<HTMLDivElement | null>(null)
	const createInputRef = React.useRef<HTMLInputElement | null>(null)
	const pendingQueryRef = React.useRef("")

	function handleCreate() {
		const input = createInputRef.current
		const value = input ? input.value.trim() : ""
		if (!value) {
			return
		}

		const normalized = value.toLocaleLowerCase()
		const baseId = normalized.replace(/\s+/g, "-")
		const existing = labels.find(
			(l) => l.value.trim().toLocaleLowerCase() === normalized
		)

		if (existing) {
			setSelected((prev) =>
				prev.some((i) => i.id === existing.id) ? prev : [...prev, existing]
			)
			setOpenDialog(false)
			setQuery("")
			return
		}

		// Ensure we don't collide with an existing id (e.g., value "docs" vs. existing id "docs")
		const existingIds = new Set(labels.map((l) => l.id))
		let uniqueId = baseId
		if (existingIds.has(uniqueId)) {
			let i = 2
			while (existingIds.has(`${baseId}-${i}`)) {
				i += 1
			}
			uniqueId = `${baseId}-${i}`
		}

		const newItem: LabelItem = { id: uniqueId, value }

		if (!selected.find((item) => item.id === newItem.id)) {
			setLabels((prev) => [...prev, newItem])
			setSelected((prev) => [...prev, newItem])
		}

		setOpenDialog(false)
		setQuery("")
	}

	function handleCreateSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		handleCreate()
	}

	const trimmed = query.trim()
	const lowered = trimmed.toLocaleLowerCase()
	const exactExists = labels.some(
		(l) => l.value.trim().toLocaleLowerCase() === lowered
	)
	// Show the creatable item alongside matches if there's no exact match
	const itemsForView: Array<LabelItem> =
		trimmed !== "" && !exactExists
			? [
					...labels,
					{
						creatable: trimmed,
						id: `create:${lowered}`,
						value: `Create "${trimmed}"`,
					},
				]
			: labels

	return (
		<React.Fragment>
			<Combobox
				items={itemsForView}
				multiple
				onValueChange={(value) => {
					const next = value as LabelItem[]
					const last = next[next.length - 1]
					if (last && last.creatable) {
						pendingQueryRef.current = last.creatable
						setOpenDialog(true)
						return
					}
					const clean = next.filter((i: LabelItem) => !i.creatable)
					setSelected(clean)
					setQuery("")
				}}
				value={selected}
				inputValue={query}
				onInputValueChange={setQuery}
				onOpenChange={(open, details) => {
					if ("key" in details.event && details.event.key === "Enter") {
						// When pressing Enter:
						// - If the typed value exactly matches an existing item, add that item to the selected chips
						// - Otherwise, create a new item
						if (trimmed === "") {
							return
						}

						const existing = labels.find(
							(l) => l.value.trim().toLocaleLowerCase() === lowered
						)

						if (existing) {
							setSelected((prev) =>
								prev.some((i) => i.id === existing.id)
									? prev
									: [...prev, existing]
							)
							setQuery("")
							return
						}

						pendingQueryRef.current = trimmed
						setOpenDialog(true)
					}
				}}
			>
				<div className="flex w-80 flex-col gap-2">
					<Label htmlFor={id}>Labels</Label>
					<ComboboxChips ref={containerRef}>
						<ComboboxValue>
							{(value: LabelItem[]) => (
								<React.Fragment>
									{value.length > 0 && (
										<div className="flex flex-wrap gap-1 p-1">
											{value.map((label) => (
												<ComboboxChip key={label.id} aria-label={label.value}>
													{label.value}
												</ComboboxChip>
											))}
										</div>
									)}
									<ComboboxInput
										id={id}
										placeholder="e.g. bug"
										showClear={false}
										multiple
									/>
								</React.Fragment>
							)}
						</ComboboxValue>
					</ComboboxChips>
				</div>

				<ComboboxContent anchor={containerRef}>
					<ComboboxEmpty>No labels found.</ComboboxEmpty>
					<ComboboxList>
						{(item: LabelItem) =>
							item.creatable ? (
								<ComboboxItem key={item.id} value={item}>
									<Plus className="size-4" />
									<span>Create &quot;{item.creatable}&quot;</span>
								</ComboboxItem>
							) : (
								<ComboboxItem key={item.id} value={item}>
									{item.value}
								</ComboboxItem>
							)
						}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>

			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogContent initialFocus={createInputRef}>
					<DialogTitle>Create new label</DialogTitle>
					<DialogDescription>Add a new label to select.</DialogDescription>
					<form onSubmit={handleCreateSubmit} className="space-y-4">
						<Input
							ref={createInputRef}
							placeholder="Label name"
							defaultValue={pendingQueryRef.current}
						/>
						<DialogFooter>
							<Button
								type="button"
								variant="outline"
								onClick={() => setOpenDialog(false)}
							>
								Cancel
							</Button>
							<Button type="submit">Create</Button>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	)
}

interface LabelItem {
	creatable?: string
	id: string
	value: string
}

const initialLabels: LabelItem[] = [
	{ id: "bug", value: "bug" },
	{ id: "docs", value: "documentation" },
	{ id: "enhancement", value: "enhancement" },
	{ id: "help-wanted", value: "help wanted" },
	{ id: "good-first-issue", value: "good first issue" },
]
