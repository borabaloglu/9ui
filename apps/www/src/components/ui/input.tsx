import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

const inputSizes = {
	sm: "h-7 rounded-[min(var(--radius-md),0.75rem)] px-2.75 text-[0.8rem] file:h-5 file:text-[0.8rem] any-pointer-coarse:h-8",
	default: "h-8 rounded-lg px-2.75 text-sm any-pointer-coarse:h-9",
	lg: "h-9 rounded-lg px-3.25 text-sm any-pointer-coarse:h-10",
};

type InputProps = Omit<BaseInput.Props, "className" | "size"> & {
	className?: string;
	size?: keyof typeof inputSizes | number;
};

function Input({ className, size = "default", ...props }: InputProps) {
	const visualSize = typeof size === "number" ? "default" : size;

	return (
		<BaseInput
			data-slot="input"
			data-size={visualSize}
			size={typeof size === "number" ? size : undefined}
			className={cn(
				"bg-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/30 dark:aria-invalid:ring-destructive/40 inset-ring-border focus-visible:inset-ring-ring aria-invalid:inset-ring-destructive/60 w-full min-w-0 py-1 shadow-xs inset-ring-1 transition-[box-shadow] duration-150 ease-out outline-none not-dark:inset-shadow-[0_-1px_--theme(--color-black/6%)] file:inline-flex file:h-6 file:text-sm file:font-medium focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 dark:inset-shadow-[0_1px_--theme(--color-white/8%)] any-pointer-coarse:text-base [&:is(:disabled,[readonly],[aria-invalid=true])]:shadow-none [&:is(:focus-visible,:disabled,[readonly],[aria-invalid=true])]:inset-shadow-[0_0_#0000] [&[readonly]]:bg-transparent",
				inputSizes[visualSize],
				className,
			)}
			{...props}
		/>
	);
}

export type { InputProps };
export { Input };
