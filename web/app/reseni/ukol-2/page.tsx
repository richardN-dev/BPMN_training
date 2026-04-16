import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Ukol2Page() {
  const content = await readMarkdownFile("CPM_projekt_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
