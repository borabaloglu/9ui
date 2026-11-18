import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

type ComponentLink = {
	label: string;
	href: string;
};

type ComponentLinksProps = {
	links: ComponentLink[];
};

export function ComponentLinks({ links }: ComponentLinksProps) {
	return (
		<div data-slot="component-links" className="mt-4 flex gap-2">
			{links.map((link) => (
				<Button
					key={link.label}
					variant="secondary"
					size="xs"
					nativeButton={false}
					render={
						<a href={link.href} rel="noopener noreferrer" target="_blank">
							{link.label}
							<ExternalLink className="size-2.5" />
						</a>
					}
				/>
			))}
		</div>
	);
}
