import { readFile } from "fs/promises"
import { join } from "path"
import * as React from "react"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import { CtaCard } from "@/components/cta-card"
import { PageActions } from "@/components/page-actions"
import { TableOfContents } from "@/components/toc"

import { siteConfig } from "@/config/site"

import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl } from "@/lib/url"

import { contentRegistry } from "@/registry/contents"

export async function generateMetadata({
	params,
}: DocPageProps): Promise<Metadata> {
	const doc = await getDocFromParams({ params })

	if (!doc) {
		return {}
	}

	const { metadata } = doc

	return {
		title: metadata.title,
		description: metadata.description,
		openGraph: {
			title: metadata.title,
			description: metadata.description,
			type: "article",
			url: absoluteUrl("docs", doc.slug),
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: siteConfig.name,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: metadata.title,
			description: metadata.description,
			images: [siteConfig.ogImage],
			creator: "@borabalogluu",
		},
	}
}

interface DocPageProps {
	params: Promise<{
		slug: string[]
	}>
}

async function getDocFromParams({ params }: DocPageProps) {
	const { slug: slugs } = await params
	const slug = slugs.join("/")

	const entry = contentRegistry[slug]

	if (!entry) {
		return null
	}

	try {
		const doc = await import(`@/content/${entry.path}`)
		const source = await readFile(
			join(process.cwd(), "src/content", entry.path),
			"utf-8"
		)

		return {
			Doc: doc.default,
			source,
			slug,
			metadata: entry.meta,
			breadcrumbs: entry.breadcrumbs,
		}
	} catch {
		return null
	}
}

const DocPage = async ({ params }: DocPageProps) => {
	const doc = await getDocFromParams({ params })

	if (!doc) {
		notFound()
	}

	const toc = await getTableOfContents(doc.source)

	return (
		<main className="relative grid xl:grid-cols-[1fr_240px] xl:gap-8">
			<div className="min-h-screen min-w-0 py-4">
				<div className="mb-4">
					<PageActions />
				</div>

				<doc.Doc />
			</div>

			<div className="dark:border-border/40 h-full border-dashed xl:border-l">
				<div className="sticky top-14 -mt-8 hidden h-fit max-h-[calc(100vh-3.5rem)] space-y-4 overflow-auto px-4 py-4 xl:block">
					{toc.length > 0 && <TableOfContents items={toc} />}
					<CtaCard />
				</div>
			</div>
		</main>
	)
}

export const dynamicParams = false

export default DocPage
