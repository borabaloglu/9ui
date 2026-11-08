"use client"

import Link from "next/link"
import { ArrowUpRightIcon, BookOpenIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroActions() {
	return (
		<div className="mt-4 flex items-center gap-4">
			<Button
				className="gap-2"
				render={
					<Link href="/docs">
						<BookOpenIcon className="size-3.5" />
						Get Started
					</Link>
				}
				nativeButton={false}
			/>

			<Button
				variant="outline"
				className="group gap-2"
				render={
					<Link href="/docs/components">
						Components
						<ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:rotate-45" />
					</Link>
				}
				nativeButton={false}
			/>
		</div>
	)
}
