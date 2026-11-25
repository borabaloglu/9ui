import { ColumnsIcon, GridIcon, ListIcon } from "lucide-react";

import {
	SegmentedControl,
	SegmentedControlItem,
} from "@/components/ui/segmented-control";

export default function SegmentedControlIconsDemo() {
	return (
		<div className="flex flex-col items-center gap-4">
			<SegmentedControl defaultValue="list" aria-label="Layout">
				<SegmentedControlItem value="list">
					<ListIcon />
					List
				</SegmentedControlItem>
				<SegmentedControlItem value="grid">
					<GridIcon />
					Grid
				</SegmentedControlItem>
				<SegmentedControlItem value="board">
					<ColumnsIcon />
					Board
				</SegmentedControlItem>
			</SegmentedControl>
			<SegmentedControl defaultValue="list" aria-label="Layout">
				<SegmentedControlItem value="list" aria-label="List">
					<ListIcon />
				</SegmentedControlItem>
				<SegmentedControlItem value="grid" aria-label="Grid">
					<GridIcon />
				</SegmentedControlItem>
				<SegmentedControlItem value="board" aria-label="Board">
					<ColumnsIcon />
				</SegmentedControlItem>
			</SegmentedControl>
		</div>
	);
}
