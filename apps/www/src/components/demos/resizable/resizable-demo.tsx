import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableDemo() {
	return (
		<ResizablePanelGroup className="h-60 max-w-md rounded-lg border">
			<ResizablePanel defaultSize="50%">
				<div className="flex h-full items-center justify-center p-6">
					<span className="text-sm font-medium">One</span>
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize="50%">
				<ResizablePanelGroup orientation="vertical">
					<ResizablePanel defaultSize="25%">
						<div className="flex h-full items-center justify-center p-6">
							<span className="text-sm font-medium">Two</span>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize="75%">
						<div className="flex h-full items-center justify-center p-6">
							<span className="text-sm font-medium">Three</span>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
