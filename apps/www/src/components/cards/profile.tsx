"use client";

import { BadgeCheckIcon, EllipsisIcon, MapPinIcon } from "lucide-react";

import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupOverflow,
	AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";

const stats = [
	{ label: "Posts", value: "128" },
	{ label: "Followers", value: "4.2k" },
	{ label: "Following", value: "312" },
];

export function ProfileCard() {
	return (
		<Card>
			<CardContent className="flex flex-col gap-4">
				<div className="flex items-start gap-3">
					<Avatar size="lg">
						<AvatarImage src="/avatars/bora.png" alt="" />
						<AvatarFallback>BB</AvatarFallback>
					</Avatar>
					<div className="min-w-0 flex-1">
						<p className="flex items-center gap-2 font-medium">
							Bora Baloglu
							<BadgeCheckIcon
								aria-label="Verified"
								className="fill-info text-card size-4.5"
							/>
						</p>
						<p className="text-muted-foreground flex items-center gap-1">
							<MapPinIcon className="size-3.5" />
							Lisbon
						</p>
					</div>
					<Menu>
						<MenuTrigger
							render={
								<Button variant="ghost" size="icon" aria-label="More options" />
							}
						>
							<EllipsisIcon />
						</MenuTrigger>
						<MenuPopup align="end" className="w-40">
							<MenuItem>Copy profile link</MenuItem>
							<MenuItem>Mute</MenuItem>
							<MenuSeparator />
							<MenuItem variant="destructive">Block</MenuItem>
						</MenuPopup>
					</Menu>
				</div>
				<p>I don’t do tpyos</p>
				<dl className="grid grid-cols-3 gap-2">
					{stats.map((stat) => (
						<div key={stat.label}>
							<dd className="font-medium tabular-nums">{stat.value}</dd>
							<dt className="text-muted-foreground text-xs">{stat.label}</dt>
						</div>
					))}
				</dl>
				<div className="flex gap-2">
					<Button className="flex-1">Follow</Button>
					<Button variant="outline" className="flex-1">
						Message
					</Button>
				</div>
			</CardContent>
			<CardFooter className="text-muted-foreground gap-2 text-xs">
				<AvatarGroup>
					<Avatar size="sm">
						<AvatarImage src="/avatars/p1.jpg" alt="" />
						<AvatarFallback>MC</AvatarFallback>
					</Avatar>
					<Avatar size="sm">
						<AvatarImage src="/avatars/p2.jpg" alt="" />
						<AvatarFallback>EW</AvatarFallback>
					</Avatar>
					<Avatar size="sm">
						<AvatarImage src="/avatars/p3.jpg" alt="" />
						<AvatarFallback>DO</AvatarFallback>
					</Avatar>
					<AvatarGroupOverflow>+9</AvatarGroupOverflow>
				</AvatarGroup>
				Followed by Maya, Emma and 10 others
			</CardFooter>
		</Card>
	);
}
