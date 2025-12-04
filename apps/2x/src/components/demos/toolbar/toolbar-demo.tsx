"use client"

import { GlobeIcon, LightbulbIcon, SparklesIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Popover,
	PopoverClose,
	PopoverContent,
	PopoverDescription,
	PopoverFooter,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"
import {
	Toolbar,
	ToolbarButton,
	ToolbarSeparator,
} from "@/components/ui/toolbar"

const models = [
	{
		label: "Select a model",
		value: null,
	},
	{
		label: "Grok 3",
		value: "grok-3",
	},
	{
		label: "Claude 3.7 Sonnet",
		value: "claude-3.7-sonnet",
	},

	{
		label: "GPT-4o",
		value: "gpt-4o",
	},
	{
		label: "04-mini",
		value: "o4-mini",
	},
]

export default function ToolbarDemo() {
	return (
		<Toolbar>
			<ToggleGroup className="border-none bg-transparent p-0" multiple>
				<ToolbarButton
					size="icon"
					render={
						<Toggle
							className="data-pressed:bg-green-950 data-pressed:text-green-200"
							aria-label="Show AI thinking"
							value="ai-thinking"
						>
							<LightbulbIcon />
						</Toggle>
					}
				/>
				<ToolbarButton
					size="icon"
					render={
						<Toggle
							className="data-[pressed]:bg-blue-950 data-[pressed]:text-blue-200"
							aria-label="Use web search"
							value="web-search"
						>
							<GlobeIcon />
						</Toggle>
					}
				/>
			</ToggleGroup>

			<ToolbarSeparator />

			<Select items={models}>
				<SelectTrigger className="w-40 md:w-52">
					<SelectValue className="truncate" />
				</SelectTrigger>
				<SelectContent className="w-52">
					{models.map((model) => (
						<SelectItem key={model.value} value={model.value}>
							{model.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>

			<ToolbarSeparator />

			<Popover>
				<ToolbarButton
					size="icon"
					variant="outline"
					render={<PopoverTrigger />}
					aria-label="Edit prompt"
				>
					<SparklesIcon />
				</ToolbarButton>
				<PopoverContent className="w-80 space-y-2">
					<PopoverHeader>
						<PopoverTitle>Edit Prompt Template</PopoverTitle>
						<PopoverDescription>
							Customize the system prompt used for AI generation
						</PopoverDescription>
					</PopoverHeader>
					<Textarea
						className="resize-none"
						defaultValue="You are a helpful AI assistant. Your task is to help the user with their writing needs. Be concise, accurate, and helpful."
					/>
					<PopoverFooter>
						<PopoverClose
							render={<Button variant="outline">Save Prompt</Button>}
						/>
					</PopoverFooter>
				</PopoverContent>
			</Popover>
		</Toolbar>
	)
}
