const setup = `Set up 9ui in this project. It needs React 19 and Tailwind CSS 4.2 or later. If either is missing, stop and ask me.

1. Install the 9ui theme. It replaces the colors, fonts and radius in the global CSS file, so if the project already has its own theme, for example from shadcn/ui, tell me first and wait for my OK.
   If components.json exists, run: npx shadcn@latest add https://9ui.dev/r/init.json --yes
   It asks whether to overwrite lib/utils.ts even with --yes: answer no, piping the answer in if you cannot type it. Then check that the global CSS file changed.
   If components.json doesn't exist, run: npx shadcn@latest init https://9ui.dev/r/init.json
2. In components.json, add "@9ui": "https://9ui.dev/r/{name}.json" to "registries". Keep every entry that is already there.
3. Add a "9ui" section to AGENTS.md, creating the file if needed and staying outside any generated block: before using or changing a 9ui component, read https://www.9ui.dev/llms.txt and the component's page linked from it.
4. Ask me whether to install the 9ui skills. If yes, follow https://www.9ui.dev/docs/getting-started/skills.md`;

const firstComponent =
	"Add the 9ui Alert Dialog and Button with: npx shadcn@latest add @9ui/alert-dialog @9ui/button. If a file already exists, ask me before overwriting it. Then build a delete confirmation with them and show it on the home page.";

export const prompts = {
	setup,
	"first-component": firstComponent,
} as const;

export type PromptName = keyof typeof prompts;

export function getPrompt({
	name,
	text,
}: {
	name?: PromptName;
	text?: string;
}) {
	const value = name ? prompts[name] : text;

	if (!value) {
		throw new Error("<Prompt> needs a known `name` or a `text`");
	}

	return value;
}
