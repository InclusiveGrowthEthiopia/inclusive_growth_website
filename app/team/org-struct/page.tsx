"use client";

import "@xyflow/react/dist/style.css";
import PageHeader from "@/components/common/page-header";
import { Controls, Background, ReactFlow } from "@xyflow/react";
import { initialEdges, initialNodes } from "@/data/org-struct";
import { nodeTypes } from "@/components/org-struct/node";

export default function Page() {
  return (
    <div className="wow fadeInDown">
      <PageHeader
        title="Organization Structure"
        description="A clear and professional view of our charitable organization's hierarchy."
        className="bg-[url(/assets/img/our-story-bg.jpg)]"
      />

      <section className="wow fadeInUp my-20 px-4 sm:px-[30px] lg:px-[50px]">
        <div className="flex items-center justify-center">
          <div style={{ width: '100vw', height: '90vh' }}>
            <ReactFlow
              nodes={initialNodes}
              edges={initialEdges}
              nodeTypes={nodeTypes}
              minZoom={0.1}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
          </div>
        </div>
      </section>
    </div>
  );
}
