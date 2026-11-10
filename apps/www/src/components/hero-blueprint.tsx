"use client";

import * as React from "react";

import { designs } from "@/components/hero-blueprint-designs";

import { cn } from "@/lib/utils";

import styles from "./hero-blueprint.module.css";

const TIMING = {
	drawStart: 200,
	drawDuration: 1100,
	drawStagger: 90,
	settle: 400,
	morphDuration: 700,
	morphStagger: 80,
	hold: 3500,
	exit: 300,
};

function getTimeline(count: number) {
	const morphStart =
		TIMING.drawStart +
		(count - 1) * TIMING.drawStagger +
		TIMING.drawDuration +
		TIMING.settle;
	const end =
		morphStart + (count - 1) * TIMING.morphStagger + TIMING.morphDuration;

	return { morphStart, end };
}

export function HeroBlueprint() {
	const rootRef = React.useRef<HTMLDivElement>(null);
	const [index, setIndex] = React.useState(0);
	const [ready, setReady] = React.useState(false);
	const [exiting, setExiting] = React.useState(false);
	const [hovered, setHovered] = React.useState(false);
	const [focused, setFocused] = React.useState(false);
	const [hidden, setHidden] = React.useState(false);

	const design = designs[index];
	const timeline = getTimeline(design.count);
	const paused = hovered || focused || hidden;

	React.useEffect(() => {
		const root = rootRef.current;
		if (!root) return;

		const handleVisibilityChange = () => setHidden(document.hidden);
		const handlePointerEnter = (event: PointerEvent) => {
			if (event.pointerType === "mouse") setHovered(true);
		};
		const handlePointerLeave = () => setHovered(false);
		const handleFocusIn = () => setFocused(true);
		const handleFocusOut = (event: FocusEvent) => {
			if (!root.contains(event.relatedTarget as Node | null)) setFocused(false);
		};

		handleVisibilityChange();
		document.addEventListener("visibilitychange", handleVisibilityChange);
		root.addEventListener("pointerenter", handlePointerEnter);
		root.addEventListener("pointerleave", handlePointerLeave);
		root.addEventListener("focusin", handleFocusIn);
		root.addEventListener("focusout", handleFocusOut);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
			root.removeEventListener("pointerenter", handlePointerEnter);
			root.removeEventListener("pointerleave", handlePointerLeave);
			root.removeEventListener("focusin", handleFocusIn);
			root.removeEventListener("focusout", handleFocusOut);
		};
	}, []);

	React.useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timeout = window.setTimeout(
			() => setReady(true),
			getTimeline(designs[index].count).end + TIMING.hold,
		);
		return () => window.clearTimeout(timeout);
	}, [index]);

	React.useEffect(() => {
		if (ready && !paused) setExiting(true);
	}, [ready, paused]);

	React.useEffect(() => {
		if (!exiting) return;
		const timeout = window.setTimeout(() => {
			setIndex((current) => (current + 1) % designs.length);
			setReady(false);
			setExiting(false);
		}, TIMING.exit);
		return () => window.clearTimeout(timeout);
	}, [exiting]);

	return (
		<div
			ref={rootRef}
			className={cn(
				styles.root,
				"flex h-96 w-full max-w-sm items-center lg:h-88",
			)}
			style={
				{
					"--draw-start": `${TIMING.drawStart}ms`,
					"--draw-duration": `${TIMING.drawDuration}ms`,
					"--draw-stagger": `${TIMING.drawStagger}ms`,
					"--morph-start": `${timeline.morphStart}ms`,
					"--morph-duration": `${TIMING.morphDuration}ms`,
					"--morph-stagger": `${TIMING.morphStagger}ms`,
					"--exit-duration": `${TIMING.exit}ms`,
				} as React.CSSProperties
			}
		>
			<div
				key={design.id}
				className={cn(
					styles.piece,
					"text-card-foreground w-full",
					exiting && styles.exiting,
				)}
				style={{ "--i": 0 } as React.CSSProperties}
			>
				<div
					className={cn(
						styles.surface,
						"bg-card absolute inset-0 rounded-xl border shadow-sm",
					)}
				/>
				<svg aria-hidden="true" className={styles.outline}>
					<rect width="100%" height="100%" rx={12} pathLength={1} />
				</svg>
				<div className="relative flex flex-col gap-6 p-6">
					<design.Component />
				</div>
			</div>
		</div>
	);
}
