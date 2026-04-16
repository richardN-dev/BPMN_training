import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Proces3ReseniPozadavkuPage() {
  const content = await readMarkdownFile("BPMN_proces3_reseni_pozadavku_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
