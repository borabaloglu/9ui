import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function CardWithImageDemo() {
	return (
		<Card className="w-full max-w-sm">
			<Image
				src="/cover.png"
				alt=""
				width={1600}
				height={1200}
				className="aspect-video w-full object-cover"
			/>
			<CardHeader>
				<CardTitle>What is 9ui?</CardTitle>
				<CardDescription>
					Deep dive into the 9ui components and learn how to use them in your
					own projects.
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button className="w-full">Read more</Button>
			</CardFooter>
		</Card>
	);
}
