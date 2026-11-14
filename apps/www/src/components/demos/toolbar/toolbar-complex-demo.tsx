import {
	AlignCenterIcon,
	AlignLeftIcon,
	AlignRightIcon,
	BoldIcon,
	EllipsisIcon,
	ItalicIcon,
	Redo2Icon,
	SearchIcon,
	UnderlineIcon,
	Undo2Icon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
	Toolbar,
	ToolbarButton,
	ToolbarGroup,
	ToolbarInput,
	ToolbarSeparator,
} from "@/components/ui/toolbar";
import {
	Tooltip,
	TooltipPopup,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const history = [
	{ label: "Undo", icon: Undo2Icon },
	{ label: "Redo", icon: Redo2Icon },
];

const formats = [
	{ value: "bold", label: "Bold", icon: BoldIcon },
	{ value: "italic", label: "Italic", icon: ItalicIcon },
	{ value: "underline", label: "Underline", icon: UnderlineIcon },
];

const alignments = [
	{ value: "left", label: "Align left", icon: AlignLeftIcon },
	{ value: "center", label: "Align center", icon: AlignCenterIcon },
	{ value: "right", label: "Align right", icon: AlignRightIcon },
];

export default function ToolbarComplexDemo() {
	return (
		<TooltipProvider>
			<Toolbar
				className="max-w-full overflow-x-auto before:hidden"
				aria-label="Editor"
			>
				<ToolbarGroup aria-label="History">
					{history.map(({ label, icon: Icon }) => (
						<Tooltip key={label}>
							<TooltipTrigger
								render={
									<ToolbarButton
										render={<Button variant="ghost" size="icon" />}
										aria-label={label}
									/>
								}
							>
								<Icon />
							</TooltipTrigger>
							<TooltipPopup sideOffset={8}>{label}</TooltipPopup>
						</Tooltip>
					))}
				</ToolbarGroup>

				<ToolbarSeparator />

				<ToggleGroup spacing={1} multiple aria-label="Formatting">
					{formats.map(({ value, label, icon: Icon }) => (
						<Tooltip key={value}>
							<TooltipTrigger
								render={
									<ToolbarButton
										render={<ToggleGroupItem value={value} />}
										aria-label={label}
									/>
								}
							>
								<Icon />
							</TooltipTrigger>
							<TooltipPopup sideOffset={8}>{label}</TooltipPopup>
						</Tooltip>
					))}
				</ToggleGroup>

				<ToolbarSeparator />

				<ToggleGroup spacing={1} defaultValue={["left"]} aria-label="Alignment">
					{alignments.map(({ value, label, icon: Icon }) => (
						<Tooltip key={value}>
							<TooltipTrigger
								render={
									<ToolbarButton
										render={<ToggleGroupItem value={value} />}
										aria-label={label}
									/>
								}
							>
								<Icon />
							</TooltipTrigger>
							<TooltipPopup sideOffset={8}>{label}</TooltipPopup>
						</Tooltip>
					))}
				</ToggleGroup>

				<ToolbarSeparator />

				<Menu>
					<ToolbarButton
						render={
							<MenuTrigger render={<Button variant="ghost" size="icon" />} />
						}
						aria-label="More actions"
					>
						<EllipsisIcon />
					</ToolbarButton>
					<MenuPopup>
						<MenuItem>Insert Table</MenuItem>
						<MenuItem>Insert Image</MenuItem>
						<MenuSeparator />
						<MenuItem>Clear Formatting</MenuItem>
					</MenuPopup>
				</Menu>

				<ToolbarSeparator />

				<InputGroup className="w-40 shrink-0">
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
					<ToolbarInput
						render={
							<InputGroupInput placeholder="Search" aria-label="Search" />
						}
					/>
				</InputGroup>
			</Toolbar>
		</TooltipProvider>
	);
}
