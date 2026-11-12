import { Button } from "@/components/ui/button";
import {
	Vaul,
	VaulClose,
	VaulContent,
	VaulDescription,
	VaulFooter,
	VaulHeader,
	VaulTitle,
	VaulTrigger,
} from "@/components/ui/vaul";

export default function VaulFooterBareDemo() {
	return (
		<Vaul>
			<VaulTrigger render={<Button variant="outline" />}>
				Archive project
			</VaulTrigger>
			<VaulContent>
				<VaulHeader>
					<VaulTitle>Archive this project?</VaulTitle>
					<VaulDescription>
						The project becomes read-only and leaves your dashboard. You can
						restore it at any time.
					</VaulDescription>
				</VaulHeader>
				<VaulFooter variant="bare">
					<VaulClose render={<Button variant="outline" />}>Cancel</VaulClose>
					<VaulClose render={<Button />}>Archive</VaulClose>
				</VaulFooter>
			</VaulContent>
		</Vaul>
	);
}
