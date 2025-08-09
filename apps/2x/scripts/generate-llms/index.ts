#!/usr/bin/env node
/* eslint-disable */
// @ts-nocheck
import fs from "fs/promises"
import path from "path"
import { glob } from "glob"
import * as prettier from "prettier"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkMdx from "remark-mdx"
import remarkGfm from "remark-gfm" 
import remarkStringify from "remark-stringify"
import { visit } from "unist-util-visit"
import * as mdx from "./mdx-node-helpers"
import {
  processComponentPreview,
  processComponentInstallation,
  processComponentSource,
  processComponentLinks,
  processComponentAnatomy,
  processInstallationTabs,
  processLinkCard,
  processCommandBlock,
  processSteps,
  processStep,
  processTabs,
  processAlert,
  processAccordion,
  processAccordionItem,
  processEnhancedPre,
  processThemeToggle,
  processIcons,
  extractTitle,
  extractDescription
} from "./component-processors"

interface ContentItem {
  title: string
  description: string
  slug: string
  filePath: string
  content: string
  section: string
}

/**
 * Plugin to extract metadata from the MDX content
 */
function extractMetadata() {
  return (tree: any, file: any) => {
    // Initialize metadata
    file.data.metadata = {
      title: '',
      description: '',
    }

    // Extract from custom components
    visit(tree, ['mdxJsxFlowElement', 'mdxJsxTextElement'], (node: any) => {
      if (node.name === 'Title') {
        file.data.metadata.title = extractTitle(node)
      } else if (node.name === 'Description') {
        file.data.metadata.description = extractDescription(node)
      }
    })

    // Fallback: extract title from first h1
    if (!file.data.metadata.title) {
      visit(tree, 'heading', (node: any) => {
        if (node.depth === 1 && !file.data.metadata.title) {
          file.data.metadata.title = mdx.textContent(node)
        }
      })
    }

    return tree
  }
}

/**
 * Plugin to transform JSX elements to markdown
 */
