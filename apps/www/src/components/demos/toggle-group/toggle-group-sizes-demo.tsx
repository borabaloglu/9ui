import { ArchiveIcon, InboxIcon, SendIcon } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const sizes = ["sm", "default", "lg"] as const;

export default function ToggleGroupSizesDemo() {
	return (
		<div className="flex flex-col items-center gap-4">
			{sizes.map((size) => (
				<ToggleGroup
					key={size}
					size={size}
					variant="outline"
					defaultValue={["inbox"]}
					aria-label="Mailbox"
				>
					<ToggleGroupItem value="inbox">
						<InboxIcon />
						Inbox
					</ToggleGroupItem>
					<ToggleGroupItem value="archived">
						<ArchiveIcon />
						Archived
					</ToggleGroupItem>
					<ToggleGroupItem value="sent">
						<SendIcon />
						Sent
					</ToggleGroupItem>
				</ToggleGroup>
			))}
		</div>
	);
}
