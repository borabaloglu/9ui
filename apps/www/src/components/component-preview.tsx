import Link from "next/link";

import { DemoRenderer } from "@/components/demo-renderer";
import { PreviewCode } from "@/components/preview-code";
import { RtlPreview } from "@/components/rtl-preview";

import { getDemo } from "@/lib/demos";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
	name: string;
	showReload?: boolean;
	previewClassName?: string;
	direction?: "ltr" | "rtl";
}

export const ComponentPreview = ({
	name,
	showReload = false,
	previewClassName,
	direction = "ltr",
}: ComponentPreviewProps) => {
	const demo = getDemo(name);

	if (!demo) {
		return (
			<p className="text-muted-foreground mt-8 text-sm">
				Demo <code data-inline="">{name}</code> not found.
			</p>
		);
	}

	return (
		<div className="mt-4 overflow-hidden rounded-xl border">
			{direction === "rtl" ? (
				<RtlPreview previewClassName={previewClassName}>
					<DemoRenderer path={demo.path} showReload={showReload} />
				</RtlPreview>
			) : (
				<div
					className={cn(
						"relative flex min-h-[200px] items-center justify-center p-10",
						previewClassName,
					)}
				>
					<DemoRenderer path={demo.path} showReload={showReload} />
				</div>
			)}

			<PreviewCode
				label={`${name}.tsx`}
				content={demo.source}
				note={direction === "rtl" ? <RtlCodeNote /> : undefined}
			>
				<div dangerouslySetInnerHTML={{ __html: highlightCode(demo.source) }} />
			</PreviewCode>
		</div>
	);
};

const RtlCodeNote = () => (
	<p className="text-muted-foreground border-b px-4 py-3 text-sm">
		This site is left to right, so the demo switches language with{" "}
		<code data-inline="">useTranslation</code> and sets{" "}
		<code data-inline="">dir</code> on its popups. In your app, set{" "}
		<code data-inline="">dir</code> once on <code data-inline="">html</code>{" "}
		instead. See{" "}
		<Link
			href="/docs/getting-started/rtl"
			className="text-foreground underline underline-offset-4"
		>
			RTL
		</Link>
		.
	</p>
);
