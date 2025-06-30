"use client"

import { PhoneIcon, SendIcon, VideoIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ChatCard() {
	return (
		<Card className="flex size-full flex-col">
			<CardHeader className="flex flex-row items-center justify-between">
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src="/avatars/avatar-m1.png" />
						<AvatarFallback>BM</AvatarFallback>
					</Avatar>
					<div className="text-sm">
						<h3 className="font-semibold">Bryan M.</h3>
						<p className="text-muted-foreground">Online</p>
					</div>
				</div>
				<div className="flex gap-2">
					<Button variant="ghost" size="icon-lg">
						<VideoIcon className="size-6" />
					</Button>
					<Button variant="ghost" size="icon-lg">
						<PhoneIcon />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="flex-1 border-t py-4 text-sm">
				<div className="space-y-4">
					<div className="bg-muted w-fit rounded-2xl rounded-bl-none px-4 py-2">
						<p>Hey! How are you?</p>
					</div>
					<div className="flex flex-row-reverse gap-3">
						<div className="bg-primary text-primary-foreground w-fit rounded-2xl rounded-br-none px-4 py-2">
							<p>Hi! I&apos;m doing great, thanks for asking!</p>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="gap-2 border-t">
				<Input
					inputContainerClassName="flex-1"
					placeholder="Type a message..."
				/>
				<Button size="icon" type="button">
					<SendIcon />
				</Button>
			</CardFooter>
		</Card>
	)
}
