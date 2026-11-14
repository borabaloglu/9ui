import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleSizesDemo() {
	return (
		<div className="flex items-center gap-2">
			<Toggle variant="outline" size="sm">
				<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
				Small
			</Toggle>
			<Toggle variant="outline">
				<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
				Default
			</Toggle>
			<Toggle variant="outline" size="lg">
				<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
				Large
			</Toggle>
		</div>
	);
}
