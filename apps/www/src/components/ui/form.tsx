import { Form as BaseForm } from "@base-ui/react/form";

import { cn } from "@/lib/utils";

function Form<FormValues extends BaseForm.Values = BaseForm.Values>({
	className,
	...props
}: Omit<BaseForm.Props<FormValues>, "className"> & {
	className?: string;
}) {
	return (
		<BaseForm
			data-slot="form"
			className={cn("flex w-full flex-col gap-4", className)}
			{...props}
		/>
	);
}

export { Form };
