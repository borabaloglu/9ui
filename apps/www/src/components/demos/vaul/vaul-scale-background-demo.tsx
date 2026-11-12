"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Vaul,
	VaulClose,
	VaulContent,
	VaulDescription,
	VaulFooter,
	VaulHeader,
	VaulTitle,
	VaulTrigger,
} from "@/components/ui/vaul";

export default function VaulScaleBackgroundDemo() {
	const [container, setContainer] = useState<HTMLDivElement | null>(null);

	return (
		<div
			ref={setContainer}
			className="after:border-border relative h-104 w-full max-w-xs overflow-clip rounded-2xl bg-black contain-layout after:pointer-events-none after:absolute after:inset-0 after:z-51 after:rounded-[inherit] after:border"
		>
			<div
				data-vaul-drawer-wrapper=""
				className="bg-background flex h-full flex-col"
			>
				<div className="border-b px-4 py-3 font-medium">Notifications</div>
				<div className="flex flex-1 flex-col items-center justify-center gap-3 p-4 text-center">
					<p className="text-muted-foreground text-sm text-pretty">
						Turn on notifications to hear about replies and mentions.
					</p>
					<Vaul
						shouldScaleBackground
						setBackgroundColorOnScale={false}
						container={container}
					>
						<VaulTrigger render={<Button variant="outline" />}>
							Turn on
						</VaulTrigger>
						<VaulContent>
							<VaulHeader>
								<VaulTitle>Turn on notifications?</VaulTitle>
								<VaulDescription>
									We only notify you about replies and mentions.
								</VaulDescription>
							</VaulHeader>
							<VaulFooter>
								<VaulClose render={<Button variant="outline" />}>
									Not now
								</VaulClose>
								<VaulClose render={<Button />}>Turn on</VaulClose>
							</VaulFooter>
						</VaulContent>
					</Vaul>
				</div>
			</div>
		</div>
	);
}
