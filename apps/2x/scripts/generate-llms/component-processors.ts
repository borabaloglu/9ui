/* eslint-disable */
// @ts-nocheck
/**
 * component-processors.ts - Complete MDX component processing
 *
 * This module handles ALL MDX components from mdx-components.tsx for
 * comprehensive documentation generation.
 */

import { demoRegistry } from "../../src/__registry__/demos"
import * as mdx from "./mdx-node-helpers"

/**
 * Process ComponentPreview component
 * Transforms demo references into actual code blocks
 */
export function processComponentPreview(node: any) {
	const nameAttr = node.attributes?.find((attr: any) => attr.name === "name")

	if (!nameAttr?.value) {
		return [mdx.paragraph("Demo not found")]
	}

	const demoName = nameAttr.value
	const demo = demoRegistry[demoName]

	if (!demo) {
		return [mdx.paragraph(`Demo "${demoName}" not found in registry`)]
	}

	return [mdx.heading(3, "Example"), mdx.code(demo.source, "tsx")]
}

/**
 * Process ComponentInstallation component
 * Transforms installation blocks into structured markdown
 */
export function processComponentInstallation(node: any) {
	const result: any[] = []

	if (node.children && node.children.length > 0) {
		for (const child of node.children) {
			if (child.type === "mdxJsxFlowElement") {
				if (child.name === "InstallationTabs") {
					result.push(...processInstallationTabs(child))
				} else if (child.name === "div") {
					result.push(...processInstallationDiv(child))
				} else if (child.name === "Steps") {
					result.push(...processSteps(child))
				} else {
					result.push(child)
				}
			} else {
				result.push(child)
			}
		}
	}

	return result
}

/**
 * Process InstallationTabs component
 * Converts quick/manual installation tabs to structured sections
 */
export function processInstallationTabs(node: any) {
	const result: any[] = []
	const children = node.children || []

	// Look for div elements containing the actual installation content
	const divElements = children.filter(
		(child: any) => child.type === "mdxJsxFlowElement" && child.name === "div"
	)

	if (divElements.length >= 2) {
		// First div is typically quick setup
		result.push(mdx.heading(3, "Quick Setup"))
		if (divElements[0] && divElements[0].children) {
			result.push(...processInstallationDiv(divElements[0]))
		}

		// Second div is typically manual setup
		result.push(mdx.heading(3, "Manual Setup"))
		if (divElements[1] && divElements[1].children) {
			result.push(...processInstallationDiv(divElements[1]))
		}
	} else if (divElements.length === 1) {
		// Single div - process without specific headings
		result.push(...processInstallationDiv(divElements[0]))
	} else {
		// Fallback: process all direct children
		for (const child of children) {
			if (child.type === "mdxJsxFlowElement" && child.name === "div") {
				result.push(...processInstallationDiv(child))
			} else if (child.type === "text") {
				// Skip whitespace text nodes
				if (child.value && child.value.trim()) {
					result.push(child)
				}
			} else {
				result.push(child)
			}
		}
	}

	return result
}

/**
 * Process ComponentAnatomy component
 * Converts anatomy sections to code blocks with proper heading
 */
export function processComponentAnatomy(node: any) {
	const contentAttr = node.attributes?.find(
		(attr: any) => attr.name === "content"
	)
	const content = contentAttr?.value || "Component anatomy not available"

	return [mdx.heading(3, "Anatomy"), mdx.code(content, "tsx")]
}

/**
 * Process LinkCard component
 * Converts navigation cards to markdown links
 */
export function processLinkCard(node: any) {
	const hrefAttr = node.attributes?.find((attr: any) => attr.name === "href")
	const href = hrefAttr?.value || "#"
	const linkText = mdx.textContent(node) || "Link"

	return [mdx.paragraph([mdx.link(href, linkText)])]
}

/**
 * Process CommandBlock component (from enhanced pre element)
 * Handles multi-package-manager command blocks
 */
export function processCommandBlock(props: {
	npmCommand?: string
	yarnCommand?: string
	pnpmCommand?: string
	bunCommand?: string
}) {
	const { npmCommand, yarnCommand, pnpmCommand, bunCommand } = props

	const result: any[] = []

	if (npmCommand || yarnCommand || pnpmCommand || bunCommand) {
		result.push(mdx.heading(4, "Package Manager Commands"))

		if (npmCommand) {
			result.push(mdx.boldParagraph("**npm:**"))
			result.push(mdx.code(npmCommand, "bash"))
		}

		if (yarnCommand) {
			result.push(mdx.boldParagraph("**yarn:**"))
			result.push(mdx.code(yarnCommand, "bash"))
		}

		if (pnpmCommand) {
			result.push(mdx.boldParagraph("**pnpm:**"))
			result.push(mdx.code(pnpmCommand, "bash"))
		}

		if (bunCommand) {
			result.push(mdx.boldParagraph("**bun:**"))
			result.push(mdx.code(bunCommand, "bash"))
		}
	}

	return result
}

