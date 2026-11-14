import {
	Menubar,
	MenubarItem,
	MenubarMenu,
	MenubarPopup,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";

export default function MenubarDisabledDemo() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarPopup>
					<MenubarItem>New File</MenubarItem>
					<MenubarItem>Open</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Save</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger disabled>Edit</MenubarTrigger>
				<MenubarPopup>
					<MenubarItem>Undo</MenubarItem>
					<MenubarItem>Redo</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarPopup>
					<MenubarItem>Zoom In</MenubarItem>
					<MenubarItem>Zoom Out</MenubarItem>
					<MenubarItem>Reset Zoom</MenubarItem>
				</MenubarPopup>
			</MenubarMenu>
		</Menubar>
	);
}
