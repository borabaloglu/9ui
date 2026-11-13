import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerFooterBareDemo() {
	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="outline" />}>
				Archive project
			</DrawerTrigger>
			<DrawerPopup>
				<DrawerHeader>
					<DrawerTitle>Archive this project?</DrawerTitle>
					<DrawerDescription>
						The project becomes read-only and leaves your dashboard. You can
						restore it at any time.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter variant="bare">
					<DrawerClose render={<Button variant="outline" />}>
						Cancel
					</DrawerClose>
					<DrawerClose render={<Button />}>Archive</DrawerClose>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}
