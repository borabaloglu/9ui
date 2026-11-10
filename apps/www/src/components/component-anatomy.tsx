import { CodeBlock } from "@/components/code-block";

interface ComponentAnatomyProps {
	content: string;
}

export const ComponentAnatomy = ({ content }: ComponentAnatomyProps) => {
	return <CodeBlock content={content} topBar={{ label: "Anatomy" }} />;
};
