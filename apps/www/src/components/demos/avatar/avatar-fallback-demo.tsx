import { UserIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarFallbackDemo() {
	return (
		<div className="flex items-center gap-4">
			<Avatar>
				<AvatarFallback>BB</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarFallback>
					<UserIcon aria-label="Unknown user" />
				</AvatarFallback>
			</Avatar>
		</div>
	);
}
