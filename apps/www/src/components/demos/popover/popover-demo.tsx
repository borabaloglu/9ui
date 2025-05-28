import { CopyIcon, Share2Icon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
	const copyToClipboard = () => {
		toast.success("Copied to clipboard")
		navigator.clipboard.writeText(window.location.href)
	}

	return (
		<Popover>
			<PopoverTrigger
				render={(props) => (
					<Button {...props} variant="outline" size="icon">
						<Share2Icon />
					</Button>
				)}
			/>
			<PopoverContent className="w-[calc(100vw-4rem)] sm:w-[500px]">
				<PopoverHeader>
					<PopoverTitle>Share</PopoverTitle>
					<PopoverDescription>Share this component.</PopoverDescription>
				</PopoverHeader>
				<div className="mt-2 flex w-full gap-2">
					<Input
						inputWrapperClassName="w-full"
						value={window.location.href}
						autoFocus={false}
						readOnly
					/>
					<Button className="shrink-0" size="icon" onClick={copyToClipboard}>
						<CopyIcon />
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	)
}
