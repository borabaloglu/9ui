import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroActions() {
	return (
		<div className="mt-4 flex items-center gap-4">
			<Button
				render={<Link href="/docs">Get Started</Link>}
				nativeButton={false}
			/>
			<Button
				variant="outline"
				render={<Link href="/docs/components">Browse Components</Link>}
				nativeButton={false}
			/>
		</div>
	);
}
