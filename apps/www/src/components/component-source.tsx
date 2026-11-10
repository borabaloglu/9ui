import { CodeBar, CodeFrame } from "@/components/code-bar";
import { CodeCollapsible } from "@/components/code-collapsible";

import { getComponentSource } from "@/lib/demos";
import { highlightCode } from "@/lib/highlight-code";

interface ComponentSourceProps {
	name: string;
}

export const ComponentSource = ({ name }: ComponentSourceProps) => {
	const source = getComponentSource(name);

	if (!source) {
		return null;
	}

	return (
		<CodeFrame>
			<CodeBar label={`${name}.tsx`} content={source} type="component" />
			<CodeCollapsible>
				<div dangerouslySetInnerHTML={{ __html: highlightCode(source) }} />
			</CodeCollapsible>
		</CodeFrame>
	);
};
