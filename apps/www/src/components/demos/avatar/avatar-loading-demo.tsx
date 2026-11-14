"use client";

import { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarLoadingDemo() {
	const [src, setSrc] = useState<string>();

	useEffect(() => {
		const timeout = setTimeout(() => setSrc("/avatars/p1.jpg"), 1000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<Avatar size="lg">
			<AvatarImage src={src} alt="Maya Chen" />
			<AvatarFallback>MC</AvatarFallback>
		</Avatar>
	);
}
