"use client";

import React from "react";
import { XIcon } from "lucide-react";

interface VideoModalProps {
  videoUrl: string | null;
  onClose: () => void;
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  if (!videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-15 right-0 z-50 cursor-pointer text-white transition-transform duration-300 hover:scale-110"
          onClick={onClose}
        >
          <XIcon size={32} />
        </button>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
