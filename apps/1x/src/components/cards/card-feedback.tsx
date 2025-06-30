"use client"

import { useState } from "react"
import { StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

import { cn } from "@/lib/utils"

export function FeedbackCard() {
	const [rating, setRating] = useState<number | undefined>(undefined)

	const handleChangeRating = (newRating: number) => {
		if (newRating === rating) {
			setRating(undefined)
		} else {
			setRating(newRating)
		}
	}

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Feedback</CardTitle>
				<CardDescription>
					Please rate your experience at the restaurant
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex gap-2">
					{[1, 2, 3, 4, 5].map((star) => (
						<StarIcon
							key={star}
							className={cn(
								"size-8 cursor-pointer transition-all",
								rating && star <= rating
									? "fill-amber-300 text-amber-300"
									: "fill-none text-muted-foreground"
							)}
							onClick={() => handleChangeRating(star)}
						/>
					))}
				</div>
				<Textarea
					className="resize-vertical"
					placeholder="Write your feedback..."
				/>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Submit Feedback</Button>
			</CardFooter>
		</Card>
	)
}
