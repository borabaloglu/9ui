import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarShapesDemo() {
	return (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar shape="square">
				<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
		</div>
	);
}
