"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

export default function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger
				render={(props) => <Button {...props}>Open Sheet</Button>}
			/>
			<SheetContent>
				<SheetClose />
				<SheetHeader>
					<SheetTitle>Submit Feedback</SheetTitle>
					<SheetDescription>
						Please share your feedback with us to help improve our service.
					</SheetDescription>
				</SheetHeader>
				<div className="my-4 space-y-2">
					<Label htmlFor="feedback">Your Feedback</Label>
					<Textarea id="feedback" placeholder="Type your feedback here." />
				</div>
				<SheetFooter>
					<SheetClose
						render={(props) => (
							<Button {...props} size="sm" variant="ghost">
								Close
							</Button>
						)}
					/>
					<Button size="sm">Submit</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
