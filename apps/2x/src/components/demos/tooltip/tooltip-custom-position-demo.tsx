import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

const positions = ["top", "right", "bottom", "left"] as const

export default function TooltipCustomPositionDemo() {
	return (
		<div className="grid grid-cols-2 gap-2">
			<TooltipProvider>
				{positions.map((position) => (
					<Tooltip key={position}>
						<TooltipTrigger className="w-full rounded-md border px-2 py-1.5 text-sm">
							{position}
						</TooltipTrigger>
						<TooltipContent className="max-w-56" side={position}>
							<span>This tooltip is positioned at the {position} side.</span>
						</TooltipContent>
					</Tooltip>
				))}
			</TooltipProvider>
		</div>
	)
}
