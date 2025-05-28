import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarWithFallback() {
	return (
		<Avatar size="md">
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	)
}
