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

export default function ToolbarDemo() {
	return (
		<Toolbar>
			<ToggleGroup className="border-none bg-transparent p-0" toggleMultiple>
				<ToolbarButton
					size="icon"
					render={
						<Toggle
							className="data-[pressed]:bg-green-950 data-[pressed]:text-green-200"
							aria-label="Show AI thinking"
							value="ai-thinking"
						>
							<LightbulbIcon className="size-4" />
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
							<GlobeIcon className="size-4" />
						</Toggle>
					}
				/>
			</ToggleGroup>

			<ToolbarSeparator />

			<Select defaultValue="grok-3">
				<ToolbarButton
					className="w-40 justify-between border-none md:w-52"
					render={
						<SelectTrigger>
							<SelectValue
								className="max-w-24 truncate md:max-w-40"
								placeholder="Select a model"
							/>
						</SelectTrigger>
					}
				/>
				<SelectContent className="w-52">
					<SelectItem value="claude-3.7-sonnet">claude-3.7-sonnet</SelectItem>
					<SelectItem value="claude-3.5-sonnet">claude-3.5-sonnet</SelectItem>
					<SelectItem value="gpt-4o">gpt-4o</SelectItem>
					<SelectItem value="o3-mini">o3-mini</SelectItem>
					<SelectItem value="grok-3">grok-3</SelectItem>
				</SelectContent>
			</Select>

			<ToolbarSeparator />

			<Popover>
				<ToolbarButton
					size="icon"
					render={<PopoverTrigger />}
					aria-label="Edit prompt"
				>
					<SparklesIcon className="size-4 shrink-0" />
				</ToolbarButton>
				<PopoverContent className="w-80">
					<PopoverHeader>
						<PopoverTitle>Edit Prompt Template</PopoverTitle>
						<PopoverDescription>
							Customize the system prompt used for AI generation
						</PopoverDescription>
					</PopoverHeader>
					<div className="my-2">
						<Textarea
							className="min-h-32 resize-none"
							defaultValue="You are a helpful AI assistant. Your task is to help the user with their writing needs. Be concise, accurate, and helpful."
						/>
					</div>
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
