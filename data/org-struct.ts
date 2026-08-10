import { Node, Edge } from "@xyflow/react";

export const initialNodes: Node[] = [
  // Level 0
  {
    id: "board",
    type: "orgNode",
    data: { position: "Board" },
    position: { x: 1000, y: -500 },
  },

  // Level 1
  {
    id: "auditor",
    type: "orgNode",
    data: { position: "Auditor" },
    position: { x: 700, y: -300 },
  },
  {
    id: "ed",
    type: "orgNode",
    data: { position: "Executive Director" },
    position: { x: 1000, y: -300 },
  },

  // Level 2 (Under Executive Director)
  {
    id: "sen_adv",
    type: "orgNode",
    data: { position: "Senior Advisor" },
    position: { x: 800, y: -150 },
  },
  {
    id: "exec_ast",
    type: "orgNode",
    data: { position: "Executive Assistance" },
    position: { x: 1200, y: -150 },
  },

  // Level 3 (Directors / Managers under ED)
  {
    id: "prog_dir",
    type: "orgNode",
    data: { position: "Program Director" },
    position: { x: 650, y: 0 },
  },
  {
    id: "me_mgr",
    type: "orgNode",
    data: { position: "M&E Manager" },
    position: { x: 1000, y: 0 },
  },
  {
    id: "op_dir",
    type: "orgNode",
    data: { position: "Operational Director" },
    position: { x: 1350, y: 0 },
  },

  // Level 4 (Under Program Director & Operational Director)
  {
    id: "tech_lead",
    type: "orgNode",
    data: { position: "Technical Team Lead" },
    position: { x: 400, y: 200 },
  },
  {
    id: "dep_prog_dir",
    type: "orgNode",
    data: { position: "Deputy Program Director" },
    position: { x: 650, y: 200 },
  },
  {
    id: "comm_mgr",
    type: "orgNode",
    data: { position: "Communication Manager" },
    position: { x: 900, y: 200 },
  },
  {
    id: "me_sen_adv",
    type: "orgNode",
    data: { position: "M&E Senior Advisor" },
    position: { x: 1150, y: 200 },
  },
  {
    id: "hr_mgr",
    type: "leftNode",
    data: { position: "Human Resource Manager" },
    position: { x: 1500, y: 200 },
  },

  // Level 5 (Under Tech Lead, Dep Prog Dir, Comm Mgr, & Op Dir)
  {
    id: "cap_build",
    type: "orgNode",
    data: { position: "Capacity Building & Partnership" },
    position: { x: -250, y: 400 },
  },
  {
    id: "res_mob",
    type: "orgNode",
    data: { position: "Resource Mobilizations and Found." },
    position: { x: 0, y: 400 },
  },
  {
    id: "strat_dev",
    type: "orgNode",
    data: { position: "Strategy Development Advisor" },
    position: { x: 250, y: 400 },
  },
  {
    id: "safe_gen",
    type: "orgNode",
    data: { position: "Safeguarding & Gender Advisor" },
    position: { x: 500, y: 400 },
  },

  {
    id: "inc_health",
    type: "leftNode",
    data: { position: "Inclusive Health Program" },
    position: { x: 800, y: 550 },
  },
  {
    id: "comm_adv",
    type: "orgNode",
    data: { position: "Communication Advisor" },
    position: { x: 900, y: 400 },
  },
  {
    id: "grant_comp",
    type: "leftNode",
    data: { position: "Grant & Compliance Sr. Specialist" },
    position: { x: 1500, y: 350 },
  },

  // Level 6
  {
    id: "dep_cap_build",
    type: "leftNode",
    data: { position: "Dpt. Cap. Building & Partnership" },
    position: { x: -100, y: 600 },
  },
  {
    id: "inc_edu",
    type: "rightNode",
    data: { position: "Inclusive Education Program" },
    position: { x: 500, y: 550 },
  },
  {
    id: "fin_mgr",
    type: "leftNode",
    data: { position: "Finance Manager" },
    position: { x: 1500, y: 500 },
  },

  // Level 7
  {
    id: "sen_pub_part",
    type: "leftNode",
    data: { position: "Sr. Public Partnership Advisor" },
    position: { x: -100, y: 750 },
  },
  {
    id: "inc_econ",
    type: "leftNode",
    data: { position: "Inclusive Economy Program" },
    position: { x: 800, y: 700 },
  },
  {
    id: "proc_log",
    type: "leftNode",
    data: { position: "Procurment and Logistic Manager" },
    position: { x: 1500, y: 650 },
  },

  // Levels 8-12 (Remaining Program Units under Deputy Program Director)
  {
    id: "inc_dig",
    type: "rightNode",
    data: { position: "Inclusive Digital Tech Program" },
    position: { x: 500, y: 700 },
  },
  {
    id: "inc_skill",
    type: "leftNode",
    data: {
      position: "Inclusive Skill Dev. & Awareness",
    },
    position: { x: 800, y: 850 },
  },
  {
    id: "inc_emerg",
    type: "rightNode",
    data: { position: "Inclusive Emergency (IEPR)" },
    position: { x: 500, y: 850 },
  },
  {
    id: "inc_creat",
    type: "leftNode",
    data: { position: "Inclusive Creative Exp. & Arts" },
    position: { x: 800, y: 1000 },
  },
  {
    id: "dis_inc",
    type: "rightNode",
    data: { position: "Disability Inclusion Sr. Advisor" },
    position: { x: 500, y: 1000 },
  },
];

