"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function ButtonLoadingCustomDemo() {
	const [loading, setLoading] = useState(false);

	const handleClick = () => {
		setLoading(true);
		setTimeout(() => setLoading(false), 2000);
	};

	return (
		<Button disabled={loading} onClick={handleClick}>
			{loading ? (
				<>
					<Spinner aria-hidden />
					Saving
				</>
			) : (
				"Save changes"
			)}
		</Button>
	);
}
