import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const frameworks = [
	{
		value: "nextjs",
		label: "Next.js",
		description: "npx create-next-app",
	},
	{
		value: "remix",
		label: "Remix",
		description: "npx create-remix",
	},
	{
		value: "astro",
		label: "Astro",
		description: "npx create-astro",
	},
	{
		value: "vite",
		label: "Vite",
		description: "npx create-vite",
	},
];

export default function SelectItemDescriptionDemo() {
	return (
		<Select items={frameworks}>
			<SelectTrigger aria-label="Framework" className="w-52">
				<SelectValue placeholder="Select a framework" />
			</SelectTrigger>
			<SelectPopup>
				{frameworks.map((framework) => (
					<SelectItem key={framework.value} value={framework.value}>
						<span className="flex flex-col gap-0.5">
							<span>{framework.label}</span>
							<span className="text-muted-foreground text-xs leading-tight font-normal text-wrap">
								{framework.description}
							</span>
						</span>
					</SelectItem>
				))}
			</SelectPopup>
		</Select>
	);
}
