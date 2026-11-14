import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";

export default function AvatarBadgeDemo() {
	return (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
				<AvatarBadge className="bg-success">
					<span className="sr-only">Online</span>
				</AvatarBadge>
			</Avatar>
			<Avatar shape="square">
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
				<AvatarBadge className="bg-success">
					<span className="sr-only">Online</span>
				</AvatarBadge>
			</Avatar>
		</div>
	);
}
