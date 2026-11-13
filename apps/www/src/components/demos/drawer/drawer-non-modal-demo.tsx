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

export default function DrawerNonModalDemo() {
	return (
		<Drawer swipeDirection="right" modal={false} disablePointerDismissal>
			<DrawerTrigger render={<Button variant="outline" />}>
				Open filters
			</DrawerTrigger>
			<DrawerPopup>
				<DrawerHeader>
					<DrawerTitle>Filters</DrawerTitle>
					<DrawerDescription>
						The page behind stays usable while this drawer is open. Close it
						with the button or swipe it away.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerFooter>
					<DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}
