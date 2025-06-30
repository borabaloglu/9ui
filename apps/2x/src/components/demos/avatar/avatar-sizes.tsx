import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarSizes() {
	return (
		<div className="flex flex-row items-center gap-4">
			<Avatar size="sm">
				<AvatarImage src="/avatars/bora.png" alt="User" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar size="md">
				<AvatarImage src="/avatars/bora.png" alt="User" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="/avatars/bora.png" alt="User" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
		</div>
	)
}
