import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const GitHubLink = () => (
	<Button
		variant="ghost"
		size="icon"
		render={
			<Link
				href="https://github.com/borabaloglu/9ui"
				target="_blank"
				rel="noreferrer"
			>
				<Icons.gitHub />
				<span className="sr-only">GitHub</span>
			</Link>
		}
		nativeButton={false}
	/>
);
