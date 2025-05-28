"use client"

import { useState } from "react"
import { StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from "@/components/ui/textarea"

import { cn } from "@/lib/utils"

export default function DrawerDemo() {
	const [rating, setRating] = useState<number | undefined>(undefined)

	const handleChangeRating = (newRating: number) => {
		if (newRating === rating) {
			setRating(undefined)
		} else {
			setRating(newRating)
		}
	}

	return (
		<Drawer shouldScaleBackground>
			<DrawerTrigger
				render={(props) => <Button {...props}>Open Drawer</Button>}
			/>
			<DrawerContent>
				<div className="mx-auto w-full max-w-md">
					<DrawerHeader>
						<DrawerTitle>Provide Your Feedback</DrawerTitle>
						<DrawerDescription>
							We value your feedback. Please rate your experience and leave a
							review.
						</DrawerDescription>
					</DrawerHeader>

					<div className="flex flex-col gap-4 px-4">
						<div className="flex gap-2">
							{[1, 2, 3, 4, 5].map((star) => (
								<StarIcon
									key={star}
									className={cn(
										"size-8 cursor-pointer transition-all",
										rating && star <= rating
											? "fill-yellow-300 text-yellow-300"
											: "fill-none text-muted-foreground"
									)}
									onClick={() => handleChangeRating(star)}
								/>
							))}
						</div>
						<Textarea placeholder="Write a review" />
					</div>

					<DrawerFooter>
						<Button className="w-full">Submit</Button>
						<DrawerClose
							render={(props) => (
								<Button {...props} variant="outline" className="w-full">
									Cancel
								</Button>
							)}
						/>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
