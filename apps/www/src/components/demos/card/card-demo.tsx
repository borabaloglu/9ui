import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardDemo() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one click.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label htmlFor="project-name">Name</Label>
					<Input id="project-name" placeholder="My awesome project" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="project-url">URL</Label>
					<Input id="project-url" placeholder="https://example.com" />
				</div>
			</CardContent>
			<CardFooter className="justify-between">
				<Button variant="ghost">Cancel</Button>
				<Button>Deploy</Button>
			</CardFooter>
		</Card>
	);
}
