import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: siteConfig.url },
		...source
			.getPages()
			.filter((page) => !page.data.disabled)
			.map((page) => ({ url: `${siteConfig.url}${page.url}` })),
	];
}
