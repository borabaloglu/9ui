"use client";

import * as React from "react";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

import { cn } from "@/lib/utils";

const FieldsetDescriptionContext = React.createContext<
	((id: string | undefined) => void) | null
>(null);

function Fieldset({
	className,
	...props
}: Omit<BaseFieldset.Root.Props, "className"> & {
	className?: string;
}) {
	const [descriptionId, setDescriptionId] = React.useState<string>();

	return (
		<FieldsetDescriptionContext.Provider value={setDescriptionId}>
			<BaseFieldset.Root
				data-slot="fieldset"
				aria-describedby={descriptionId}
				className={cn("flex w-full min-w-0 flex-col gap-4", className)}
				{...props}
			/>
		</FieldsetDescriptionContext.Provider>
	);
}

function FieldsetLegend({
	className,
	...props
}: Omit<BaseFieldset.Legend.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseFieldset.Legend
			data-slot="fieldset-legend"
			className={cn(
				"data-disabled:text-foreground/50 text-base leading-snug font-medium",
				className,
			)}
			{...props}
		/>
	);
}

function FieldsetDescription({
	className,
	id: idProp,
	...props
}: React.ComponentProps<"p">) {
	const generatedId = React.useId();
	const id = idProp ?? generatedId;
	const setDescriptionId = React.useContext(FieldsetDescriptionContext);

	React.useEffect(() => {
		setDescriptionId?.(id);
		return () => setDescriptionId?.(undefined);
	}, [id, setDescriptionId]);

	return (
		<p
			id={id}
			data-slot="fieldset-description"
			className={cn(
				"text-muted-foreground [&>a:hover]:text-foreground -mt-3 text-sm leading-normal [&>a]:underline [&>a]:underline-offset-4",
				className,
			)}
			{...props}
		/>
	);
}

export { Fieldset, FieldsetDescription, FieldsetLegend };
