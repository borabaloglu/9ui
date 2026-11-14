import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupOverflow,
	AvatarImage,
} from "@/components/ui/avatar";

export default function AvatarGroupOverflowDemo() {
	return (
		<AvatarGroup>
			<Avatar>
				<AvatarImage src="/avatars/p1.jpg" alt="Maya Chen" />
				<AvatarFallback>MC</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/avatars/p2.jpg" alt="Emma Wright" />
				<AvatarFallback>EW</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/avatars/p3.jpg" alt="Daniel Okafor" />
				<AvatarFallback>DO</AvatarFallback>
			</Avatar>
			<AvatarGroupOverflow>+3</AvatarGroupOverflow>
		</AvatarGroup>
	);
}
