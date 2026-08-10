import React, { ReactNode } from "react";

interface Props {
  title: string;
  content: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, content, icon }: Props) {
  return (
    <div className="border-accent flex flex-col items-center gap-4 rounded-md border p-6 text-center shadow hover:scale-105 hover:shadow-2xl">
      <span className="to-accent from-accent/90 mb-4 rounded-full bg-radial p-6 drop-shadow-lg">
        {icon}
      </span>
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="leading-relaxed text-gray-600">{content}</p>
    </div>
  );
}
