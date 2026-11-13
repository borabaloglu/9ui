import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerPanel,
	DrawerPopup,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export default function DrawerScrollableContentDemo() {
	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="outline" />}>
				Terms & Conditions
			</DrawerTrigger>
			<DrawerPopup className="max-h-[min(80dvh,--spacing(120))]">
				<DrawerHeader>
					<DrawerTitle>Terms & Conditions</DrawerTitle>
					<DrawerDescription>
						Read the agreement, then accept to continue.
					</DrawerDescription>
				</DrawerHeader>
				<DrawerPanel>
					<p className="font-medium">1. Services</p>
					<p className="text-muted-foreground mt-1">
						We provide the platform as described in your order. Features may
						change with reasonable notice where required by law.
					</p>
					<p className="mt-3 font-medium">2. Accounts</p>
					<p className="text-muted-foreground mt-1">
						You are responsible for credentials and for activity under your
						account. Notify us promptly of unauthorized use.
					</p>
					<p className="mt-3 font-medium">3. Acceptable use</p>
					<p className="text-muted-foreground mt-1">
						No unlawful, harmful, or abusive behavior. No attempts to probe,
						disrupt, or circumvent security controls.
					</p>
					<p className="mt-3 font-medium">4. Data & privacy</p>
					<p className="text-muted-foreground mt-1">
						Processing of personal data is described in our Privacy Policy.
						Analytics may use aggregated or de-identified data.
					</p>
					<p className="mt-3 font-medium">5. Fees</p>
					<p className="text-muted-foreground mt-1">
						Fees are billed according to your plan. Taxes may apply. Late
						payment may result in suspension after notice.
					</p>
					<p className="mt-3 font-medium">6. Termination</p>
					<p className="text-muted-foreground mt-1">
						Either party may terminate for convenience with 30 days notice. We
						may suspend for material breach after cure period where applicable.
					</p>
					<p className="mt-3 font-medium">7. Limitation of liability</p>
					<p className="text-muted-foreground mt-1">
						To the maximum extent permitted by law, our aggregate liability is
						limited to fees paid in the twelve months preceding the claim.
					</p>
					<p className="mt-3 font-medium">8. Changes</p>
					<p className="text-muted-foreground mt-1">
						We may update these terms from time to time. Continued use after an
						update means you accept the revised terms.
					</p>
					<p className="mt-3 font-medium">9. Governing law</p>
					<p className="text-muted-foreground mt-1">
						These terms are governed by the laws of the jurisdiction named in
						your order, without regard to conflict of law rules.
					</p>
				</DrawerPanel>
				<DrawerFooter>
					<DrawerClose render={<Button variant="outline" />}>
						Decline
					</DrawerClose>
					<Button>Accept</Button>
				</DrawerFooter>
			</DrawerPopup>
		</Drawer>
	);
}
