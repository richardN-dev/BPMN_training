import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function ZadaniPage() {
  const content = await readMarkdownFile("zadani.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
