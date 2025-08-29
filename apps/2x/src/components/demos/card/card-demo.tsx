import { LinkIcon, SendIcon } from "lucide-react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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

export default function CardDemo() {
	return (
		<Card className="w-full max-w-96">
			<CardHeader>
				<CardTitle>Invite Team Members</CardTitle>
				<CardDescription>
					Invite your team members to join your workspace.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex gap-2">
					<Input inputContainerClassName="w-full" placeholder="Email" />
					<Button className="shrink-0" size="icon">
						<SendIcon />
					</Button>
				</div>
				<div className="flex flex-col gap-2">
					<p className="text-muted-foreground text-sm">
						You can invite up to 10 team members. You have 8 invites left.
					</p>
				</div>
				<div className="flex flex-col gap-4">
					<h4 className="text-sm font-medium">Invited Members</h4>
					<div className="flex items-center gap-2">
						<Avatar size="sm">
							<AvatarImage src="/avatars/memoji-1.png" alt="Avatar" />
							<AvatarFallback>KS</AvatarFallback>
						</Avatar>
						<div className="flex flex-col text-xs">
							<p className="font-medium">Karen Smith</p>
							<p className="text-muted-foreground">karen@9ui.dev</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Avatar size="sm">
							<AvatarImage src="/avatars/memoji-3.png" alt="Avatar" />
							<AvatarFallback>CW</AvatarFallback>
						</Avatar>
						<div className="flex flex-col text-xs">
							<p className="font-medium">Chris Williams</p>
							<p className="text-muted-foreground">chris@9ui.dev</p>
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
