import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarGroup() {
	return (
		<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-[3px]">
			<Avatar>
				<AvatarImage src="/avatars/memoji-1.png" alt="person-1" />
				<AvatarFallback>P1</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/avatars/memoji-2.png" alt="person-2" />
				<AvatarFallback>P2</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/avatars/memoji-3.png" alt="person-3" />
				<AvatarFallback>P3</AvatarFallback>
			</Avatar>
		</div>
	)
}
