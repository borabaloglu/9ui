import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { getSidebarNav } from "@/lib/source";

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-card flex h-dvh flex-col overflow-clip">
		<Header sidebarNav={getSidebarNav()} />
		<main className="bg-background relative mx-2 mb-2 flex min-h-0 min-w-0 flex-1 flex-col overflow-clip rounded-2xl border shadow-sm">
			<div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain">
				<div className="flex-1">{children}</div>
				<Footer />
			</div>
		</main>
	</div>
);

export default SiteLayout;
