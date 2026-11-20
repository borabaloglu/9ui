"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function CreateAccountCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>Start building with 9ui in minutes.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<Field name="email">
					<FieldLabel>Email</FieldLabel>
					<Input type="email" placeholder="bora@9ui.dev" />
				</Field>
				<Field name="password">
					<FieldLabel>Password</FieldLabel>
					<Input type="password" placeholder="At least 8 characters" />
				</Field>
				<Button>Create account</Button>
				<div className="flex items-center gap-2">
					<Separator className="w-auto flex-1" />
					<span className="text-muted-foreground text-xs">OR</span>
					<Separator className="w-auto flex-1" />
				</div>
				<div className="grid grid-cols-2 gap-2">
					<Button variant="outline">
						<Icons.google />
						Google
					</Button>
					<Button variant="outline">
						<Icons.gitHub />
						GitHub
					</Button>
				</div>
			</CardContent>
			<CardFooter className="text-muted-foreground justify-center">
				Already have an account?
				<Button variant="link" size="sm">
					Sign in
				</Button>
			</CardFooter>
		</Card>
	);
}
