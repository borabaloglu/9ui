import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar"

export default function MenubarDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New File
						<MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						New Window
						<MenubarShortcut>⇧⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Open
						<MenubarShortcut>⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Open Folder
						<MenubarShortcut>⇧⌘O</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>Open Recent</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Save
						<MenubarShortcut>⌘S</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Save As
						<MenubarShortcut>⇧⌘S</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Close Window
						<MenubarShortcut>⌘W</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo
						<MenubarShortcut>⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo
						<MenubarShortcut>⌘Y</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Cut
						<MenubarShortcut>⌘X</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Copy
						<MenubarShortcut>⌘C</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Paste
						<MenubarShortcut>⌘V</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Find
						<MenubarShortcut>⌘F</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Replace
						<MenubarShortcut>⌥⌘F</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>Appearance</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarRadioGroup
								onValueChange={(value) => {
									console.log(value)
								}}
							>
								<MenubarRadioItem value="system">System</MenubarRadioItem>
								<MenubarRadioItem value="light">Light</MenubarRadioItem>
								<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						Show/Hide Sidebar
						<MenubarShortcut>⌃⌥⌘*</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Command Palette
						<MenubarShortcut>⇧⌘P</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>Expand Tabs</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Zoom In
						<MenubarShortcut>⌘+</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Zoom Out
						<MenubarShortcut>⌘-</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Reset Zoom
						<MenubarShortcut>⌘0</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Help</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Getting Started</MenubarItem>
					<MenubarItem>Report Issue</MenubarItem>
					<MenubarItem>Check for Updates</MenubarItem>
					<MenubarItem>Contact the Team</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	)
}
