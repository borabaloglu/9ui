/* eslint-disable */
// @ts-nocheck
/**
 * mdx-node-helpers.ts - Helper functions for creating MDX AST nodes
 * 
 * This module provides utility functions to create nodes for MDX/Markdown
 * abstract syntax trees, making transformer code more readable and maintainable.
 */

/**
 * Create a text node
 */
export function text(value: string) {
  return {
    type: 'text',
    value: value || '',
  }
}

/**
 * Helper to normalize children (handles string, node, or array)
 */
function normalizeChildren(children: any): any[] {
  if (!children) {
    return []
  }

  const childArray = Array.isArray(children) ? children : [children]
  return childArray.map((child) => (typeof child === 'string' ? text(child) : child))
}

/**
 * Create a paragraph node
 */
export function paragraph(children: any) {
  return {
    type: 'paragraph',
    children: normalizeChildren(children),
  }
}

/**
 * Create an emphasis (italic) node
 */
export function emphasis(children: any) {
  return {
    type: 'emphasis',
    children: normalizeChildren(children),
  }
}

/**
 * Create a strong (bold) node
 */
export function strong(children: any) {
  return {
    type: 'strong',
    children: normalizeChildren(children),
  }
}

/**
 * Create a heading node
 */
export function heading(depth: number, children: any) {
  return {
    type: 'heading',
    depth: depth || 1,
    children: normalizeChildren(children),
  }
}

/**
 * Create a code block node
 */
export function code(value: string, lang?: string) {
  return {
    type: 'code',
    lang: lang || null,
    value: value || '',
  }
}

/**
 * Create an inline code node
 */
export function inlineCode(value: string) {
  return {
    type: 'inlineCode',
    value: value || '',
  }
}

/**
 * Creates a table cell node
 */
function tableCell(content: any) {
  return {
    type: 'tableCell',
    children: normalizeChildren(content),
  }
}

/**
 * Creates a table row node
 */
function tableRow(cells: any[]) {
  return {
    type: 'tableRow',
    children: cells.map((cell) => tableCell(cell)),
  }
}

/**
 * Creates a markdown table node (GFM)
 */
export function table(headers: any[], rows: any[][], alignment: string[] | null = null) {
  // Convert alignment strings to AST format
  const align = headers.map((_, index) => {
    if (!alignment || !alignment[index]) {
      return null
    }

    switch (alignment[index]) {
      case 'center':
        return 'center'
      case 'right':
        return 'right'
      default:
        return 'left'
    }
  })

  // Create header row
  const headerRow = tableRow(headers)

  // Create data rows
  const dataRows = rows.map((row) => tableRow(row))

  // Return table node
  return {
    type: 'table',
    align,
    children: [headerRow, ...dataRows],
  }
}

/**
 * Create a link node
 */
export function link(url: string, children: any) {
  return {
    type: 'link',
    url,
    children: normalizeChildren(children),
  }
}

/**
 * Create a list node
 */
export function list(ordered: boolean, children: any[]) {
  return {
    type: 'list',
    ordered,
    children: children.map(item => ({
      type: 'listItem',
      children: normalizeChildren(item),
    })),
  }
}

/**
 * Function to extract all text from a node and its children recursively
 */
export function textContent(node: any): string {
  if (!node) {
    return ''
  }

  if (typeof node === 'string') {
    return node
  }

  if (node.type === 'text') {
    return node.value || ''
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children.map(textContent).join('')
  }

  return ''
}

/**
 * Create a paragraph with bold text
 * Handles simple **text** markdown syntax and converts to proper AST nodes
 */
export function boldParagraph(content: string) {
  // Simple regex to match **text** patterns
  const boldRegex = /\*\*(.*?)\*\*/g
  const children: any[] = []
  let lastIndex = 0
  let match

  while ((match = boldRegex.exec(content)) !== null) {
    // Add text before the bold part
    if (match.index > lastIndex) {
      const beforeText = content.slice(lastIndex, match.index)
      if (beforeText) {
        children.push(text(beforeText))
      }
    }
    
    // Add the bold part
    children.push(strong(match[1]))
    
    lastIndex = match.index + match[0].length
  }
  
  // Add remaining text after the last bold part
  if (lastIndex < content.length) {
    const remainingText = content.slice(lastIndex)
    if (remainingText) {
      children.push(text(remainingText))
    }
  }
  
  // If no bold text found, just return a simple paragraph
  if (children.length === 0) {
    children.push(text(content))
  }
  
  return {
    type: 'paragraph',
    children
  }
}