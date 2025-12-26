import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TabsDisabledDemo() {
	return (
		<Tabs className="w-full max-w-96" defaultValue="login">
			<TabsList>
				<TabsTrigger value="login">Login</TabsTrigger>
				<Tooltip>
					<TooltipTrigger
						className="w-full"
						render={(props) => (
							<div {...props}>
								<TabsTrigger value="signup" disabled>
									Sign up
								</TabsTrigger>
							</div>
						)}
					/>
					<TooltipContent className="w-64">
						<span>
							Sign ups are temporarily disabled. Please check back later.
						</span>
					</TooltipContent>
				</Tooltip>
			</TabsList>
			<TabsContent value="login">
				<Card>
					<CardHeader>
						<CardTitle>Login</CardTitle>
						<CardDescription>Login to your account to continue</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex flex-col gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="Email" type="email" />
						</div>
						<div className="flex flex-col gap-2">
							<Label htmlFor="password">Password</Label>
							<Input id="password" placeholder="Password" type="password" />
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Login</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	)
}
