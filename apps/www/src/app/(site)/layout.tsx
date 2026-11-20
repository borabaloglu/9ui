import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";

import { getSidebarNav } from "@/lib/source";

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-card flex h-dvh flex-col overflow-clip">
		<Header sidebarNav={getSidebarNav()} />
		<main className="bg-background relative mx-2 mb-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-clip rounded-xl border shadow-xs">
			<ScrollArea className="min-h-0 flex-1">
				<div className="flex min-h-full flex-col">
					<div className="flex-1">{children}</div>
					<Footer />
				</div>
			</ScrollArea>
		</main>
	</div>
);

export default SiteLayout;
