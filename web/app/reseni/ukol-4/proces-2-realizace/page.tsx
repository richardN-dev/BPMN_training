import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Proces2RealizacePage() {
  const content = await readMarkdownFile("BPMN_proces2_realizace_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
