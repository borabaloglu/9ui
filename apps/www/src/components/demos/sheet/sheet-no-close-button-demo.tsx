import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Sheet,
	SheetClose,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetPanel,
	SheetPopup,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const filters = ["In stock", "On sale", "Free shipping", "New arrivals"];

export default function SheetNoCloseButtonDemo() {
	return (
		<Sheet>
			<SheetTrigger render={<Button variant="outline" />}>Filters</SheetTrigger>
			<SheetPopup showCloseButton={false}>
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
					<SheetDescription>
						Narrow the results. Apply to see the matching products.
					</SheetDescription>
				</SheetHeader>
				<SheetPanel className="flex flex-col items-start gap-3">
					{filters.map((filter) => (
						<Label key={filter}>
							<Checkbox />
							{filter}
						</Label>
					))}
				</SheetPanel>
				<SheetFooter>
					<SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
					<SheetClose render={<Button />}>Apply</SheetClose>
				</SheetFooter>
			</SheetPopup>
		</Sheet>
	);
}
