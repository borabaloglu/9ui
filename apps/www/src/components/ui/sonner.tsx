"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();
	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster group"
			style={
				{
					"--normal-bg": "var(--color-popover)",
					"--normal-text": "var(--color-popover-foreground)",
					"--normal-border": "var(--color-border)",
					"--error-bg":
						"color-mix(in oklab, var(--color-destructive) 8%, var(--color-popover))",
					"--error-text": "var(--color-destructive)",
					"--error-border":
						"color-mix(in oklab, var(--color-destructive) 20%, transparent)",
					"--warning-bg":
						"color-mix(in oklab, var(--color-warning) 8%, var(--color-popover))",
					"--warning-text": "var(--color-warning)",
					"--warning-border":
						"color-mix(in oklab, var(--color-warning) 20%, transparent)",
					"--info-bg":
						"color-mix(in oklab, var(--color-info) 8%, var(--color-popover))",
					"--info-text": "var(--color-info)",
					"--info-border":
						"color-mix(in oklab, var(--color-info) 20%, transparent)",
					"--success-bg":
						"color-mix(in oklab, var(--color-success) 8%, var(--color-popover))",
					"--success-text": "var(--color-success)",
					"--success-border":
						"color-mix(in oklab, var(--color-success) 20%, transparent)",
				} as React.CSSProperties
			}
			{...props}
		/>
	);
};

export { Toaster };
