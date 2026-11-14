import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/components/ui/avatar";

export default function AvatarGroupDemo() {
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
		</AvatarGroup>
	);
}
