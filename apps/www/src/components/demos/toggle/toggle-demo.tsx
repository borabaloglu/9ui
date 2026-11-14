import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleDemo() {
	return (
		<Toggle variant="outline">
			<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
			Bookmark
		</Toggle>
	);
}
