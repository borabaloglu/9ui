import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableVerticalDemo() {
	return (
		<ResizablePanelGroup
			orientation="vertical"
			className="h-60 max-w-md rounded-lg border"
		>
			<ResizablePanel defaultSize="25%">
				<div className="flex h-full items-center justify-center p-6">
					<span className="text-sm font-medium">Header</span>
				</div>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize="75%">
				<div className="flex h-full items-center justify-center p-6">
					<span className="text-sm font-medium">Content</span>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
