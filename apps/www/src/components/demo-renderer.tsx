"use client";

import * as React from "react";
import { LoaderCircleIcon, RefreshCwIcon } from "lucide-react";

import { disableAutofillWithin } from "@/components/disable-autofill";
import { Button } from "@/components/ui/button";

// Load whole modules instead of using `{ import: "default" }`: in production
// builds Turbopack resolves that option to `undefined`, breaking every demo.
const demos = import.meta.glob<{ default: React.ComponentType }>(
	"/src/components/demos/**/*.tsx",
);

const cache = new Map<string, React.LazyExoticComponent<React.ComponentType>>();

function getDemoComponent(path: string) {
	const load = demos[`/src/components/demos/${path}.tsx`];

	if (!load) {
		return null;
	}

	let component = cache.get(path);

	if (!component) {
		component = React.lazy(load);
		cache.set(path, component);
	}

	return component;
}

function DemoHydrated({ onHydrated }: { onHydrated: () => void }) {
	React.useEffect(() => {
		onHydrated();
	}, [onHydrated]);

	return null;
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
	const scopeRef = React.useRef<HTMLDivElement>(null);

	const handleHydrated = React.useCallback(() => {
		const scope = scopeRef.current;
		if (!scope) return;
		scope.setAttribute("data-hydrated", "");
		disableAutofillWithin(scope);
	}, []);

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
			<div ref={scopeRef} className="contents" data-autofill-scope="">
				<React.Suspense
					fallback={
						<div className="flex animate-spin items-center justify-center">
							<LoaderCircleIcon size={16} />
						</div>
					}
				>
					<Component key={key} />
					<DemoHydrated onHydrated={handleHydrated} />
				</React.Suspense>
			</div>
		</>
	);
};
