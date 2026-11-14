import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src="/avatars/bora.png" alt="Bora Baloglu" />
			<AvatarFallback>BB</AvatarFallback>
		</Avatar>
	);
}
