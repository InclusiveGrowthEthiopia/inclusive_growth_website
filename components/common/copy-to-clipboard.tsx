"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CopyToClipboardProps {
  value: string;
  className?: string;
  iconOnly?: boolean;
  copiedText?: string;
}

export function CopyToClipboard({
  value,
  className,
  iconOnly = true,
  copiedText = "Copied"
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={cn("flex cursor-pointer items-center text-xs", className)}
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
      {!iconOnly && (
        <span className="ml-2 text-xs">{copied ? copiedText : "Copy"}</span>
      )}
    </button>
  );
}
