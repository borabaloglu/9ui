"use client";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldValidationDemo() {
	return (
		<Field
			name="slug"
			className="max-w-xs"
			validate={(value) => {
				const slug = String(value ?? "");
				if (slug && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
					return "Use lowercase letters, numbers and hyphens only.";
				}
				return null;
			}}
			validationMode="onChange"
			validationDebounceTime={300}
		>
			<FieldLabel>Slug</FieldLabel>
			<Input placeholder="my-post-slug" />
			<FieldError />
		</Field>
	);
}
