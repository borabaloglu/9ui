import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarSizesDemo() {
	return (
		<div className="flex items-center gap-4">
			<Avatar size="sm">
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
		</div>
	);
}
