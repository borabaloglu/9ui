import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectItem,
	SelectPopup,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const currencies = [
	{ label: "USD", value: "usd" },
	{ label: "EUR", value: "eur" },
	{ label: "GBP", value: "gbp" },
];

export default function ButtonGroupSelectDemo() {
	return (
		<ButtonGroup className="w-full max-w-sm">
			<Select items={currencies} defaultValue="usd">
				<SelectTrigger aria-label="Currency" className="w-20">
					<SelectValue />
				</SelectTrigger>
				<SelectPopup>
					{currencies.map(({ label, value }) => (
						<SelectItem key={value} value={value}>
							{label}
						</SelectItem>
					))}
				</SelectPopup>
			</Select>
			<Input aria-label="Amount" placeholder="10.00" inputMode="decimal" />
			<Button variant="outline" size="icon" aria-label="Send">
				<ArrowRightIcon />
			</Button>
		</ButtonGroup>
	);
}
