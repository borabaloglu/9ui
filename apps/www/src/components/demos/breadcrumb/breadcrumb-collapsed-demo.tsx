import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
	Menu,
	MenuLinkItem,
	MenuPopup,
	MenuTrigger,
} from "@/components/ui/menu";

export default function BreadcrumbCollapsedDemo() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Menu>
						<MenuTrigger
							render={
								<Button
									variant="ghost"
									size="icon-xs"
									aria-label="Show hidden pages"
								/>
							}
						>
							<BreadcrumbEllipsis />
						</MenuTrigger>
						<MenuPopup>
							<MenuLinkItem href="#">Docs</MenuLinkItem>
							<MenuLinkItem href="#">Getting Started</MenuLinkItem>
							<MenuLinkItem href="#">Installation</MenuLinkItem>
						</MenuPopup>
					</Menu>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Components</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
