import {
	Menubar,
	MenubarCheckboxItem,
	MenubarItem,
	MenubarMenu,
	MenubarPopup,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubPopup,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarPopup className="min-w-48">
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
					<MenubarItem disabled>Open Recent</MenubarItem>
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
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarPopup className="min-w-40">
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
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarPopup className="min-w-56">
					<MenubarSub>
						<MenubarSubTrigger>Appearance</MenubarSubTrigger>
						<MenubarSubPopup>
							<MenubarRadioGroup defaultValue="system">
								<MenubarRadioItem value="system">System</MenubarRadioItem>
								<MenubarRadioItem value="light">Light</MenubarRadioItem>
								<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarSubPopup>
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
					<MenubarSeparator />
					<MenubarCheckboxItem defaultChecked>Show Toolbar</MenubarCheckboxItem>
					<MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Help</MenubarTrigger>
				<MenubarPopup className="min-w-48">
					<MenubarItem>Getting Started</MenubarItem>
					<MenubarItem>Report Issue</MenubarItem>
					<MenubarItem>Check for Updates</MenubarItem>
					<MenubarItem>Contact the Team</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
		</Menubar>
	);
}
