import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function CardActionDemo() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Billing address</CardTitle>
				<CardDescription>Shown on your invoices.</CardDescription>
				<CardAction>
					<Button variant="outline" size="sm">
						Edit
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<address className="not-italic">
					Acme Inc.
					<br />
					221B Baker Street
					<br />
					London NW1 6XE
				</address>
			</CardContent>
		</Card>
	);
}
