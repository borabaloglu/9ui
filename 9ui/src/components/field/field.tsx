"use client"

import * as React from "react"
import {
	Controller,
	ControllerProps,
	FieldPath,
	FieldValues,
	useFormContext,
} from "react-hook-form"

import { Label } from "@/src/components/label/label"
import { Slot } from "@/src/components/slot/slot"
import { merge } from "@/src/utils"

/********
Field
********/
type FieldContextType = {
	name: string
	id: string
	error: string | undefined
}

const FieldContext = React.createContext<FieldContextType | null>(null)

const Field = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	const id = React.useId()

	return (
		<FieldContext.Provider value={{ name: props.name, id, error: "" }}>
			<Controller {...props} />
		</FieldContext.Provider>
	)
}

const useField = () => {
	const context = React.useContext(FieldContext)

	if (!context) {
		throw new Error("useField must be used within a Field")
	}

	const { getFieldState, formState } = useFormContext()
	const fieldState = getFieldState(context.name, formState)

	const { id, name } = context

	return {
		id,
		name,
		error: fieldState.error?.message,
		descriptionId: `${id}-description`,
		errorId: `${id}-error`,
	}
}

/********
Field Content
********/
const FieldContent = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={merge("flex flex-col gap-2", className)} {...props} />
}

/********
Field Label
********/
const FieldLabel = ({
	className,
	...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
	const { id, error } = useField()

	return (
		<Label
			htmlFor={id}
			className={merge(error && "text-danger-fg", className)}
			{...props}
		/>
	)
}

/********
Field Control
********/
const FieldControl = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	const { id, descriptionId, error, errorId } = useField()

	return (
		<Slot
			id={id}
			aria-describedby={error ? errorId : descriptionId}
			aria-invalid={!!error}
			aria-errormessage={error}
			{...props}
		/>
	)
}

/********
Field Description
********/
const FieldDescription = ({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
	return (
		<p className={merge("text-sm text-primary-fg", className)} {...props} />
	)
}

/********
Field Error
********/
const FieldError = ({
	children,
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
	const { error } = useField()

	return (
		<p className={merge("text-sm text-danger-fg", className)} {...props}>
			{error || children}
		</p>
	)
}

export {
	Field,
	useField,
	FieldLabel,
	FieldDescription,
	FieldError,
	FieldControl,
	FieldContent,
}