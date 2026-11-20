"use client";

import { useState } from "react";
import { MessageSquareIcon, PhoneCallIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { PhoneInput } from "@/components/ui/phone-input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function TwoStepCard() {
	const [phone, setPhone] = useState<string>();
	const [method, setMethod] = useState("sms");

	return (
		<Card>
			<CardHeader>
				<CardTitle>Two-step verification</CardTitle>
				<CardDescription>Add a phone number as a second step.</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<Field name="phone">
					<FieldLabel>Phone number</FieldLabel>
					<PhoneInput
						defaultCountry="PT"
						placeholder="Enter a phone number"
						value={phone}
						onChange={setPhone}
					/>
					<FieldDescription>We only use it to sign you in.</FieldDescription>
				</Field>
				<ToggleGroup
					variant="outline"
					value={[method]}
					onValueChange={([value]) => value && setMethod(value)}
					aria-label="Delivery method"
					className="w-full"
				>
					<ToggleGroupItem value="sms" className="flex-1">
						<MessageSquareIcon />
						Text message
					</ToggleGroupItem>
					<ToggleGroupItem value="call" className="flex-1">
						<PhoneCallIcon />
						Phone call
					</ToggleGroupItem>
				</ToggleGroup>
				<Button disabled={!phone}>Send code</Button>
			</CardContent>
		</Card>
	);
}
