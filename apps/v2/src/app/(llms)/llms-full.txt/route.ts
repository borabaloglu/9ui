import * as fs from 'node:fs/promises';
import fg from 'fast-glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import remarkMdx from 'remark-mdx';

export const revalidate = false;

export async function GET() {
  const files = await fg(['src/content/**/*.mdx']);

  // Dosyaları grupla ve sırala
  const groupedFiles = files.reduce((acc, file) => {
    if (file.includes('getting-started')) {
      acc.gettingStarted.push(file);
    } else if (file.includes('components')) {
      acc.components.push(file);
    }
    return acc;
  }, { gettingStarted: [], components: [] } as Record<string, string[]>);

  // Her grubu alfabetik sırala
  groupedFiles.gettingStarted.sort();
  groupedFiles.components.sort();

  // Sıralı dosyaları birleştir
  const sortedFiles = [...groupedFiles.gettingStarted, ...groupedFiles.components];

  const scan = sortedFiles.map(async (file) => {
    const fileContent = await fs.readFile(file);
    const { content, data } = matter(fileContent.toString());

    // ComponentPreview tag'lerini bul ve değiştir
    const processedContent = await replaceComponentPreviews(content);

    const processed = await processContent(processedContent);
    return `file: ${file}
meta: ${JSON.stringify(data, null, 2)}

${processed}`;
  });

  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'));
}

async function replaceComponentPreviews(content: string): Promise<string> {
  // ComponentPreview tag'lerini bul
  const previewRegex = /<ComponentPreview\s+name="([^"]+)"\s*\/>/g;

  let processedContent = content;
  let match;

  while ((match = previewRegex.exec(content)) !== null) {
    const [fullMatch, demoName] = match;

    try {
      // Demo kaynak kodunu bul ve oku
      const demoFiles = await fg([`src/components/demos/**/${demoName}.tsx`]);

      if (demoFiles.length > 0) {
        const sourceCode = await fs.readFile(demoFiles[0], 'utf-8');

        // ComponentPreview tag'ini kaynak kodla değiştir
        processedContent = processedContent.replace(
          fullMatch,
          `\`\`\`tsx
${sourceCode}
\`\`\``
        );
      } else {
        throw new Error(`Demo file not found: ${demoName}`);
      }
    } catch (error) {
      console.error(`Error reading demo file for ${demoName}:`, error);
      // Hata durumunda orijinal tag'i bırak
      processedContent = processedContent.replace(
        fullMatch,
        `\`\`\`tsx
// Error: Could not read demo file for ${demoName}
\`\`\``
      );
    }
  }

  return processedContent;
}

async function processContent(content: string): Promise<string> {
  const file = await remark()
    .use(remarkMdx)
    .use(remarkGfm)
    .use(remarkStringify)
    .process(content);

  return String(file);
}
