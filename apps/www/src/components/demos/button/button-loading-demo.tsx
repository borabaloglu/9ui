"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function ButtonLoadingDemo() {
	const [loading, setLoading] = useState(false);

	const handleClick = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<Button loading={loading} onClick={handleClick}>
			Save changes
		</Button>
	);
}
