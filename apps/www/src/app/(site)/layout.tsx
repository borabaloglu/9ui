import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

import { getSidebarNav } from "@/lib/source";

const SiteLayout = ({ children }: { children: React.ReactNode }) => (
	<div className="bg-card flex min-h-dvh flex-col md:h-dvh md:overflow-clip">
		<Header sidebarNav={getSidebarNav()} />
		<main className="bg-background relative flex min-w-0 flex-1 flex-col md:mx-2 md:mb-2 md:min-h-0 md:overflow-clip md:rounded-2xl md:border md:shadow-sm">
			<div className="flex flex-1 flex-col md:min-h-0 md:overflow-y-auto md:overscroll-y-contain">
				<div className="flex-1">{children}</div>
				<Footer />
			</div>
		</main>
	</div>
);

export default SiteLayout;
