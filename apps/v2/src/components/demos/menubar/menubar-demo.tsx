import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarItemShortcut,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarSubMenu,
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
						<MenubarItemShortcut>⌘N</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						New Window
						<MenubarItemShortcut>⇧⌘N</MenubarItemShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Open
						<MenubarItemShortcut>⌘O</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Open Folder
						<MenubarItemShortcut>⇧⌘O</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>Open Recent</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Save
						<MenubarItemShortcut>⌘S</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Save As
						<MenubarItemShortcut>⇧⌘S</MenubarItemShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Close Window
						<MenubarItemShortcut>⌘W</MenubarItemShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo
						<MenubarItemShortcut>⌘Z</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo
						<MenubarItemShortcut>⌘Y</MenubarItemShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Cut
						<MenubarItemShortcut>⌘X</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Copy
						<MenubarItemShortcut>⌘C</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Paste
						<MenubarItemShortcut>⌘V</MenubarItemShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Find
						<MenubarItemShortcut>⌘F</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Replace
						<MenubarItemShortcut>⌥⌘F</MenubarItemShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarSubMenu>
						<MenubarSubTrigger>Appearance</MenubarSubTrigger>
						<MenubarContent>
							<MenubarRadioGroup>
								<MenubarRadioItem value="system">System</MenubarRadioItem>
								<MenubarRadioItem value="light">Light</MenubarRadioItem>
								<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarContent>
					</MenubarSubMenu>
					<MenubarSeparator />
					<MenubarItem>
						Show/Hide Sidebar
						<MenubarItemShortcut>⌃⌥⌘*</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Command Palette
						<MenubarItemShortcut>⇧⌘P</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>Expand Tabs</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Zoom In
						<MenubarItemShortcut>⌘+</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Zoom Out
						<MenubarItemShortcut>⌘-</MenubarItemShortcut>
					</MenubarItem>
					<MenubarItem>
						Reset Zoom
						<MenubarItemShortcut>⌘0</MenubarItemShortcut>
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
