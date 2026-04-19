window.APP_SCENARIOS = [
  {
    id: "energy",
    name: "Energy — Refinery operations copilot",
    intent: "Create a refinery operations copilot",
    appTitle: "Refinery AI Copilot",
    appSubtitle: "Build, deploy and govern a live refinery operations workflow in minutes.",
    pills: [
      { label: "Copilot", tone: "teal" },
      { label: "Agent", tone: "orange" },
      { label: "Workflow", tone: "blue" }
    ],
    platforms: {
      unistack: ["data connectors", "runtime", "model routing", "observability"],
      uniweave: ["persona design", "multimodal UX", "agent handoffs", "channel orchestration"],
      uniscale: ["permit workflow", "work orders", "SOP intelligence", "document extraction"],
      uniprotect: ["RBAC", "policy guardrails", "audit logs", "release controls"]
    },
    outputs: [
      { title: "Ops cockpit", tone: "teal", desc: "Shift decisions, alerts, throughput signals" },
      { title: "Field copilot", tone: "blue", desc: "Technician guidance and task orchestration" },
      { title: "Doc workflow", tone: "orange", desc: "Permits, procedures and compliance flows" },
      { title: "Secure AI assistant", tone: "green", desc: "Governed enterprise assistance by role" }
    ],
    metrics: [
      { value: "4–8 wks", label: "prototype acceleration" },
      { value: "1x data bind", label: "reuse across apps" },
      { value: "role-based", label: "security by design" },
      { value: "multi-agent", label: "orchestration ready" }
    ],
    storyboard: [
      "Intent enters the platform in business language, not technical configuration.",
      "UniWeave shapes the interaction layer, personas and multimodal journeys.",
      "UniScale composes workflows, documents and task automation.",
      "UniStack provisions the operational backbone across data, models and runtime.",
      "UniProtect applies security, access policies and auditability before release."
    ],
    narration: [
      "The enterprise defines intent once. The platform interprets the refinery outcome it needs to create.",
      "UniWeave structures the experience layer. It maps personas, touchpoints, handoffs and conversational journeys.",
      "UniScale composes the process layer. It binds work orders, document intelligence, approvals and workflow rules.",
      "UniStack activates the execution backbone. It connects data, runtime, model routing and observability.",
      "UniProtect wraps the app in enterprise trust. Access, controls, auditability and governed release are applied.",
      "The application goes live. The same reusable building blocks now power an ops cockpit, field copilot, document workflow and secure AI assistant."
    ]
  },
  {
    id: "logistics",
    name: "Logistics — Control tower + warehouse copilot",
    intent: "Create a logistics control tower app",
    appTitle: "Supply Chain Control Tower",
    appSubtitle: "Assemble a governed control-tower application with copilots, workflows and agents.",
    pills: [
      { label: "Control Tower", tone: "teal" },
      { label: "Warehouse Copilot", tone: "blue" },
      { label: "Exception Workflow", tone: "orange" }
    ],
    platforms: {
      unistack: ["TMS/WMS connectors", "agent runtime", "stream processing", "monitoring"],
      uniweave: ["planner cockpit", "operator UX", "multichannel alerts", "orchestration"],
      uniscale: ["dock scheduling", "claims workflow", "invoice automation", "document AI"],
      uniprotect: ["tenant security", "access policies", "audit trails", "safe deployment"]
    },
    outputs: [
      { title: "Ops cockpit", tone: "teal", desc: "Network risk, delays and asset health" },
      { title: "Warehouse copilot", tone: "blue", desc: "Receiving, slotting and task guidance" },
      { title: "Doc workflow", tone: "orange", desc: "Claims, invoices and exception handling" },
      { title: "Secure AI assistant", tone: "green", desc: "Governed role-based assistance" }
    ],
    metrics: [
      { value: "↓ cycle time", label: "faster exception closure" },
      { value: "↑ OTIF", label: "network service uplift" },
      { value: "1 platform", label: "multi-app reuse" },
      { value: "auditable", label: "enterprise readiness" }
    ],
    storyboard: [
      "A logistics intent triggers assembly of a control-tower grade app.",
      "The experience model is created for planners, site teams and operators.",
      "Workflow and document intelligence are attached to real operational events.",
      "Data and runtime services are activated for live decisioning.",
      "Security and audit controls are applied before apps are released."
    ],
    narration: [
      "A supply chain leader asks for a control tower app. The platform begins composing the operating model immediately.",
      "UniWeave creates the user journeys for planners, site users and operator interactions across channels.",
      "UniScale binds exception workflows, invoice checks, claims handling and document intelligence.",
      "UniStack connects the control tower to TMS, WMS and live operational telemetry.",
      "UniProtect governs every role, action and release with enterprise-grade control.",
      "The app goes live as a reusable suite: ops cockpit, warehouse copilot, document workflow and secure AI assistant."
    ]
  },
  {
    id: "travel",
    name: "Travel — Service recovery assistant",
    intent: "Create a service recovery assistant",
    appTitle: "Travel Service Recovery AI",
    appSubtitle: "Generate a multimodal disruption-response application in minutes.",
    pills: [
      { label: "Assistant", tone: "teal" },
      { label: "Agent", tone: "orange" },
      { label: "Workflow", tone: "blue" }
    ],
    platforms: {
      unistack: ["PSS/CRM APIs", "event backbone", "agent runtime", "monitoring"],
      uniweave: ["customer journeys", "voice/chat UX", "handoffs", "orchestration"],
      uniscale: ["voucher workflow", "case handling", "doc AI", "partner automation"],
      uniprotect: ["identity controls", "customer privacy", "audit logs", "release policies"]
    },
    outputs: [
      { title: "Ops cockpit", tone: "teal", desc: "Disruption view and recovery actions" },
      { title: "Field copilot", tone: "blue", desc: "Airport or frontline staff assistance" },
      { title: "Doc workflow", tone: "orange", desc: "Vouchers, cases and partner actions" },
      { title: "Secure AI assistant", tone: "green", desc: "Role-based governed assistance" }
    ],
    metrics: [
      { value: "real time", label: "recovery orchestration" },
      { value: "multi-channel", label: "experience continuity" },
      { value: "composable", label: "same blocks, new app" },
      { value: "governed", label: "enterprise trust" }
    ],
    storyboard: [
      "Customer and operations intent are translated into one coordinated service-recovery experience.",
      "Interaction design is created for frontline teams and customers across channels.",
      "Case handling, vouchers and document processes are attached to the journey.",
      "The runtime and event backbone is activated for live disruption response.",
      "Trust, privacy and auditability are enforced before the app is released."
    ],
    narration: [
      "The enterprise requests a service recovery assistant. The platform interprets the outcome and begins assembly.",
      "UniWeave creates the multimodal experience layer across voice, chat and frontline workflows.",
      "UniScale composes voucher, case and document flows required for recovery execution.",
      "UniStack powers the event backbone, system connectivity and agent execution required in real time.",
      "UniProtect governs identity, privacy and auditability before release.",
      "The app goes live with disruption cockpit, frontline copilot, workflow automation and secure enterprise assistance."
    ]
  }
];