import { MarkdownBody } from "@/components/MarkdownBody";
import { readMarkdownFile } from "@/lib/readMarkdown";

export default async function Ukol3Page() {
  const content = await readMarkdownFile("BMM_DataVision.md");
  return (
    <article>
      <MarkdownBody content={content} />
    </article>
  );
}
