import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleSizesDemo() {
	return (
		<div className="flex flex-col items-center gap-4">
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
			<div className="flex items-center gap-2">
				<Toggle variant="outline" size="sm" aria-label="Bookmark, small">
					<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
				</Toggle>
				<Toggle variant="outline" aria-label="Bookmark, default">
					<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
				</Toggle>
				<Toggle variant="outline" size="lg" aria-label="Bookmark, large">
					<BookmarkIcon className="group-data-pressed/toggle:fill-current" />
				</Toggle>
			</div>
		</div>
	);
}
