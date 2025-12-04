"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";



import { Button } from "@/components/ui/button";





export const CtaCard = () => {
	const pathname = usePathname()
	const isInstallation = pathname === "/docs/getting-started/installation"

	if (isInstallation) return null

	return (
		<div className="bg-card space-y-2 rounded-md border p-4">
			<p className="block text-sm font-semibold">Start using 9ui</p>
			<p className="text-muted-foreground text-sm leading-relaxed">
				Are you ready to kickoff your next project? What about using 9ui?
			</p>
			<Button
				size="sm"
				className="mt-2 w-full"
				render={(props) => (
					<Link href="/docs/getting-started/installation" {...props}>
						Go to Installation
					</Link>
				)}
				nativeButton={false}
			/>
		</div>
	)
}