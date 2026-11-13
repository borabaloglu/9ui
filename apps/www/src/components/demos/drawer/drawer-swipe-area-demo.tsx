"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPopup,
	DrawerSwipeArea,
	DrawerTitle,
} from "@/components/ui/drawer";

export default function DrawerSwipeAreaDemo() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	return (
		<div
			ref={setContainer}
			className="bg-background relative h-80 w-full max-w-md overflow-clip rounded-2xl border contain-layout"
		>
			<Drawer swipeDirection="right" modal={false}>
				<DrawerSwipeArea className="border-primary/40 bg-primary/5 z-1 border-l border-dashed" />
				<div className="flex h-full items-center justify-center p-4 pr-12 text-center">
					<p className="text-muted-foreground text-sm text-pretty">
						Swipe in from the right edge to open the drawer.
					</p>
				</div>
				<DrawerPopup container={container} className="max-w-64">
					<DrawerHeader>
						<DrawerTitle>Library</DrawerTitle>
						<DrawerDescription>
							Swipe from the edge whenever you want to get back to your
							playlists.
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose render={<Button variant="outline" />}>
							Close
						</DrawerClose>
					</DrawerFooter>
				</DrawerPopup>
			</Drawer>
		</div>
	);
}
