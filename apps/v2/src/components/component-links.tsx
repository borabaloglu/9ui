import { ExternalLink } from "lucide-react"

interface ComponentLinksProps {
	links: {
		label: string
		href: string
	}[]
}

export const ComponentLinks = ({ links }: ComponentLinksProps) => {
	return (
		<div className="mt-4 flex gap-2">
			{links.map((link) => (
				<a
					className="flex h-6 items-center gap-2 rounded-md bg-muted px-2 text-xs transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
					key={link.label}
					href={link.href}
					rel="noopener noreferrer"
					target="_blank"
				>
					{link.label}
					<ExternalLink className="size-2.5" />
				</a>
			))}
		</div>
	)
}
