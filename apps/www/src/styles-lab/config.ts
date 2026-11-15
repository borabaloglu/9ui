/**
 * Styles lab — prototype.
 *
 * A style has two layers:
 *  1. a recipe: the `skin-*` class definitions in ./styles/<id>.css
 *  2. tokens: the knobs that recipe exposes, described here
 *
 * The editor, the live preview and the exported CSS are all generated from
 * this one schema.
 */

export type StyleToken = {
	/** CSS custom property, without the leading `--`. */
	name: string;
	label: string;
	min: number;
	max: number;
	step: number;
	unit: "" | "px" | "rem";
	default: number;
};

export type StyleDefinition = {
	id: string;
	name: string;
	description: string;
	tokens: StyleToken[];
};

const controlHeight = (value: number): StyleToken => ({
	name: "control-height",
	label: "Control height",
	min: 1.75,
	max: 3.5,
	step: 0.125,
	unit: "rem",
	default: value,
});

const controlPadding = (value: number): StyleToken => ({
	name: "control-padding-x",
	label: "Control padding",
	min: 0.5,
	max: 2,
	step: 0.125,
	unit: "rem",
	default: value,
});

const surfacePadding = (value: number): StyleToken => ({
	name: "surface-padding",
	label: "Surface padding",
	min: 0.75,
	max: 2.5,
	step: 0.125,
	unit: "rem",
	default: value,
});

const radius = (value: number, max = 2.5): StyleToken => ({
	name: "radius",
	label: "Radius",
	min: 0,
	max,
	step: 0.125,
	unit: "rem",
	default: value,
});

const hue = (name: string, value: number): StyleToken => ({
	name,
	label: "Hue",
	min: 0,
	max: 360,
	step: 5,
	unit: "",
	default: value,
});

export const styles: StyleDefinition[] = [
	{
		id: "default",
		name: "Default",
		description: "The current 9ui look, moved into a skin unchanged.",
		tokens: [radius(0.625, 1.25)],
	},
	{
		id: "neumorphism",
		name: "Neumorphism",
		description: "One surface, depth from paired light and dark shadows.",
		tokens: [
			hue("neu-hue", 255),
			{
				name: "neu-distance",
				label: "Shadow distance",
				min: 2,
				max: 14,
				step: 1,
				unit: "px",
				default: 6,
			},
			{
				name: "neu-blur",
				label: "Shadow blur",
				min: 4,
				max: 36,
				step: 1,
				unit: "px",
				default: 14,
			},
			{
				name: "neu-intensity",
				label: "Intensity",
				min: 0.2,
				max: 1,
				step: 0.05,
				unit: "",
				default: 0.6,
			},
			radius(1),
			controlHeight(2.5),
			controlPadding(1.125),
			surfacePadding(1.5),
		],
	},
	{
		id: "claymorphism",
		name: "Claymorphism",
		description: "Puffy, saturated shapes with inner light and shade.",
		tokens: [
			hue("clay-hue", 285),
			{
				name: "clay-depth",
				label: "Depth",
				min: 2,
				max: 14,
				step: 1,
				unit: "px",
				default: 8,
			},
			radius(1.75),
			controlHeight(2.75),
			controlPadding(1.375),
			surfacePadding(1.5),
		],
	},
	{
		id: "retro-futurism",
		name: "Retro Futurism",
		description: "Chamfered panels, neon line work, monospace type.",
		tokens: [
			hue("retro-hue", 35),
			{
				name: "retro-chamfer",
				label: "Chamfer",
				min: 0,
				max: 20,
				step: 1,
				unit: "px",
				default: 10,
			},
			{
				name: "retro-glow",
				label: "Glow",
				min: 0,
				max: 16,
				step: 1,
				unit: "px",
				default: 0,
			},
			{
				name: "retro-border-width",
				label: "Line width",
				min: 1,
				max: 3,
				step: 0.5,
				unit: "px",
				default: 1.5,
			},
			controlHeight(2.25),
			controlPadding(1.125),
			surfacePadding(1.25),
		],
	},
];

export type StyleValues = Record<string, number>;

export const getDefaults = (style: StyleDefinition): StyleValues =>
	Object.fromEntries(style.tokens.map((token) => [token.name, token.default]));

/** Only the tokens the user changed — this is what a project would install. */
export const generateStyleCss = (
	style: StyleDefinition,
	values: StyleValues,
): string => {
	const overrides = style.tokens
		.filter((token) => values[token.name] !== token.default)
		.map((token) => `\t--${token.name}: ${values[token.name]}${token.unit};`);

	if (overrides.length === 0) {
		return "";
	}

	return `[data-style="${style.id}"] {\n${overrides.join("\n")}\n}`;
};
