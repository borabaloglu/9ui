import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

export default function CardWithImage() {
	return (
		<Card className="max-w-80">
			<CardHeader>
				<div className="relative aspect-video rounded-lg">
					<Image
						src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2"
						alt="Blog Image"
						fill
						className="rounded-lg"
					/>
				</div>
				<CardTitle className="mt-2">What is 9ui?</CardTitle>
				<CardDescription>
					Deep dive into the 9ui components and learn how to use them in your
					own projects.
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button className="w-full">Read more</Button>
			</CardFooter>
		</Card>
	)
}
