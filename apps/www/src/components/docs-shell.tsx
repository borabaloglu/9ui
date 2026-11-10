"use client";

import * as React from "react";
import { PanelLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "docs-sidebar-collapsed";

interface DocsShellContextValue {
	collapsed: boolean;
	toggle: () => void;
}

const DocsShellContext = React.createContext<DocsShellContextValue>({
	collapsed: false,
	toggle: () => {},
});

export const DocsShell = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const [collapsed, setCollapsed] = React.useState(false);

	React.useEffect(() => {
		try {
			setCollapsed(localStorage.getItem(STORAGE_KEY) === "true");
		} catch {}
	}, []);

	const toggle = React.useCallback(() => {
		setCollapsed((current) => {
			const next = !current;

			try {
				localStorage.setItem(STORAGE_KEY, String(next));
			} catch {}

			return next;
		});
	}, []);

	const value = React.useMemo(
		() => ({ collapsed, toggle }),
		[collapsed, toggle],
	);

	return (
		<DocsShellContext.Provider value={value}>
			<div
				data-sidebar-collapsed={collapsed}
				className={cn(
					"group/docs motion-reduce:transition-none md:grid md:grid-cols-[268px_minmax(0,1fr)] md:transition-[grid-template-columns] md:duration-300 md:ease-[cubic-bezier(0.22,1,0.36,1)] md:data-[sidebar-collapsed=true]:grid-cols-[0px_minmax(0,1fr)]",
					className,
				)}
			>
				{children}
			</div>
		</DocsShellContext.Provider>
	);
};

export const DocsSidebar = ({ children }: { children: React.ReactNode }) => {
	const { collapsed } = React.useContext(DocsShellContext);

	return (
		<aside
			inert={collapsed}
			className="hidden min-h-0 overflow-clip text-sm md:flex"
		>
			<div className="flex min-h-0 w-[268px] shrink-0 flex-col transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[sidebar-collapsed=true]/docs:-translate-x-4 group-data-[sidebar-collapsed=true]/docs:opacity-0 motion-reduce:transition-none">
				{children}
			</div>
		</aside>
	);
};

export const DocsSidebarToggle = ({ className }: { className?: string }) => {
	const { collapsed, toggle } = React.useContext(DocsShellContext);

	return (
		<Button
			variant="ghost"
			size="icon-sm"
			className={cn("text-muted-foreground", className)}
			onClick={toggle}
		>
			<PanelLeftIcon className="size-4" />
			<span className="sr-only">
				{collapsed ? "Expand sidebar" : "Collapse sidebar"}
			</span>
		</Button>
	);
};
