import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { DocsSidebarToggle } from "@/components/docs-shell";
import { GitHubLink } from "@/components/header";
import { PageActions } from "@/components/page-actions";
import { ThemeToggle } from "@/components/theme-toggle";
import { TableOfContents } from "@/components/toc";

import { siteConfig } from "@/config/site";

import { getLeadingComponentLinks } from "@/lib/component-links";
import { getNavigationForPage } from "@/lib/navigation";
import { getSidebarNav, source } from "@/lib/source";
import { absoluteUrl } from "@/lib/url";

import { getMDXComponents } from "@/mdx-components";

export async function generateMetadata({
	params,
}: DocPageProps): Promise<Metadata> {
	const page = await getPageFromParams({ params });

	if (!page) {
		return {};
	}

	const { title, description } = page.data;

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
	};
}

interface DocPageProps {
	params: Promise<{
		slug: string[];
	}>;
}

async function getPageFromParams({ params }: DocPageProps) {
	const { slug } = await params;
	const page = source.getPage(slug);

	if (!page || page.data.disabled) {
		return null;
	}

	return page;
}

const DocPage = async ({ params }: DocPageProps) => {
	const page = await getPageFromParams({ params });

	if (!page) {
		notFound();
	}

	const { body: MDX, toc, title, description } = page.data;
	const sidebarNav = getSidebarNav();
	const navigation = getNavigationForPage(sidebarNav, page.url);
	const group = sidebarNav.find((group) =>
		group.items.some((item) => item.href === page.url),
	);

	return (
		<>
			<header className="from-background pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-10 items-center gap-1.5 bg-linear-to-b from-50% to-transparent ps-6 pe-4 *:pointer-events-auto md:flex">
				<DocsSidebarToggle className="-ms-2 hidden group-data-[sidebar-collapsed=true]/docs:inline-flex" />
				{group && (
					<span className="text-muted-foreground truncate text-sm">
						{group.title}
					</span>
				)}
				<div className="bg-background ms-auto flex items-center gap-0.5 rounded-lg">
					<GitHubLink />
					<ThemeToggle />
				</div>
			</header>
			<div
				key={page.url}
				className="flex flex-1 items-start px-4 [--toc-width:0px] md:min-h-0 md:[scrollbar-gutter:stable] md:overflow-y-auto md:overscroll-y-contain md:scroll-smooth md:px-[max(1.5rem,calc((100%-760px-var(--toc-width))/2))] md:pt-10 @5xl:[--toc-width:19rem]"
			>
				<article className="flex w-full max-w-[760px] min-w-0 flex-col gap-4 pt-6 pb-16">
					{group && (
						<span className="text-muted-foreground text-sm md:hidden">
							{group.title}
						</span>
					)}
					<h1 className="text-[1.75rem] font-semibold">{title}</h1>
					{description && (
						<p className="text-muted-foreground mb-2 text-lg">{description}</p>
					)}
					<PageActions links={getLeadingComponentLinks(page.path)} />

					<div className="flex-1 [&>:first-child]:mt-0 [&>[data-slot=component-links]:first-child]:hidden [&>[data-slot=component-links]:first-child+*]:mt-0">
						<MDX components={getMDXComponents()} />
					</div>

					{(navigation.prev || navigation.next) && (
						<nav className="mt-8 grid gap-3 border-t pt-6 sm:grid-cols-2">
							{navigation.prev && (
								<Link
									href={navigation.prev.href}
									className="hover:bg-accent/40 focus-visible:ring-ring/50 flex flex-col gap-1 rounded-2xl border p-4 text-sm transition-colors outline-none focus-visible:ring-3"
									prefetch
								>
									<span className="text-muted-foreground inline-flex items-center gap-1.5">
										<ChevronLeftIcon className="size-4" />
										Previous Page
									</span>
									<span className="font-medium">{navigation.prev.title}</span>
								</Link>
							)}
							{navigation.next && (
								<Link
									href={navigation.next.href}
									className="hover:bg-accent/40 focus-visible:ring-ring/50 flex flex-col items-end gap-1 rounded-2xl border p-4 text-end text-sm transition-colors outline-none focus-visible:ring-3 sm:col-start-2"
									prefetch
								>
									<span className="text-muted-foreground inline-flex items-center gap-1.5">
										Next Page
										<ChevronRightIcon className="size-4" />
									</span>
									<span className="font-medium">{navigation.next.title}</span>
								</Link>
							)}
						</nav>
					)}
				</article>

				<div className="sticky top-0 hidden h-[calc(100dvh-3.5rem-2px)] w-(--toc-width) shrink-0 flex-col gap-4 ps-16 pt-8 pb-4 @5xl:flex">
					{toc.length > 0 && <TableOfContents items={toc} />}
				</div>
			</div>
		</>
	);
};

export const dynamicParams = false;

export default DocPage;
