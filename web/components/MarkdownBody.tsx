import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ""}
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
