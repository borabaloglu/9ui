import Link from "next/link"
import { ExternalLink } from "lucide-react"

type ComponentLink = {
	label: string
	href: string
}

type ComponentLinksProps = {
	links: ComponentLink[]
}

function getLinkComponent(link: ComponentLink) {
	const isInternal = link.href.includes("9ui.dev")

	const className =
		"bg-muted focus-visible:ring-ring flex h-6 items-center gap-2 rounded-md px-2 text-xs transition-opacity hover:opacity-80 focus-visible:ring-1 focus-visible:outline-none"

	if (isInternal) {
		return (
			<Link
				className={className}
				href={link.href}
				key={link.label}
				target="_blank"
				prefetch
			>
				{link.label}
				<ExternalLink className="size-2.5" />
			</Link>
		)
	}

	return (
		<a
			className={className}
			key={link.label}
			href={link.href}
			rel="noopener noreferrer"
			target="_blank"
		>
			{link.label}
			<ExternalLink className="size-2.5" />
		</a>
	)
}

export function ComponentLinks({ links }: ComponentLinksProps) {
	return (
		<div className="mt-4 flex gap-2">
			{links.map((link) => getLinkComponent(link))}
		</div>
	)
}
