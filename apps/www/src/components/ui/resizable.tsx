import * as BaseResizable from "react-resizable-panels";

import { cn } from "@/lib/utils";

function ResizablePanelGroup({
	className,
	style,
	...props
}: BaseResizable.GroupProps) {
	return (
		<BaseResizable.Group
			data-slot="resizable-panel-group"
			className={cn("h-full w-full", className)}
			style={{ height: undefined, width: undefined, ...style }}
			{...props}
		/>
	);
}

function ResizablePanel(props: BaseResizable.PanelProps) {
	return <BaseResizable.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
	withHandle,
	className,
	...props
}: BaseResizable.SeparatorProps & {
	withHandle?: boolean;
}) {
	return (
		<BaseResizable.Separator
			data-slot="resizable-handle"
			className={cn(
				"group/resizable-handle bg-border focus-visible:bg-ring focus-visible:ring-ring/50 data-[separator=active]:bg-ring data-[separator=active]:ring-ring data-[separator=hover]:bg-ring relative flex w-px items-center justify-center transition-[background-color,box-shadow] duration-150 outline-none focus-visible:ring-3 aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full data-[separator=active]:ring-1",
				className,
			)}
			{...props}
		>
			{withHandle && (
				<div
					data-slot="resizable-handle-grip"
					className="bg-border group-focus-visible/resizable-handle:bg-ring group-data-[separator=active]/resizable-handle:bg-ring group-data-[separator=hover]/resizable-handle:bg-ring z-10 h-6 w-1 shrink-0 rounded-full transition-colors duration-150 group-aria-[orientation=horizontal]/resizable-handle:h-1 group-aria-[orientation=horizontal]/resizable-handle:w-6 any-pointer-coarse:h-8 any-pointer-coarse:w-1.5 any-pointer-coarse:group-aria-[orientation=horizontal]/resizable-handle:h-1.5 any-pointer-coarse:group-aria-[orientation=horizontal]/resizable-handle:w-8"
				/>
			)}
		</BaseResizable.Separator>
	);
}

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
