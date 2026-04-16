import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Proces4VytvoreniReportuPage() {
  const content = await readMarkdownFile("BPMN_proces4_vytvoreni_reportu_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
