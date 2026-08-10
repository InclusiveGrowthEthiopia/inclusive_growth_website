"use client";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as CodeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { CopyToClipboard } from "@/components/common/copy-to-clipboard";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  content: string;
}

function filterCharsOnly(input: string) {
  // Extract part before parentheses
  const nameOnly = input.split("(")[0].trim();

  // Keep only alphabetic characters and spaces
  return nameOnly.replace(/[^a-zA-Z\s]/g, "");
}

export const MarkdownPreview = ({ content }: Props) => {
  return (
    <div id="preview-content" className="bg-transparent pt-0">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => {
            const id = filterCharsOnly(
              children?.toString().toLowerCase().replace(/\s+/g, "_") ?? ""
            );
            return (
              <h1
                id={id}
                className="font-heading text-foreground scroll-m-0 scroll-mt-20 py-6 text-3xl font-semibold tracking-tight md:text-4xl"
              >
                {children}
              </h1>
            );
          },

          h2: ({ children }) => {
            const id = filterCharsOnly(
              children?.toString().toLowerCase().replace(/\s+/g, "_") ?? ""
            );
            return (
              <h2
                id={id}
                className="font-heading text-foreground scroll-mt-20 py-4 text-2xl font-semibold tracking-tight md:text-3xl"
              >
                {children}
              </h2>
            );
          },
          h3: ({ children }) => (
            <h3 className="font-heading text-foreground py-3 text-xl font-semibold tracking-tight md:text-2xl">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-heading text-foreground mt-4 text-lg font-medium tracking-tight">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="text-foreground/80 py-4 text-base leading-loose lg:text-lg">
              {children}
            </p>
          ),
          a: ({ children, href }) => (
            <Link
              href={href || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground text-base underline-offset-4 hover:underline lg:text-lg"
            >
              {children}
            </Link>
          ),
          code({ className, children }) {
            const match = /language-(\w+)/.exec(className || "");

            return match ? (
              <div className="relative">
                <div className="absolute right-0 flex w-full items-center justify-between rounded-sm rounded-b-none bg-white/50 px-2 py-1 text-xs text-white">
                  <CopyToClipboard
                    value={String(children)}
                    iconOnly={false}
                    className=""
                  />
                  {match[1]}
                </div>

                <SyntaxHighlighter
                  wrapLines
                  wrapLongLines
                  style={CodeTheme}
                  language={match[1]}
                  PreTag={"div"}
                  customStyle={{
                    margin: "16px 0",
                    borderRadius: "6px",
                    padding: "36px 16px 16px 16px",
                    overflowX: "auto",
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word"
                  }}
                  codeTagProps={{
                    style: {
                      whiteSpace: "pre-wrap",
                      wordBreak: "break-word"
                    }
                  }}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-primary/10 text-foreground rounded px-1.5 py-0.5 text-sm">
                {children}
              </code>
            );
          },
          ul: ({ children }) => (
            <ul className="ml-6 list-disc space-y-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-6 list-decimal space-y-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-foreground/80 text-left text-base leading-loose lg:text-lg">
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="bg-primary/5 border-accent my-4 flex w-fit flex-col items-start rounded-r-xs border-l-4 p-4 text-lg font-semibold">
              <QuoteIcon className="fill-accent text-accent h-8 w-8 rotate-180" />
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-muted-foreground/20 my-4 border-t" />,
          table: ({ children }) => (
            <table className="border-primary/10 mt-4 w-full border-collapse border">
              {children}
            </table>
          ),
          thead: ({ children }) => (
            <thead className="bg-primary/10 border-primary/20 border-b">
              {children}
            </thead>
          ),
          tbody: ({ children }) => <tbody>{children}</tbody>,
          tr: ({ children }) => (
            <tr className="border-primary/20 border-b">{children}</tr>
          ),
          th: ({ children }) => (
            <th className="border-primary/20 bg-primary/10 text-foreground/80 border px-4 py-2 text-left text-sm font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-primary/20 text-foreground/80 border px-4 py-2 text-base lg:text-lg">
              {children}
            </td>
          ),
          img: ({ src, alt, title }) => {
            if (typeof src === "string" && src) {
              return (
                <Image
                  src={src}
                  alt={alt || ""}
                  title={title ?? undefined}
                  width={1000}
                  height={1000}
                  className="mx-auto mt-4 mb-4 h-auto w-full rounded-sm"
                />
              );
            }
            if (src instanceof Blob) {
              return (
                <img
                  src={URL.createObjectURL(src)}
                  alt={alt || ""}
                  title={title ?? undefined}
                  className="mx-auto mt-4 mb-4 h-auto max-h-[400px] w-full rounded-sm object-contain"
                  width={1000}
                  height={1000}
                />
              );
            }
            return null;
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
