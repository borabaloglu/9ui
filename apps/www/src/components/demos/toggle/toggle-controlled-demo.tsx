"use client";

import { useState } from "react";
import { BluetoothIcon, BluetoothOffIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleControlledDemo() {
	const [enabled, setEnabled] = useState(false);

	return (
		<Toggle
			aria-label="Bluetooth"
			pressed={enabled}
			onPressedChange={setEnabled}
		>
			{enabled ? <BluetoothIcon /> : <BluetoothOffIcon />}
		</Toggle>
	);
}
