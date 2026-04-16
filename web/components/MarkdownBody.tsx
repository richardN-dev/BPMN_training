import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ZoomableImage } from "@/components/ZoomableImage";

type Props = {
  content: string;
};

export function MarkdownBody({ content }: Props) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-a:text-sky-700 prose-img:rounded-lg prose-img:border prose-img:border-slate-200">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => (
            <ZoomableImage
              src={typeof src === "string" ? src : undefined}
              alt={alt ?? undefined}
              className="max-w-full h-auto rounded-lg border border-slate-200 bg-white"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