function transformJsx() {
  return (tree: any, file: any) => {
    visit(
      tree,
      ['mdxJsxFlowElement', 'mdxJsxTextElement', 'mdxjsEsm', 'mdxFlowExpression', 'mdxTextExpression'],
      (node: any, index: number, parent: any) => {
        // Handle enhanced pre elements with special attributes
        if (node.type === 'element' && node.tagName === 'pre') {
          const content = processEnhancedPre(node)
          parent.children.splice(index, 1, ...content)
          return index
        }

        // Handle MDX JSX elements
        switch (node.name) {
          // Core component processors
          case 'ComponentPreview': {
            const content = processComponentPreview(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'ComponentInstallation': {
            const content = processComponentInstallation(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'ComponentSource': {
            const content = processComponentSource(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'ComponentLinks': {
            const content = processComponentLinks(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'ComponentAnatomy': {
            const content = processComponentAnatomy(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          // Installation and navigation components
          case 'InstallationTabs': {
            const content = processInstallationTabs(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'LinkCard': {
            const content = processLinkCard(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          // Step components
          case 'Steps': {
            const content = processSteps(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'Step': {
            // Individual Step outside of Steps - convert to bold paragraph
            const stepText = mdx.textContent(node) || 'Step'
            parent.children.splice(index, 1, mdx.boldParagraph(`**${stepText}**`))
            return index
          }

          // Tab components
          case 'Tabs': {
            const content = processTabs(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'TabsContent':
          case 'TabsList':
          case 'TabsTrigger': {
            // These are handled by the parent Tabs component
            return undefined
          }

          // Alert components
          case 'Alert': {
            const content = processAlert(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'AlertTitle':
          case 'AlertDescription': {
            // These are handled by the parent Alert component
            return undefined
          }

          // Accordion components
          case 'Accordion': {
            const content = processAccordion(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'AccordionItem': {
            const content = processAccordionItem(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'AccordionTrigger':
          case 'AccordionContent': {
            // These are handled by AccordionItem processor
            return undefined
          }

          // Utility components
          case 'ThemeToggle': {
            const content = processThemeToggle(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'Icons': {
            const content = processIcons(node)
            parent.children.splice(index, 1, ...content)
            return index
          }

          case 'AlertTriangleIcon': {
            parent.children.splice(index, 1, mdx.text('⚠️'))
            return index
          }

          // Metadata components
          case 'Title':
          case 'Description': {
            // Remove these components (metadata already extracted)
            parent.children.splice(index, 1)
            return index
          }

          // Separator
          case 'Separator': {
            parent.children.splice(index, 1, {
              type: 'thematicBreak'
            })
            return index
          }

          // Remove import statements and other MDX-specific elements
          case undefined: {
            if (node.type === 'mdxjsEsm') {
              parent.children.splice(index, 1)
              return index
            }
            break
          }

          // Handle standard HTML elements enhanced by MDX
          case 'h1':
          case 'h2': 
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6': {
            // Convert to standard headings
            const depth = parseInt(node.name.substring(1))
            parent.children.splice(index, 1, mdx.heading(depth, node.children || []))
            return index
          }

          case 'p': {
            // Convert to standard paragraph
            parent.children.splice(index, 1, mdx.paragraph(node.children || []))
            return index
          }

          case 'ul': {
            // Convert to unordered list
            parent.children.splice(index, 1, mdx.list(false, node.children || []))
            return index
          }

          case 'ol': {
            // Convert to ordered list
            parent.children.splice(index, 1, mdx.list(true, node.children || []))
            return index
          }

          case 'code': {
            // Handle inline vs block code
            const isInline = node.attributes?.find((attr: any) => attr.name === 'data-inline')
            if (isInline) {
              parent.children.splice(index, 1, mdx.inlineCode(mdx.textContent(node)))
            } else {
              parent.children.splice(index, 1, node)
            }
            return index
          }

          case 'a': {
            // Convert to standard link
            const hrefAttr = node.attributes?.find((attr: any) => attr.name === 'href')
            const href = hrefAttr?.value || '#'
            parent.children.splice(index, 1, mdx.link(href, node.children || []))
            return index
          }

          case 'img': {
            // Keep images as-is but ensure they work in markdown
            return undefined
          }

          case 'strong': {
            // Convert to bold
            parent.children.splice(index, 1, mdx.strong(node.children || []))
            return index
          }

          case 'blockquote': {
            // Keep blockquotes as-is
            return undefined
          }

          case 'table':
          case 'thead':
          case 'tbody':
          case 'tr':
          case 'th':
          case 'td': {
            // Keep table elements as-is
            return undefined
          }

          default: {
            // For unknown components, try to preserve content or remove
            if (node.children && node.children.length > 0) {
              parent.children.splice(index, 1, ...node.children)
            } else {
              parent.children.splice(index, 1)
            }
            return index
          }
        }
      }
    )

    return tree
  }
}

/**
 * Convert MDX content to markdown using unified pipeline
 */
async function mdxToMarkdown(mdxContent: string, mdxFilePath: string) {
  const vfile = {
    path: mdxFilePath,
    value: mdxContent,
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkMdx)
    .use(remarkGfm)
    .use(extractMetadata)
    .use(transformJsx)
    .use(remarkStringify, {
      bullet: '-',
      emphasis: '*',
      strong: '*',
      fence: '`',
      fences: true,
      listItemIndent: 'one',
      rule: '-',
    })
    .process(vfile)

  const markdown = String(file)
  const { title = '', description = '' } = file.data.metadata || {}

  return {
    markdown,
    title,
    description,
  }
}

function getSlugFromFilePath(filePath: string): string {
  const relativePath = path.relative(path.join(process.cwd(), "src/content"), filePath)
  return relativePath.replace(/\.mdx?$/, "").replace(/\\/g, "/")
}

function getSection(filePath: string): string {
  const relativePath = path.relative(path.join(process.cwd(), "src/content"), filePath)
  const parts = relativePath.split(path.sep)
  
  if (parts[0] === "getting-started") {
    return "Getting Started"
  } else if (parts[0] === "components") {
    return "Components"
  }
  return "Other"
}

async function generateLlmsFiles() {
  console.log('Generating LLM documentation files...')

  const contentDir = path.join(process.cwd(), "src/content")
  const publicDir = path.join(process.cwd(), "public")
  const docsDir = path.join(publicDir, "docs")

  // Ensure directories exist
  await fs.mkdir(publicDir, { recursive: true })
  await fs.mkdir(docsDir, { recursive: true })

  // Get all MDX files
  const mdxFiles = await glob("**/*.mdx", { cwd: contentDir })
  const contentItems: ContentItem[] = []

  // Process each MDX file
  for (const file of mdxFiles) {
    const filePath = path.join(contentDir, file)
    const rawContent = await fs.readFile(filePath, "utf-8")
    
    try {
      const { markdown, title, description } = await mdxToMarkdown(rawContent, filePath)
      
      const item: ContentItem = {
        title: title || path.basename(file, ".mdx"),
        description,
        slug: getSlugFromFilePath(filePath),
        filePath: file,
        content: markdown,
        section: getSection(filePath)
      }
      
      contentItems.push(item)
      
      // Create individual .md file
      const mdFilePath = path.join(docsDir, `${item.slug}.md`)
      const mdFileDir = path.dirname(mdFilePath)
      
      // Ensure directory exists for nested files
      await fs.mkdir(mdFileDir, { recursive: true })
      
      // Create markdown file with frontmatter and content
      const frontmatter = [
        '---',
        `title: ${item.title}`,
        item.description ? `description: ${item.description}` : null,
        '---',
      ].filter(Boolean).join('\n')
      
      let mdFileContent = [
        frontmatter,
        '',
        `# ${item.title}`,
        '',
        item.description ? `${item.description}\n` : '',
        item.content
      ].join('\n')

      // Format with Prettier
      try {
        const prettierOptions = await prettier.resolveConfig(mdFilePath)
        mdFileContent = await prettier.format(mdFileContent, {
          ...prettierOptions,
          filepath: mdFilePath,
          parser: 'markdown',
        })
      } catch (prettierError) {
        console.warn(`Warning: Could not format ${mdFilePath} with Prettier:`, prettierError)
      }
      
      await fs.writeFile(mdFilePath, mdFileContent)
      
      console.log(`Processed: ${filePath}`)
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error)
      // Continue with other files
    }
  }

  // Sort content items
  const sortedItems = contentItems.sort((a, b) => {
    if (a.section !== b.section) {
      if (a.section === "Getting Started") return -1
      if (b.section === "Getting Started") return 1
      if (a.section === "Components") return -1
      if (b.section === "Components") return 1
    }
    return a.title.localeCompare(b.title)
  })

  // Generate llms.txt (with links to .md files)
  let llmsTxt = "# 9UI Documentation\n\n"
  llmsTxt += "Beautiful, customizable components built with Base UI and Tailwind CSS.\n\n"
  llmsTxt += "This is a curated set of components that you can customize to fit your style. You won't install it through npm - instead, you simply select the components you need and add them directly to your project.\n\n"

  let currentSection = ""
  for (const item of sortedItems) {
    if (item.section !== currentSection) {
      llmsTxt += `\n## ${item.section}\n\n`
      currentSection = item.section
    }

    llmsTxt += `- [${item.title}](https://9ui.dev/docs/${item.slug}.md)`
    if (item.description) {
      llmsTxt += `: ${item.description}`
    }
    llmsTxt += "\n"
  }

  // Generate llms-full.txt (with full content)
  let llmsFullTxt = "# 9UI Documentation\n\n"
  llmsFullTxt += "Beautiful, customizable components built with Base UI and Tailwind CSS.\n\n"
  llmsFullTxt += "This is a curated set of components that you can customize to fit your style. You won't install it through npm - instead, you simply select the components you need and add them directly to your project.\n\n"

  currentSection = ""
  for (const item of sortedItems) {
    if (item.section !== currentSection) {
      llmsFullTxt += `\n## ${item.section}\n\n`
      currentSection = item.section
    }

    llmsFullTxt += `### ${item.title}\n\n`
    if (item.description) {
      llmsFullTxt += `${item.description}\n\n`
    }
    llmsFullTxt += `${item.content}\n\n`
    llmsFullTxt += "---\n\n"
  }

  // Format and write files
  try {
    const llmsTxtPath = path.join(publicDir, "llms.txt")
    const llmsFullTxtPath = path.join(publicDir, "llms-full.txt")
    
    // Format llms.txt
    const prettierOptionsLlms = await prettier.resolveConfig(llmsTxtPath)
    const formattedLlmsTxt = await prettier.format(llmsTxt, {
      ...prettierOptionsLlms,
      filepath: llmsTxtPath,
      parser: 'markdown',
    })
    
    // Format llms-full.txt
    const prettierOptionsLlmsFull = await prettier.resolveConfig(llmsFullTxtPath)
    const formattedLlmsFullTxt = await prettier.format(llmsFullTxt, {
      ...prettierOptionsLlmsFull,
      filepath: llmsFullTxtPath,
      parser: 'markdown',
    })
    
    await fs.writeFile(llmsTxtPath, formattedLlmsTxt)
    await fs.writeFile(llmsFullTxtPath, formattedLlmsFullTxt)
  } catch (prettierError) {
    console.warn('Warning: Could not format output files with Prettier:', prettierError)
    // Write unformatted files as fallback
    await fs.writeFile(path.join(publicDir, "llms.txt"), llmsTxt)
    await fs.writeFile(path.join(publicDir, "llms-full.txt"), llmsFullTxt)
  }

  console.log(`Generated ${contentItems.length} individual .md files in public/docs/`)
  console.log(`Generated llms.txt with ${contentItems.length} items`)
  console.log(`Generated llms-full.txt with full content`)
  console.log(`Files saved to public/llms.txt and public/llms-full.txt`)
}

generateLlmsFiles().catch(console.error)