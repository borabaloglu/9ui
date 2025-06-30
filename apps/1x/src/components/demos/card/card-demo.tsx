import Image from "next/image"
import { LinkIcon, SendIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/sonner"

export default function CardDemo() {
	return (
		<Card className="max-w-96">
			<CardHeader>
				<CardTitle>Invite Team Members</CardTitle>
				<CardDescription>
					Invite your team members to join your workspace.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex gap-2">
					<Input inputWrapperClassName="w-full" placeholder="Email" />
					<Button className="shrink-0" size="icon">
						<SendIcon />
					</Button>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-sm text-muted-foreground">
						You can invite up to 10 team members. You have 8 invites left.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<h4 className="text-sm font-medium">Invited Members</h4>
					<div className="flex items-center gap-2">
						<Image
							src="/memoji-1.png"
							alt="Avatar"
							width={24}
							height={24}
							className="size-8 rounded-full"
						/>
						<div className="flex flex-col text-xs">
							<p className="font-medium">Karen Smith</p>
							<p className="text-muted-foreground">karen@9.ui</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Image
							src="/memoji-3.png"
							alt="Avatar"
							width={24}
							height={24}
							className="size-8 rounded-full"
						/>
						<div className="flex flex-col text-xs">
							<p className="font-medium">Chris Williams</p>
							<p className="text-muted-foreground">chris@9.ui</p>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					className="w-full gap-x-2"
					variant="link"
					onClick={() => {
						toast.success("Invite link copied to clipboard")
					}}
				>
					<LinkIcon size={16} />
					Invite with link
				</Button>
			</CardFooter>
		</Card>
	)
}
