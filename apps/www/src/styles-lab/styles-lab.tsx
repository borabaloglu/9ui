"use client";

import { useEffect, useMemo, useState } from "react";
import {
	ArrowRightIcon,
	BellIcon,
	RotateCcwIcon,
	Trash2Icon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./components/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/card";
import {
	Dialog,
	DialogClose,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogPopup,
	DialogTitle,
	DialogTrigger,
} from "./components/dialog";
import { Input, Label } from "./components/input";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "./components/select";
import {
	generateStyleCss,
	getDefaults,
	type StyleValues,
	styles,
} from "./config";

const plans = [
	{ label: "Hobby", value: "hobby" },
	{ label: "Pro", value: "pro" },
	{ label: "Team", value: "team" },
];

const Preview = () => (
	<div className="grid items-start gap-8 lg:grid-cols-2">
		<Card>
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy a new project in one click.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<Label htmlFor="lab-name">Name</Label>
					<Input id="lab-name" placeholder="Acme dashboard" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="lab-email">Owner email</Label>
					<Input id="lab-email" type="email" defaultValue="ada@acme.dev" />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor="lab-plan">Plan</Label>
					<Select items={plans} defaultValue="pro">
						<SelectTrigger id="lab-plan" className="w-full">
							<SelectValue />
						</SelectTrigger>
						<SelectPopup>
							{plans.map((plan) => (
								<SelectItem key={plan.value} value={plan.value}>
									{plan.label}
								</SelectItem>
							))}
						</SelectPopup>
					</Select>
				</div>
			</CardContent>
			<CardFooter className="justify-end">
				<Button variant="outline">Cancel</Button>
				<Button>
					Deploy
					<ArrowRightIcon />
				</Button>
			</CardFooter>
		</Card>

		<div className="flex flex-col gap-8">
			<Card>
				<CardHeader>
					<CardTitle>Buttons</CardTitle>
					<CardDescription>Every variant and size, one skin.</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<div className="flex flex-wrap items-center gap-3">
						<Button>Default</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Delete</Button>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<Button size="sm">Small</Button>
						<Button>Medium</Button>
						<Button size="lg">Large</Button>
						<Button size="icon" variant="secondary" aria-label="Notifications">
							<BellIcon />
						</Button>
						<Button disabled>Disabled</Button>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Danger zone</CardTitle>
					<CardDescription>
						Deleting a project removes its deployments and logs.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Dialog>
						<DialogTrigger
							render={
								<Button variant="destructive">
									<Trash2Icon />
									Delete project
								</Button>
							}
						/>
						<DialogPopup>
							<DialogHeader>
								<DialogTitle>Delete project?</DialogTitle>
								<DialogDescription>
									This permanently removes Acme dashboard, its deployments and
									its logs. You can&apos;t undo this.
								</DialogDescription>
							</DialogHeader>
							<div className="flex flex-col gap-2">
								<Label htmlFor="lab-confirm">Type the project name</Label>
								<Input id="lab-confirm" placeholder="Acme dashboard" />
							</div>
							<DialogFooter>
								<DialogClose render={<Button variant="outline">Keep</Button>} />
								<DialogClose
									render={<Button variant="destructive">Delete</Button>}
								/>
							</DialogFooter>
						</DialogPopup>
					</Dialog>
				</CardContent>
			</Card>
		</div>
	</div>
);

export const StylesLab = () => {
	const [styleId, setStyleId] = useState(styles[1].id);
	const [values, setValues] = useState<Record<string, StyleValues>>(() =>
		Object.fromEntries(styles.map((style) => [style.id, getDefaults(style)])),
	);

	const style = styles.find((item) => item.id === styleId) ?? styles[0];
	const css = useMemo(
		() => generateStyleCss(style, values[style.id]),
		[style, values],
	);

	// The style is set on <html> so portalled popups (select, dialog) get it too.
	useEffect(() => {
		document.documentElement.dataset.style = styleId;
		return () => {
			delete document.documentElement.dataset.style;
		};
	}, [styleId]);

	const setValue = (name: string, value: number) => {
		setValues((current) => ({
			...current,
			[style.id]: { ...current[style.id], [name]: value },
		}));
	};

	return (
		<div className="container py-6 md:py-10">
			{css && <style>{css}</style>}
			<div className="flex flex-col gap-8 xl:flex-row xl:items-start">
				<div className="min-w-0 flex-1">
					<div className="mb-8 flex flex-col gap-1">
						<h1 className="text-2xl font-bold">Styles lab</h1>
						<p className="text-muted-foreground text-sm">
							The same five components. Only the style changes.
						</p>
					</div>
					<Preview />
				</div>

				<aside className="bg-card text-card-foreground flex w-full shrink-0 flex-col gap-5 rounded-xl border p-4 text-sm xl:sticky xl:top-6 xl:w-80">
					<div className="flex flex-col gap-2">
						<span className="font-medium">Style</span>
						<div className="grid grid-cols-2 gap-1.5">
							{styles.map((item) => (
								<button
									key={item.id}
									type="button"
									aria-pressed={item.id === styleId}
									onClick={() => setStyleId(item.id)}
									className={cn(
										"border-border hover:bg-foreground/5 cursor-pointer rounded-md border px-2.5 py-1.5 text-left text-xs font-medium transition-colors",
										item.id === styleId &&
											"border-foreground bg-foreground text-background hover:bg-foreground",
									)}
								>
									{item.name}
								</button>
							))}
						</div>
						<p className="text-muted-foreground text-xs">{style.description}</p>
					</div>

					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-between">
							<span className="font-medium">Tokens</span>
							<button
								type="button"
								onClick={() =>
									setValues((current) => ({
										...current,
										[style.id]: getDefaults(style),
									}))
								}
								className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1 text-xs"
							>
								<RotateCcwIcon className="size-3" />
								Reset
							</button>
						</div>
						{style.tokens.map((token) => (
							<label key={token.name} className="flex flex-col gap-1">
								<span className="flex items-center justify-between text-xs">
									<span>{token.label}</span>
									<span className="text-muted-foreground font-mono tabular-nums">
										{values[style.id][token.name]}
										{token.unit}
									</span>
								</span>
								<input
									type="range"
									min={token.min}
									max={token.max}
									step={token.step}
									value={values[style.id][token.name]}
									onChange={(event) =>
										setValue(token.name, Number(event.target.value))
									}
									className="accent-foreground w-full"
								/>
							</label>
						))}
					</div>

					<div className="flex flex-col gap-2">
						<span className="font-medium">Your overrides</span>
						<pre className="bg-background text-muted-foreground overflow-x-auto rounded-md border p-2.5 font-mono text-[0.6875rem] leading-relaxed">
							{css || "/* Nothing changed yet. */"}
						</pre>
					</div>
				</aside>
			</div>
		</div>
	);
};
