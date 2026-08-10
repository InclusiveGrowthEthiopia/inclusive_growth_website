"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";
import { Handle, Position } from "@xyflow/react";

interface Data {
  position: string;
}

export const OrgNode = memo(({ data }: { data: Data }) => {
  return (
    <>
      <div
        className={cn(
          "border-secondary bg-secondary relative flex h-[100px] w-[200px] flex-col items-center justify-center rounded-xl border-2 p-8 text-center shadow-lg"
        )}
      >
        <div className={cn("text-xl font-semibold text-black")}>
          {data.position}
        </div>
      </div></>
  )
});

export const OrgUnitNode = memo(({ data }: { data: Data }) => {
  return (
    <>
      <OrgNode data={data} />

      <Handle id={"top"} type="target" position={Position.Top} />
      <Handle id={"top"} type="source" position={Position.Top} />

      <Handle id={"bottom"} type="target" position={Position.Bottom} />
      <Handle id={"bottom"} type="source" position={Position.Bottom} />
    </>
  );
});

export const OrgRightNode = memo(({ data }: { data: Data }) => {
  return (
    <>
      <OrgNode data={data} />

      <Handle id={"right"} type="target" position={Position.Right} />
    </>
  );
});

export const OrgLeftNode = memo(({ data }: { data: Data }) => {
  return (
    <>
      <OrgNode data={data} />

      <Handle id={"left"} type="target" position={Position.Left} />
    </>
  );
});

OrgUnitNode.displayName = "OrganizationNode";

export const nodeTypes = {
  orgNode: OrgUnitNode,
  leftNode: OrgLeftNode,
  rightNode: OrgRightNode
};
