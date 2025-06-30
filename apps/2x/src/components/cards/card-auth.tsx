"use client"

import { Icons } from "@/components/icons"
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

export function AuthCard() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Join 9ui</CardTitle>
				<CardDescription>
					Start building your design system with our components.
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex flex-col gap-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="bora@9ui.dev" />
				</div>

				<Button className="w-full">Get Started</Button>

				<div className="flex items-center gap-x-2">
					<span className="bg-border h-px w-full" />
					<span className="text-muted-foreground text-xs">OR</span>
					<span className="bg-border h-px w-full" />
				</div>

				<Button variant="outline" className="w-full">
					<Icons.google />
					Continue with Google
				</Button>
				<Button variant="outline" className="w-full">
					<Icons.gitHub />
					Continue with GitHub
				</Button>
			</CardContent>
			<CardFooter className="text-muted-foreground inline-block text-center text-sm">
				By continuing, you agree to our{" "}
				<span className="text-foreground cursor-pointer hover:underline">
					Terms of Service
				</span>{" "}
				and{" "}
				<span className="text-foreground cursor-pointer hover:underline">
					Privacy Policy
				</span>
				.
			</CardFooter>
		</Card>
	)
}
