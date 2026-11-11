import { CheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function CardSizeDemo() {
	return (
		<Card size="sm" className="w-full max-w-xs">
			<CardHeader>
				<CardTitle>Pro Plan</CardTitle>
				<CardDescription>$19/month</CardDescription>
				<CardAction>
					<Badge variant="success" size="sm">
						Popular
					</Badge>
				</CardAction>
			</CardHeader>
			<CardContent>
				<ul className="flex flex-col gap-1">
					<li className="flex items-center gap-1.5">
						<CheckIcon className="text-muted-foreground size-3.5" />
						Unlimited projects
					</li>
					<li className="flex items-center gap-1.5">
						<CheckIcon className="text-muted-foreground size-3.5" />
						Priority support
					</li>
					<li className="flex items-center gap-1.5">
						<CheckIcon className="text-muted-foreground size-3.5" />
						Advanced analytics
					</li>
				</ul>
			</CardContent>
			<CardFooter className="justify-end">
				<Button size="sm">Subscribe</Button>
			</CardFooter>
		</Card>
	);
}
