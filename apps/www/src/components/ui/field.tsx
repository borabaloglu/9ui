import { Field as BaseField } from "@base-ui/react/field";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const fieldVariants = cva("flex gap-2", {
	variants: {
		orientation: {
			vertical: "w-full flex-col",
			horizontal: "flex-row items-center",
		},
	},
	defaultVariants: {
		orientation: "vertical",
	},
});

function Field({
	className,
	orientation = "vertical",
	...props
}: Omit<BaseField.Root.Props, "className"> &
	VariantProps<typeof fieldVariants> & {
		className?: string;
	}) {
	return (
		<BaseField.Root
			data-slot="field"
			data-orientation={orientation}
			className={cn(fieldVariants({ orientation }), className)}
			{...props}
		/>
	);
}

function FieldLabel({
	className,
	...props
}: Omit<BaseField.Label.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseField.Label
			data-slot="field-label"
			className={cn(
				"data-invalid:text-destructive data-disabled:text-foreground/50 flex w-fit items-center gap-2 text-sm leading-snug font-medium select-none",
				className,
			)}
			{...props}
		/>
	);
}

function FieldControl(props: BaseField.Control.Props) {
	return <BaseField.Control data-slot="field-control" {...props} />;
}

function FieldItem(props: BaseField.Item.Props) {
	return <BaseField.Item data-slot="field-item" {...props} />;
}

function FieldDescription({
	className,
	...props
}: Omit<BaseField.Description.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseField.Description
			data-slot="field-description"
			className={cn(
				"text-muted-foreground [&>a:hover]:text-foreground text-sm leading-normal [&>a]:underline [&>a]:underline-offset-4",
				className,
			)}
			{...props}
		/>
	);
}

function FieldError({
	className,
	...props
}: Omit<BaseField.Error.Props, "className"> & {
	className?: string;
}) {
	return (
		<BaseField.Error
			data-slot="field-error"
			className={cn("text-destructive text-sm leading-normal", className)}
			{...props}
		/>
	);
}

function FieldValidity(props: BaseField.Validity.Props) {
	return <BaseField.Validity {...props} />;
}

export {
	Field,
	FieldControl,
	FieldDescription,
	FieldError,
	FieldItem,
	FieldLabel,
	FieldValidity,
};
