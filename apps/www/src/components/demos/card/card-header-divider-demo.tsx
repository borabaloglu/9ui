import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function CardHeaderDividerDemo() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader className="border-b">
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Choose what you want to hear about.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<Label className="w-full justify-between">
					Comments
					<Switch defaultChecked />
				</Label>
				<Label className="w-full justify-between">
					Mentions
					<Switch defaultChecked />
				</Label>
				<Label className="w-full justify-between">
					Product updates
					<Switch />
				</Label>
			</CardContent>
		</Card>
	);
}
