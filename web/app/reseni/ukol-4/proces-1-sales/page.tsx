import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Proces1SalesPage() {
  const content = await readMarkdownFile("BPMN_proces1_sales_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
