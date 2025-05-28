import { type LazyExoticComponent } from "react"

export interface Demo {
	/** Raw source code of the demo component */
	source: string
	/** Lazily loaded demo component */
	component: LazyExoticComponent<() => JSX.Element>
	/** Display title of the demo */
	title: string
	/** Category of the demo (e.g., 'components', 'hooks') */
	category: string
	/** Relative path to the demo file */
	path: string
}

export type DemoRegistry = Record<string, Demo>
