import { DocsSidebarNav } from "@/components/sidebar"

const DocsLayout = ({ children }: { children: React.ReactNode }) => (
	<div className="container mx-auto gap-8 px-4 md:grid md:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[240px_1fr] xl:px-0">
		<aside className="dark:border-border/40 fixed top-14 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-dashed md:sticky md:block xl:border-x">
			<div className="scrollbar-hidden h-full overflow-y-auto py-4 pr-2 pl-6">
				<DocsSidebarNav />
			</div>
		</aside>
		<main className="dark:border-border/40 min-h-screen border-dashed xl:border-r">
			{children}
		</main>
	</div>
)

export default DocsLayout