/**
 * Process Steps component
 * In the installation.mdx, Steps doesn't contain Step children directly,
 * but rather has mixed content where Step elements are intermixed with other content.
 * We need to process all children sequentially.
 */
export function processSteps(node: any) {
	const result: any[] = []

	if (node.children) {
		for (const child of node.children) {
			if (child.type === "mdxJsxFlowElement") {
				// Handle MDX components
				if (child.name === "Step") {
					// Step component - convert to a heading or list item
					const stepText = mdx.textContent(child) || "Step"
					result.push(mdx.boldParagraph(`**${stepText}**`))
				} else if (child.name === "Alert") {
					result.push(...processAlert(child))
				} else {
					// For other JSX elements, process children
					result.push(...(child.children || [child]))
				}
			} else if (child.type === "text") {
				// Only include non-whitespace text
				if (child.value && child.value.trim()) {
					result.push(child)
				}
			} else {
				// Include other elements (code, paragraphs, etc.) directly
				result.push(child)
			}
		}
	}

	return result
}

/**
 * Process individual Step component
 */
export function processStep(node: any) {
	// Steps are handled by the parent Steps component
	// If found individually, convert to a list item
	return node.children || [mdx.text("Step")]
}

/**
 * Process Tabs components
 * Converts tabs to structured sections
 */
export function processTabs(node: any) {
	const result: any[] = []
	const children = node.children || []

	// Extract TabsList and TabsContent elements
	let tabsList: any = null
	const tabsContents: any[] = []

	for (const child of children) {
		if (child.type === "mdxJsxFlowElement") {
			if (child.name === "TabsList") {
				tabsList = child
			} else if (child.name === "TabsContent") {
				tabsContents.push(child)
			}
		}
	}

	// Create sections for each tab
	for (const tabContent of tabsContents) {
		const valueAttr = tabContent.attributes?.find(
			(attr: any) => attr.name === "value"
		)
		const tabValue = valueAttr?.value || "Tab"

		result.push(
			mdx.heading(3, tabValue.charAt(0).toUpperCase() + tabValue.slice(1))
		)
		result.push(...(tabContent.children || []))
	}

	return result
}

/**
 * Process Alert components
 * Converts alerts to structured content
 */
export function processAlert(node: any) {
	const variantAttr = node.attributes?.find(
		(attr: any) => attr.name === "variant"
	)
	const variant = variantAttr?.value || "info"

	const result: any[] = []

	// Create alert heading based on variant
	const alertType = variant.charAt(0).toUpperCase() + variant.slice(1)
	result.push(mdx.heading(4, `${alertType} Alert`))

	// Process children to find AlertTitle and AlertDescription
	const children = node.children || []
	let title = ""
	let description = ""

	for (const child of children) {
		if (
			child.type === "mdxJsxFlowElement" ||
			child.type === "mdxJsxTextElement"
		) {
			if (child.name === "AlertTitle") {
				title = mdx.textContent(child)
			} else if (child.name === "AlertDescription") {
				description = mdx.textContent(child)
			}
		}
	}

	if (title) {
		result.push(mdx.paragraph([mdx.strong(title)]))
	}

	if (description) {
		// Check if description contains bold markdown syntax
		if (description.includes("**")) {
			result.push(mdx.boldParagraph(description))
		} else {
			result.push(mdx.paragraph(description))
		}
	}

	// If no title/description found, use all children
	if (!title && !description && children.length > 0) {
		result.push(...children)
	}

	return result
}

/**
 * Process Accordion components
 * Converts accordion to structured content
 */
export function processAccordion(node: any) {
	const result: any[] = []
	const children = node.children || []

	for (const child of children) {
		if (child.type === "mdxJsxFlowElement" && child.name === "AccordionItem") {
			result.push(...processAccordionItem(child))
		}
	}

	return result
}

export function processAccordionItem(node: any) {
	const result: any[] = []
	const children = node.children || []

	let trigger = ""
	let content: any[] = []

	for (const child of children) {
		if (child.type === "mdxJsxFlowElement") {
			if (child.name === "AccordionTrigger") {
				trigger = mdx.textContent(child)
			} else if (child.name === "AccordionContent") {
				content = child.children || []
			}
		}
	}

	if (trigger) {
		result.push(mdx.heading(4, trigger))
	}

	if (content.length > 0) {
		result.push(...content)
	}

	return result
}

