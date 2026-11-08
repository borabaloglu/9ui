"use client";

import * as React from "react";
import { LoaderCircleIcon, RefreshCwIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const demos = import.meta.glob<React.ComponentType>(
	"/src/components/demos/**/*.tsx",
	{ import: "default" },
);

const cache = new Map<string, React.LazyExoticComponent<React.ComponentType>>();

function getDemoComponent(path: string) {
	const load = demos[`/src/components/demos/${path}.tsx`];

	if (!load) {
		return null;
	}

	let component = cache.get(path);

	if (!component) {
		component = React.lazy(async () => ({ default: await load() }));
		cache.set(path, component);
	}

	return component;
}

interface DemoRendererProps {
	path: string;
	showReload?: boolean;
}

export const DemoRenderer = ({
	path,
	showReload = false,
}: DemoRendererProps) => {
	const Component = getDemoComponent(path);
	const [key, setKey] = React.useState(0);

	if (!Component) {
		return <p className="text-muted-foreground text-sm">Demo not found.</p>;
	}

	return (
		<>
			{showReload && (
				<Button
					variant="ghost"
					size="icon-sm"
					className="absolute top-2 right-2 size-6"
					onClick={() => setKey((prev) => prev + 1)}
				>
					<RefreshCwIcon size={16} />
				</Button>
			)}
			<React.Suspense
				fallback={
					<div className="flex animate-spin items-center justify-center">
						<LoaderCircleIcon size={16} />
					</div>
				}
			>
				<Component key={key} />
			</React.Suspense>
		</>
	);
};
