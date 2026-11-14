import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon, SlashIcon } from "lucide-react";

import { DocsSidebarToggle } from "@/components/docs-shell";
import { GitHubLink } from "@/components/github-link";
import { MobileToc } from "@/components/mobile-toc";
import { PageActions } from "@/components/page-actions";
import { ThemeToggle } from "@/components/theme-toggle";
import { TableOfContents } from "@/components/toc";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { siteConfig } from "@/config/site";

import { getLeadingComponentLinks } from "@/lib/component-links";
import { getNavigationForPage } from "@/lib/navigation";
import { getBreadcrumb, getSidebarNav, source } from "@/lib/source";
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
	const breadcrumb = getBreadcrumb(page.url);

	return (
		<>
			<header className="before:from-background pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-10.5 items-center gap-1.5 px-1.75 *:pointer-events-auto before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-16 before:bg-linear-to-b before:from-65% before:to-transparent md:flex">
				<DocsSidebarToggle />
				{breadcrumb.length > 0 && (
					<Breadcrumb className="min-w-0 -translate-y-px overflow-hidden">
						<BreadcrumbList className="flex-nowrap">
							{breadcrumb.map((item, index) => {
								const isCurrent = index === breadcrumb.length - 1;

								return (
									<Fragment key={item.title}>
										{index > 0 && (
											<BreadcrumbSeparator className="text-muted-foreground/60 shrink-0 [&>svg]:size-3">
												<SlashIcon className="-rotate-12" />
											</BreadcrumbSeparator>
										)}
										<BreadcrumbItem
											className={isCurrent ? "min-w-0" : "shrink-0"}
										>
											{isCurrent ? (
												<BreadcrumbPage className="truncate">
													{item.title}
												</BreadcrumbPage>
											) : item.href ? (
												<BreadcrumbLink render={<Link href={item.href} />}>
													{item.title}
												</BreadcrumbLink>
											) : (
												item.title
											)}
										</BreadcrumbItem>
									</Fragment>
								);
							})}
						</BreadcrumbList>
					</Breadcrumb>
				)}
				<div className="bg-background ms-auto flex items-center gap-0.5 rounded-lg">
					<GitHubLink />
					<ThemeToggle />
				</div>
			</header>
			<MobileToc key={`toc-${page.url}`} items={toc} />
			<div
				key={page.url}
				className="flex min-h-0 flex-1 [scrollbar-gutter:stable] items-start overflow-y-auto overscroll-y-contain px-4 [--toc-width:0px] md:scroll-smooth md:px-[max(1.5rem,calc((100%-760px-var(--toc-width))/2))] md:pt-10 @5xl:[--toc-width:19rem]"
			>
				<article className="flex w-full max-w-[760px] min-w-0 flex-col gap-4 pt-6 pb-16">
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
