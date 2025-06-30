import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src="/avatars/bora.png" alt="User" />
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	)
}
