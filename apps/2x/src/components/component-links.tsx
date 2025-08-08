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
					className="bg-muted focus-visible:ring-ring flex h-6 items-center gap-2 rounded-md px-2 text-xs transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:outline-none"
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
