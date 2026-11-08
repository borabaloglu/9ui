import { Metadata } from "next"
import { notFound } from "next/navigation"

import { CtaCard } from "@/components/cta-card"
import { PageActions } from "@/components/page-actions"
import { TableOfContents } from "@/components/toc"

import { siteConfig } from "@/config/site"

import { getNavigationForPage } from "@/lib/navigation"
import { getSidebarNav, source } from "@/lib/source"
import { absoluteUrl } from "@/lib/url"

import { getMDXComponents } from "@/mdx-components"

export async function generateMetadata({
	params,
}: DocPageProps): Promise<Metadata> {
	const page = await getPageFromParams({ params })

	if (!page) {
		return {}
	}

	const { title, description } = page.data

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			url: absoluteUrl("docs", page.slugs.join("/")),
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
			title,
			description,
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

async function getPageFromParams({ params }: DocPageProps) {
	const { slug } = await params
	const page = source.getPage(slug)

	if (!page || page.data.disabled) {
		return null
	}

	return page
}

const DocPage = async ({ params }: DocPageProps) => {
	const page = await getPageFromParams({ params })

	if (!page) {
		notFound()
	}

	const { body: MDX, toc, title, description } = page.data
	const navigation = getNavigationForPage(getSidebarNav(), page.url)

	return (
		<main className="relative grid xl:grid-cols-[1fr_240px] xl:gap-8">
			<div className="min-h-screen min-w-0 py-4">
				<div className="mb-4">
					<PageActions navigation={navigation} />
				</div>

				<h1 className="text-3xl font-bold">{title}</h1>
				{description && (
					<p className="text-muted-foreground mt-2">{description}</p>
				)}

				<MDX components={getMDXComponents()} />
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