export const initialEdges: Edge[] = [
  // Board Connections
  {
    id: "e-board-aud",
    source: "board",
    target: "auditor",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-board-ed",
    source: "board",
    target: "ed",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },

  // Executive Director Connections
  {
    id: "e-ed-senadv",
    source: "ed",
    target: "sen_adv",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-ed-execast",
    source: "ed",
    target: "exec_ast",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-ed-progdir",
    source: "ed",
    target: "prog_dir",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-ed-memgr",
    source: "ed",
    target: "me_mgr",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-ed-opdir",
    source: "ed",
    target: "op_dir",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },

  // Program Director Connections
  {
    id: "e-prog-tech",
    source: "prog_dir",
    target: "tech_lead",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-prog-dep",
    source: "prog_dir",
    target: "dep_prog_dir",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-prog-comm",
    source: "prog_dir",
    target: "comm_mgr",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-prog-mesen",
    source: "me_mgr",
    target: "me_sen_adv",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },

  // Technical Team Lead Connections
  {
    id: "e-tech-cap",
    source: "tech_lead",
    target: "cap_build",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-tech-res",
    source: "tech_lead",
    target: "res_mob",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-tech-strat",
    source: "tech_lead",
    target: "strat_dev",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "e-tech-safe",
    source: "tech_lead",
    target: "safe_gen",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },

  // Capacity Building Connections
  {
    id: "e-cap-depcap",
    source: "cap_build",
    target: "dep_cap_build",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-cap-senpub",
    source: "cap_build",
    target: "sen_pub_part",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },

  // Deputy Program Director Connections
  {
    id: "e-dep-health",
    source: "dep_prog_dir",
    target: "inc_health",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-dep-edu",
    source: "dep_prog_dir",
    target: "inc_edu",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "right",
  },
  {
    id: "e-dep-econ",
    source: "dep_prog_dir",
    target: "inc_econ",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-dep-dig",
    source: "dep_prog_dir",
    target: "inc_dig",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "right",
  },
  {
    id: "e-dep-skill",
    source: "dep_prog_dir",
    target: "inc_skill",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-dep-emerg",
    source: "dep_prog_dir",
    target: "inc_emerg",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "right",
  },
  {
    id: "e-dep-creat",
    source: "dep_prog_dir",
    target: "inc_creat",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-dep-dis",
    source: "dep_prog_dir",
    target: "dis_inc",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "right",
  },

  // Communication Manager Connections
  {
    id: "e-comm-adv",
    source: "comm_mgr",
    target: "comm_adv",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "top",
  },

  // Operational Director Connections
  {
    id: "e-op-hr",
    source: "op_dir",
    target: "hr_mgr",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-op-grant",
    source: "op_dir",
    target: "grant_comp",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-op-fin",
    source: "op_dir",
    target: "fin_mgr",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
  {
    id: "e-op-proc",
    source: "op_dir",
    target: "proc_log",
    type: "smoothstep",
    sourceHandle: "bottom",
    targetHandle: "left",
  },
];
