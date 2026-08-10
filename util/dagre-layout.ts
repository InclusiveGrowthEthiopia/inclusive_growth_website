import { Edge, Node } from "@xyflow/react";
import dagre from "@dagrejs/dagre";

export const getLayoutedElements = (
  nodes: Node[],
  edges: Edge[],
  direction: "TB" | "LR" = "TB"
) => {
  const g = new dagre.graphlib.Graph();
  g.setGraph({
    rankdir: direction,
    nodesep: 50,
    ranksep: 120,
    align: "UR"
  });

  g.setDefaultEdgeLabel(() => ({}));

  // match custom node size
  const NODE_WIDTH = 250;
  const NODE_HEIGHT = 100;

  // put each node into the dagre graph
  nodes.forEach((node) => {
    g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  });

  // add edges
  edges.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  // force ranking:
  // board -> level 0, exec -> level 1, directors -> level 2
  if (g.hasNode("board")) g.node("board").rank = 0;
  if (g.hasNode("exec-dir")) g.node("exec-dir").rank = 1;
  ["ops-dir", "finance-dir", "program-dir", "comms-dir"].forEach((id) => {
    if (g.hasNode(id)) g.node(id).rank = 2;
  });

  // run layout
  dagre.layout(g);

  // apply calculated positions
  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = g.node(node.id) || { x: 0, y: 0 };
    return {
      ...node,
      position: {
        x: nodeWithPosition.x - NODE_WIDTH / 2,
        y: nodeWithPosition.y - NODE_HEIGHT / 2
      }
    };
  });

  return { nodes: layoutedNodes, edges };
};
