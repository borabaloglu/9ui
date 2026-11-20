"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	NumberField,
	NumberFieldDecrement,
	NumberFieldGroup,
	NumberFieldIncrement,
	NumberFieldInput,
} from "@/components/ui/number-field";
import { Separator } from "@/components/ui/separator";

const items = [
	{ id: "lamp", name: "Desk lamp", detail: "Matte black", price: 89 },
	{ id: "notebook", name: "Notebook", detail: "Dotted, A5", price: 14 },
	{ id: "pen", name: "Fountain pen", detail: "Fine nib", price: 32 },
];

const freeShippingFrom = 150;
const shippingFee = 9;

const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export function CartCard() {
	const [quantities, setQuantities] = useState<Record<string, number>>({
		lamp: 1,
		notebook: 2,
		pen: 1,
	});

	const count = items.reduce((sum, item) => sum + quantities[item.id], 0);
	const subtotal = items.reduce(
		(sum, item) => sum + item.price * quantities[item.id],
		0,
	);
	const shipping =
		subtotal >= freeShippingFrom || subtotal === 0 ? 0 : shippingFee;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Your cart</CardTitle>
				<CardAction className="text-muted-foreground tabular-nums">
					{count} {count === 1 ? "item" : "items"}
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{items.map((item) => (
					<div key={item.id} className="flex items-center gap-3">
						<div className="min-w-0 flex-1">
							<p className="font-medium">{item.name}</p>
							<p className="text-muted-foreground">
								{item.detail} · {formatPrice(item.price)}
							</p>
						</div>
						<NumberField
							size="sm"
							className="w-24"
							value={quantities[item.id]}
							onValueChange={(value) =>
								setQuantities({ ...quantities, [item.id]: value ?? 0 })
							}
							min={0}
							max={9}
						>
							<NumberFieldGroup>
								<NumberFieldDecrement />
								<NumberFieldInput aria-label={`Quantity of ${item.name}`} />
								<NumberFieldIncrement />
							</NumberFieldGroup>
						</NumberField>
					</div>
				))}
				<Separator />
				<dl className="flex flex-col gap-1.5 tabular-nums">
					<div className="flex justify-between">
						<dt className="text-muted-foreground">Subtotal</dt>
						<dd>{formatPrice(subtotal)}</dd>
					</div>
					<div className="flex justify-between">
						<dt className="text-muted-foreground">Shipping</dt>
						<dd>{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
					</div>
					<div className="flex justify-between font-medium">
						<dt>Total</dt>
						<dd>{formatPrice(subtotal + shipping)}</dd>
					</div>
				</dl>
			</CardContent>
			<CardFooter>
				<Button className="w-full" disabled={count === 0}>
					Checkout
				</Button>
			</CardFooter>
		</Card>
	);
}
