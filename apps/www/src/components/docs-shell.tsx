"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { Sidebar, SidebarProvider, useSidebar } from "@/components/ui/sidebar";

const STORAGE_KEY = "docs-sidebar-collapsed";

export const DocsShell = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = React.useState(true);

	React.useEffect(() => {
		try {
			setOpen(localStorage.getItem(STORAGE_KEY) !== "true");
		} catch {}
	}, []);

	const onOpenChange = React.useCallback((next: boolean) => {
		setOpen(next);
		try {
			localStorage.setItem(STORAGE_KEY, String(!next));
		} catch {}
	}, []);

	return (
		<SidebarProvider
			open={open}
			onOpenChange={onOpenChange}
			style={{ "--sidebar-width": "268px" } as React.CSSProperties}
			className="bg-card h-dvh flex-col overflow-clip md:flex-row"
		>
			{children}
		</SidebarProvider>
	);
};

export const DocsSidebar = ({ children }: { children: React.ReactNode }) => {
	const { isMobile, setOpenMobile } = useSidebar();
	const pathname = usePathname();
	const lastPathname = React.useRef(pathname);

	React.useEffect(() => {
		if (lastPathname.current !== pathname) {
			lastPathname.current = pathname;
			setOpenMobile(false);
		}
	}, [pathname, setOpenMobile]);

	return (
		<Sidebar
			variant="inset"
			side={isMobile ? "right" : "left"}
			className="p-0 max-md:w-[85%]"
		>
			{children}
		</Sidebar>
	);
};