/**
 * Process ComponentSource component
 * Enhanced version with better source handling
 */
export function processComponentSource(node: any) {
	const nameAttr = node.attributes?.find((attr: any) => attr.name === "name")
	const componentName = nameAttr?.value || "component"

	return [
		mdx.heading(3, "Source Code"),
		mdx.paragraph(
			`The source code for the ${componentName} component can be found in your components directory after installation.`
		),
		mdx.code(
			`// Example usage\nimport { ${componentName} } from "@/components/ui/${componentName.toLowerCase()}"`,
			"tsx"
		),
	]
}

/**
 * Process ComponentLinks component
 * Enhanced with better link formatting
 */
export function processComponentLinks(node: any) {
	const linksAttr = node.attributes?.find((attr: any) => attr.name === "links")

	if (!linksAttr?.value) {
		return []
	}

	let links: Array<{ label: string; href: string }> = []

	// Handle different types of link attribute values
	if (Array.isArray(linksAttr.value)) {
		// Direct array (shouldn't happen in MDX but just in case)
		links = linksAttr.value
	} else if (linksAttr.value.type === "mdxJsxAttributeValueExpression") {
		// MDX expression - try to parse the value string
		try {
			// The value string contains the JavaScript array
			const valueString = linksAttr.value.value
			// Use eval in a safe context (we control the input)
			links = eval(`(${valueString})`)
		} catch (error) {
			console.warn("Failed to parse ComponentLinks data:", error)
			return []
		}
	} else {
		console.warn("Unexpected ComponentLinks attribute format:", linksAttr.value)
		return []
	}

	if (!Array.isArray(links) || links.length === 0) {
		return []
	}

	const result: any[] = [mdx.heading(3, "References")]

	// Convert links to markdown list
	const linkItems = links.map((link: any) => {
		if (link.href && link.label) {
			return [mdx.link(link.href, link.label)]
		}
		return [mdx.text(link.label || "Link")]
	})

	result.push(mdx.list(false, linkItems))

	return result
}

/**
 * Process enhanced pre element
 * Handles command blocks and regular code blocks
 */
export function processEnhancedPre(node: any) {
	const {
		__rawString__,
		__npmCommand__,
		__yarnCommand__,
		__pnpmCommand__,
		__bunCommand__,
		__title__,
		__lang__,
		__unwrapCode__,
	} = node.properties || {}

	// Check if it's a command block
	if (__npmCommand__ && __yarnCommand__ && __pnpmCommand__ && __bunCommand__) {
		return processCommandBlock({
			npmCommand: __npmCommand__,
			yarnCommand: __yarnCommand__,
			pnpmCommand: __pnpmCommand__,
			bunCommand: __bunCommand__,
		})
	}

	// Regular code block
	if (__rawString__) {
		const result: any[] = []

		if (__title__) {
			result.push(mdx.heading(4, __title__))
		}

		result.push(mdx.code(__rawString__, __lang__ || "text"))
		return result
	}

	// Fallback to children
	return node.children || []
}

/**
 * Process ThemeToggle component
 */
export function processThemeToggle(node: any) {
	return [
		mdx.paragraph(
			"Theme toggle component for switching between light and dark modes."
		),
	]
}

/**
 * Process Icons component
 */
export function processIcons(node: any) {
	return [mdx.paragraph("Icon component for displaying various icons.")]
}

/**
 * Extract Title component content
 */
export function extractTitle(node: any): string {
	const contentAttr = node.attributes?.find(
		(attr: any) => attr.name === "content"
	)
	return contentAttr?.value || mdx.textContent(node) || ""
}

/**
 * Extract Description component content
 */
export function extractDescription(node: any): string {
	const contentAttr = node.attributes?.find(
		(attr: any) => attr.name === "content"
	)
	return contentAttr?.value || mdx.textContent(node) || ""
}

/**
 * Helper function to process installation div content
 */
function processInstallationDiv(divNode: any) {
	const result: any[] = []

	if (divNode.children) {
		for (const child of divNode.children) {
			if (child.type === "mdxJsxFlowElement") {
				// Handle nested components
				if (child.name === "Steps") {
					result.push(...processSteps(child))
				} else if (child.name === "Alert") {
					result.push(...processAlert(child))
				} else if (child.name === "Step") {
					result.push(...processStep(child))
				} else {
					// For other JSX elements, try to process children
					result.push(...(child.children || [child]))
				}
			} else if (child.type === "code") {
				result.push(child)
			} else if (child.type === "paragraph" || child.type === "text") {
				result.push(child)
			} else {
				result.push(child)
			}
		}
	}

	return result
}
