import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Ukol4PuvodniReseniPage() {
  const content = await readMarkdownFile("BPMN_navrh_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
