"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerIndent,
	DrawerIndentBackground,
	DrawerPopup,
	DrawerProvider,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerScaleBackgroundDemo() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	return (
		<DrawerProvider>
			<div
				ref={setContainer}
				className="after:border-border relative h-104 w-full max-w-xs overflow-clip rounded-2xl contain-layout after:pointer-events-none after:absolute after:inset-0 after:z-51 after:rounded-[inherit] after:border"
			>
				<DrawerIndentBackground />
				<DrawerIndent className="flex h-full flex-col">
					<div className="border-b px-4 py-3 font-medium">Notifications</div>
					<div className="flex flex-1 flex-col items-center justify-center gap-3 p-4 text-center">
						<p className="text-muted-foreground text-sm text-pretty">
							Turn on notifications to hear about replies and mentions.
						</p>
						<Drawer>
							<DrawerTrigger render={<Button variant="outline" />}>
								Turn on
							</DrawerTrigger>
							<DrawerPopup container={container}>
								<DrawerHeader>
									<DrawerTitle>Turn on notifications?</DrawerTitle>
									<DrawerDescription>
										We only notify you about replies and mentions.
									</DrawerDescription>
								</DrawerHeader>
								<DrawerFooter>
									<DrawerClose render={<Button variant="outline" />}>
										Not now
									</DrawerClose>
									<DrawerClose render={<Button />}>Turn on</DrawerClose>
								</DrawerFooter>
							</DrawerPopup>
						</Drawer>
					</div>
				</DrawerIndent>
			</div>
		</DrawerProvider>
	);
}
