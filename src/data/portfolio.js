// ---------------------------------------------------------------------------
// Single source of truth for the whole portfolio.
// Edit this file to update content — no backend required.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Kudurupaka Upender',
  shortName: 'Upender',
  title: 'Senior Node.js Developer',
  tagline: 'Backend Architecture · PostgreSQL · GCP · Event-Driven Systems',
  location: 'Hyderabad, Telangana, India',
  email: 'kudurupakaupender157@gmail.com',
  phone: '+91 7075306405',
  yearsExperience: '4.6',
  summary:
    'Senior Backend Developer with 4.6 years of experience building scalable, secure, and high-performance backend systems using Node.js, Express.js, and PostgreSQL. I design clean REST API architectures (Controller → Service → Repository), implement JWT/OAuth2/RBAC authentication, and integrate Redis for caching and real-time event-driven systems — with a strong focus on code quality, observability, and scalable SaaS architecture.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/kudurupaka-upender-0b59368b/',
    github: 'https://github.com/Upender5',
    npm: 'https://www.npmjs.com/~upender_k',
    email: 'mailto:kudurupakaupender157@gmail.com',
  },
};

// Highlighted core skills get a colored tech icon (see SkillsShowcase).
export const coreSkills = [
  'Node.js',
  'Express.js',
  'TypeScript',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'Sequelize',
  'BullMQ',
  'Socket.IO',
  'Docker',
  'AWS',
  'GCP',
];

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Node.js', 'JavaScript', 'TypeScript', 'Express.js', 'NestJS', 'Koa.js', 'Java', 'Spring Boot'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'ORM / Data Modeling',
    items: ['Sequelize', 'Prisma', 'TypeORM', 'Schema design', 'Migrations'],
  },
  {
    category: 'Auth & Security',
    items: ['JWT', 'OAuth2', 'RBAC', 'Role-based access control', 'Secure API design'],
  },
  {
    category: 'Caching & Messaging',
    items: ['Redis', 'Redis Pub/Sub', 'BullMQ', 'MQTT', 'Socket.IO'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3)', 'GCP (Cloud Run, Cloud SQL)', 'Docker', 'PM2', 'GitHub Actions', 'CI/CD'],
  },
  {
    category: 'Tooling',
    items: ['Git', 'GitLab', 'Bitbucket', 'Linux', 'Winston', 'Pino'],
  },
  {
    category: 'Architecture',
    items: ['Microservices', 'Event-driven systems', 'Clean architecture', 'Multi-tenant SaaS'],
  },
];

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Kapil Knowledge Hub (InfozIT)',
    period: 'Dec 2024 – Jun 2026',
    location: 'Hyderabad',
    highlights: [
      'Developing EmplaiHRMS, a multi-tenant SaaS HRMS platform using Node.js, Express.js, and PostgreSQL/MySQL with a clean Controller → Service → Repository architecture.',
      'Designed scalable RESTful APIs for employee lifecycle modules: onboarding, attendance, payroll, and workflows.',
      'Implemented JWT authentication and RBAC for multi-tenant user management with granular permission systems.',
      'Integrated Redis for session management and performance optimization across high-concurrency endpoints.',
      'Implemented structured + audit logging to track user actions and data changes across the platform.',
      'Optimized complex PostgreSQL queries with proper indexing, reducing response times for reporting modules.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'iBridge Digital Pvt Ltd',
    period: 'Aug 2023 – Sep 2024',
    location: 'Hyderabad',
    highlights: [
      'Built and maintained scalable backend services using Node.js and Express.js following RESTful best practices.',
      'Designed and optimized PostgreSQL schemas, complex joins, and indexed queries for performance-critical features.',
      'Implemented secure authentication with JWT and OAuth2 for third-party integrations (YouTube, Facebook APIs).',
      'Integrated Razorpay payment gateway with subscription billing logic and event-driven webhook handling.',
      'Implemented Redis caching to reduce database load and improve API response times.',
    ],
  },
  {
    role: 'Trainee Software Developer',
    company: 'Rubus Digital Pvt Ltd',
    period: 'Aug 2021 – Jul 2023',
    location: 'Hyderabad',
    highlights: [
      'Developed backend services and RESTful APIs with Node.js, PostgreSQL integrations, and ORM-based modeling.',
      'Built real-time systems using Redis Pub/Sub and MQTT for live event monitoring and message processing.',
      'Contributed to containerized desktop and web applications using Electron.js and Node.js backend services.',
      'Supported CI/CD pipeline maintenance and QA processes ensuring production stability.',
    ],
  },
];

export const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    institute: 'Marri Laxman Reddy Institute of Technology and Management',
    period: '2015 – 2018',
  },
  {
    degree: 'Diploma – Computer Engineering',
    institute: 'T.R.R College of Technology',
    period: '2011 – 2014',
  },
];

// ---------------------------------------------------------------------------
// Projects. `kind` is 'professional' or 'personal'.
// Optional rich fields:
//   architecture: { name?, nodes, edges }   er: { tables, relations }
//   workflow: { title, steps }              journey: { title, stages }
//   docs: [ { title, body:[], bullets?:[] } ]
// ---------------------------------------------------------------------------

export const projects = [
  // =========================================================================
  // 1. EmplaiHRMS
  // =========================================================================
  {
    slug: 'emplaihrms',
    title: 'EmplaiHRMS',
    kind: 'professional',
    tagline: 'Multi-Tenant SaaS Human Resource Management System',
    live: 'https://app.emplaihrms.com',
    duration: '1.5 years',
    team: 'Team of 10 (3 backend, 5 frontend, 1 DevOps, 1 QA/PM)',
    role: 'Backend Engineer',
    summary:
      'An enterprise-grade, multi-tenant HRMS that automates the entire employee lifecycle — from onboarding to payroll. Each client gets a dynamically provisioned, fully isolated database, a branded subdomain, and a configurable workflow engine, all built on a clean MVC-Service architecture.',
    stack: ['Node.js 21', 'Express.js', 'Sequelize', 'MySQL', 'Redis', 'BullMQ', 'Socket.IO', 'JWT'],
    highlights: [
      'Architected a "Dynamic Tenant-Isolated MVC-Service" backend — each client provisions its own isolated MySQL schema (~100 interlinked tables) on package purchase.',
      'Dynamic subdomain-based login (client.app.emplaihrms.com) with silent login via short-lived JWTs + sliding refresh tokens.',
      'Configurable, multi-level approval workflow engine driven by Redis Pub/Sub and Socket.IO real-time alerts.',
      'High-throughput biometric ingestion with an idempotent BullMQ "catch-up" queue for offline device backlogs.',
      'Background payroll, bulk import, and PDF generation offloaded to BullMQ workers; nightly Cron jobs lock attendance and reset leave balances.',
    ],
    metrics: [
      { value: '8', label: 'Modules' },
      { value: '~100', label: 'Tables / tenant' },
      { value: 'Multi-tenant', label: 'Isolated DB per client' },
      { value: '18 mo', label: 'Build duration' },
    ],
    architecture: {
      name: 'Dynamic Tenant-Isolated MVC-Service Architecture',
      nodes: [
        { id: 'client', label: 'Web / Mobile', sub: 'client.app.emplaihrms', x: 30, y: 160, accent: 'blue' },
        { id: 'tenant', label: 'Tenant Middleware', sub: 'subdomain → schema', x: 220, y: 160, accent: 'cyan' },
        { id: 'ctrl', label: 'Controller', sub: 'JWT · rate-limit', x: 410, y: 70, accent: 'cyan' },
        { id: 'svc', label: 'Service', sub: 'business logic', x: 410, y: 160, accent: 'purple' },
        { id: 'repo', label: 'Repository', sub: 'Sequelize', x: 410, y: 250, accent: 'purple' },
        { id: 'db', label: 'MySQL', sub: 'per-tenant schema', x: 610, y: 250, accent: 'green' },
        { id: 'redis', label: 'Redis', sub: 'cache · queue · pub/sub', x: 610, y: 160, accent: 'red' },
        { id: 'bull', label: 'BullMQ Workers', sub: 'payroll · PDF · import', x: 610, y: 70, accent: 'blue' },
      ],
      edges: [
        { from: 'client', to: 'tenant', animated: true },
        { from: 'tenant', to: 'ctrl', animated: true },
        { from: 'ctrl', to: 'svc', animated: true },
        { from: 'svc', to: 'repo', animated: true },
        { from: 'repo', to: 'db', animated: true },
        { from: 'svc', to: 'redis', animated: true, dashed: true },
        { from: 'redis', to: 'bull', animated: true, dashed: true },
      ],
    },
    journey: {
      title: 'Client lifecycle — from lead to live workforce',
      stages: [
        { phase: 'Sign up', title: 'Lead Mode', desc: 'Prospect registers and explores a shared trial workspace — no dedicated resources yet.', accent: 'blue' },
        { phase: 'Convert', title: 'Pick a package', desc: 'On payment, a dedicated isolated MySQL schema is provisioned and core data is seeded.', accent: 'cyan' },
        { phase: 'Configure', title: 'Org setup', desc: 'Admin defines hierarchy, leave policies, approval workflows, and custom fields.', accent: 'purple' },
        { phase: 'Onboard', title: 'Add employees', desc: 'Pre-onboard portal or direct entry (single + bulk CSV import via BullMQ).', accent: 'cyan' },
        { phase: 'Cascade', title: 'Apply policies', desc: 'New/updated policies cascade to the right employees in background batches.', accent: 'purple' },
        { phase: 'Operate', title: 'Mark attendance', desc: 'Employees punch via web, mobile (geofenced), or biometric devices.', accent: 'green' },
        { phase: 'Approve', title: 'Raise requests', desc: 'Leave/helpdesk requests route through the RBAC approval matrix with live alerts.', accent: 'red' },
        { phase: 'Pay', title: 'Run payroll', desc: 'Attendance + leave + structures compute payslips; PDFs land in encrypted S3.', accent: 'green' },
        { phase: 'Report', title: 'View reports', desc: 'Role-based reports, payslips, and document templates per employee.', accent: 'blue' },
      ],
    },
    er: {
      tables: [
        { name: 'tenants', x: 30, y: 40, columns: [
          { name: 'id', type: 'uuid', key: 'PK' },
          { name: 'company_name', type: 'varchar' },
          { name: 'subdomain', type: 'varchar' },
          { name: 'status', type: 'enum' },
        ] },
        { name: 'users', x: 300, y: 30, columns: [
          { name: 'id', type: 'uuid', key: 'PK' },
          { name: 'tenant_id', type: 'uuid', key: 'FK' },
          { name: 'emp_id_code', type: 'varchar' },
          { name: 'email', type: 'varchar' },
          { name: 'role', type: 'varchar' },
        ] },
        { name: 'custom_field_values', x: 300, y: 250, columns: [
          { name: 'id', type: 'bigint', key: 'PK' },
          { name: 'user_id', type: 'uuid', key: 'FK' },
          { name: 'field_id', type: 'uuid', key: 'FK' },
          { name: 'value', type: 'text' },
        ] },
        { name: 'attendance_records', x: 580, y: 30, columns: [
          { name: 'id', type: 'uuid', key: 'PK' },
          { name: 'user_id', type: 'uuid', key: 'FK' },
          { name: 'punch_in', type: 'datetime' },
          { name: 'punch_out', type: 'datetime' },
          { name: 'status', type: 'enum' },
        ] },
        { name: 'employee_payslips', x: 580, y: 250, columns: [
          { name: 'id', type: 'uuid', key: 'PK' },
          { name: 'user_id', type: 'uuid', key: 'FK' },
          { name: 'gross_salary', type: 'decimal' },
          { name: 'deductions', type: 'decimal' },
          { name: 'net_salary', type: 'decimal' },
        ] },
      ],
      relations: [
        { from: 'tenants', to: 'users', label: '1:N' },
        { from: 'users', to: 'custom_field_values', label: '1:N' },
        { from: 'users', to: 'attendance_records', label: '1:N' },
        { from: 'users', to: 'employee_payslips', label: '1:N' },
      ],
    },
    workflow: {
      title: 'Biometric offline catch-up (idempotent ingestion)',
      steps: [
        { label: 'Device reconnects', sub: 'dumps backlog', accent: 'blue' },
        { label: 'Fast staging insert', sub: 'raw_logs · HTTP 202', accent: 'cyan' },
        { label: 'Queue job', sub: 'BullMQ + Redis', accent: 'red' },
        { label: 'Micro-batch worker', sub: 'sequential', accent: 'purple' },
        { label: 'Idempotency key', sub: 'drop duplicates', accent: 'purple' },
        { label: 'Clean records', sub: 'attendance_records', accent: 'green' },
      ],
    },
    docs: [
      {
        title: 'What it does',
        body: [
          'EmplaiHRMS is a SaaS HR platform built for mid-to-large enterprises. It centralises workforce data and automates the full employee lifecycle: onboarding, attendance, leave, internal requests, and payroll — with talent modules (performance, onboarding, LMS) in a second phase.',
          'The product ships 8 modules in total. Phase 1 delivered the operational core (User Management with custom fields & document generation, Attendance, Leave, Request/Helpdesk, and Payroll). Phase 2 covers Performance (OKRs & 360° feedback), Onboarding portals, and a SCORM-compliant LMS.',
        ],
      },
      {
        title: 'Multi-tenancy & dynamic login',
        body: [
          'Every client gets a branded subdomain (e.g. acme.app.emplaihrms.com). A custom Express tenant-isolation middleware reads the Host header, resolves the tenant from a global master catalog, and binds that client\'s isolated database connection to the request — so data can never bleed across organisations.',
          'Authentication uses "silent login": short-lived JWT access tokens paired with secure HttpOnly, SameSite refresh cookies that slide the session in the background, so active users stay logged in without hard timeouts. A Redis-backed rate limiter protects login and password-reset endpoints from brute-force attacks.',
        ],
      },
      {
        title: 'Database architecture',
        body: [
          'The platform uses an Isolated Multi-Tenant Database Architecture with three layers: a Global Master Catalog (subdomain routing, subscriptions, billing), one Isolated Tenant Database per client (~100 interlinked tables — config, employees, attendance, leave, payroll), and a Centralized Audit/Logger database for security and compliance tracking.',
          'When a lead converts to a paying client, the system dynamically creates a fresh isolated schema, runs all Sequelize migrations to build the ~100 tables with indexes and constraints, then a Seeding Engine injects base data (tax brackets, holidays, geographies) and applies the package\'s feature/limit flags.',
        ],
      },
      {
        title: 'Async ecosystem & hard problems',
        body: [
          'Heavy work never blocks the request cycle. BullMQ workers (backed by Redis) handle bulk PDF rendering, bulk employee imports, and payroll computation; Cron jobs lock daily attendance at 23:59 and reset leave balances monthly. Socket.IO pushes real-time approval and processing alerts to dashboards.',
          'Biometric devices cache punches locally when the office network drops, then dump days of backlog at once. The server accepts that burst into a fast staging table (returning HTTP 202 immediately) and a BullMQ worker processes it in micro-batches. An idempotency key (device + biometric id + timestamp) guarantees duplicate logs are dropped, never double-counted.',
          'All timestamps are normalised to Asia/Kolkata (IST) at the data layer so a 9:00 AM punch is never mis-recorded as "late" because the AWS host clock runs on UTC.',
        ],
      },
      {
        title: 'Delivery & infrastructure',
        body: [
          'A 10-person squad (3 backend, 5 frontend, 1 DevOps, 1 QA/PM) delivered the platform over 18 months on 2-week Agile sprints with mandatory peer review.',
          'Runs on AWS EC2 with PM2 clustering (multi-core utilisation + zero-downtime reloads), AWS S3 for encrypted documents (AES-256 at rest, time-limited presigned URLs for access), and GitHub Actions for CI/CD — linting, tests, automated Sequelize migrations, and deployment.',
        ],
      },
    ],
  },

  // =========================================================================
  // 2. MediaWall
  // =========================================================================
  {
    slug: 'mediawall',
    title: 'MediaWall',
    kind: 'professional',
    tagline: 'SaaS Media Management & Live Streaming Platform',
    live: 'https://mediawall.in',
    role: 'Backend Developer',
    summary:
      'A multi-tenant, white-label media platform with a hierarchical reseller model. It schedules and orchestrates live streams to YouTube/Facebook via OAuth2, bills through Razorpay with idempotent webhooks, and pushes real-time stream health to dashboards over Redis Pub/Sub + WebSockets.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'BullMQ', 'OAuth2', 'Razorpay', 'Socket.IO'],
    highlights: [
      'Single-database shared-collection multi-tenancy — query middleware auto-scopes every operation by tenantId/resellerId.',
      'Four-tier RBAC: Super Admin → Reseller (white-label) → Tenant Admin → Manager/Operator.',
      'Timezone-locked campaign scheduling via BullMQ delayed jobs, with a startup "catch-up" batch aggregator to recover missed jobs after downtime.',
      'OAuth2 streaming orchestration to YouTube/Facebook; access & refresh tokens encrypted with AES-256-GCM at rest.',
      'Idempotent Razorpay webhooks: HMAC-SHA256 signature verification + a Redis SETNX guard to drop duplicate delivery.',
    ],
    metrics: [
      { value: '4-tier', label: 'RBAC hierarchy' },
      { value: 'OAuth2', label: 'YouTube / Facebook' },
      { value: 'AES-256', label: 'Token encryption' },
      { value: 'Idempotent', label: 'Webhook processing' },
    ],
    architecture: {
      name: 'Shared-Collection Multi-Tenant Orchestrator',
      nodes: [
        { id: 'client', label: 'Dashboard', sub: 'Resellers · Admins', x: 30, y: 160, accent: 'blue' },
        { id: 'api', label: 'Express API', sub: 'tenant scope · RBAC', x: 230, y: 160, accent: 'cyan' },
        { id: 'oauth', label: 'OAuth2', sub: 'YouTube / FB', x: 440, y: 50, accent: 'purple' },
        { id: 'pay', label: 'Razorpay', sub: 'webhooks', x: 440, y: 150, accent: 'green' },
        { id: 'redis', label: 'Redis', sub: 'queue · pub/sub · guard', x: 440, y: 250, accent: 'red' },
        { id: 'db', label: 'MongoDB', sub: 'tenant-stamped docs', x: 650, y: 150, accent: 'green' },
        { id: 'stream', label: 'Stream Engine', sub: 'RTMP ingest', x: 650, y: 50, accent: 'purple' },
      ],
      edges: [
        { from: 'client', to: 'api', animated: true },
        { from: 'api', to: 'oauth', animated: true, dashed: true },
        { from: 'api', to: 'pay', animated: true, dashed: true },
        { from: 'api', to: 'redis', animated: true },
        { from: 'api', to: 'db', animated: true },
        { from: 'oauth', to: 'stream', animated: true, dashed: true },
      ],
    },
    journey: {
      title: 'From reseller signup to a live broadcast',
      stages: [
        { phase: 'Onboard', title: 'Reseller buys a pool', desc: 'Super Admin sells storage/stream capacity; reseller white-labels with own logo & domain.', accent: 'blue' },
        { phase: 'Resell', title: 'Onboard tenants', desc: 'Reseller splits resources and onboards client businesses under their brand.', accent: 'cyan' },
        { phase: 'Connect', title: 'Link socials', desc: 'Tenant connects YouTube/Facebook via OAuth2; tokens encrypted at rest.', accent: 'purple' },
        { phase: 'Schedule', title: 'Plan a campaign', desc: 'Operator schedules a stream; a timezone-locked BullMQ delayed job is queued.', accent: 'cyan' },
        { phase: 'Go live', title: 'Stream orchestration', desc: 'At fire time, backend creates the broadcast and pushes video to the RTMP ingest.', accent: 'green' },
        { phase: 'Monitor', title: 'Live health alerts', desc: 'Worker detects drops → Redis Pub/Sub → Socket.IO → instant dashboard alert.', accent: 'red' },
        { phase: 'Bill', title: 'Subscription renews', desc: 'Razorpay webhook verified (HMAC) and de-duplicated (Redis guard) before crediting.', accent: 'green' },
      ],
    },
    workflow: {
      title: 'Idempotent Razorpay webhook processing',
      steps: [
        { label: 'Webhook POST', sub: 'from Razorpay', accent: 'blue' },
        { label: 'Verify HMAC', sub: 'SHA256 signature', accent: 'cyan' },
        { label: 'Redis SETNX', sub: 'event_id · NX EX', accent: 'red' },
        { label: 'New event?', sub: 'true = process', accent: 'purple' },
        { label: 'Apply billing', sub: 'subscription change', accent: 'green' },
        { label: 'Return 200', sub: 'dup = skip safely', accent: 'blue' },
      ],
    },
    docs: [
      {
        title: 'Multi-tenancy & RBAC hierarchy',
        body: [
          'MediaWall is a single instance serving many customers. It uses a shared-collection strategy: every document is stamped with a tenantId/resellerId, and backend query middleware automatically appends that scope to every database operation — so one tenant can never read another\'s data.',
          'Permissions follow a four-tier hierarchy. The Super Admin owns the platform and sets global packages. A Reseller is a white-label partner who buys a resource pool (storage, concurrent streams) and resells it under their own brand. The Tenant Admin runs a client business; Managers/Operators do daily work (upload, schedule, stream) but can\'t touch billing or users.',
        ],
      },
      {
        title: 'Timezone-locked scheduling & catch-up',
        body: [
          'A campaign scheduled for "9:00 AM Monday" is stored as a UTC timestamp plus an explicit timezone string (e.g. Asia/Kolkata). Instead of polling the DB every second, the system queues a BullMQ delayed job in Redis that fires exactly when the timestamp hits.',
          'If a server is down when a job should fire, that campaign is missed. On every startup the app runs a Batch Aggregator: it scans for PENDING campaigns whose scheduled time has already passed and re-injects them at the front of the queue with max priority — the platform self-heals after an outage.',
        ],
      },
      {
        title: 'OAuth2 live-streaming orchestration',
        body: [
          'MediaWall orchestrates rather than hosts video. The user authorises YouTube/Facebook; the backend exchanges the returned auth code for an access token (short-lived) and refresh token (long-lived), both encrypted with AES-256-GCM before storage — unreadable even if the database is breached.',
          'On "go live", the backend uses the stored tokens to create a live broadcast on the platform, which returns an RTMP ingest URL and stream key. Those are handed to the streaming engine (e.g. FFmpeg/media server), which encodes and pushes the feed to the platform\'s ingest point.',
        ],
      },
      {
        title: 'Idempotent webhooks & real-time sync',
        body: [
          'Razorpay webhooks are verified by recomputing an HMAC-SHA256 of the raw body and comparing it to the X-Razorpay-Signature header — fake "payment success" calls are rejected. To handle guaranteed re-delivery, a Redis SETNX guard on the unique event id ensures each event is processed exactly once; duplicates return 200 OK and skip the business logic.',
          'Because background workers and web servers are separate processes, stream-health changes propagate through Redis Pub/Sub: a worker publishes an event, every Express node subscribed to the channel receives it, and the node holding the user\'s Socket.IO connection pushes an instant "Stream Disconnected" alert — no polling.',
        ],
      },
    ],
  },

  // =========================================================================
  // 3. IWAI InGate / OutGate
  // =========================================================================
  {
    slug: 'iwai-gate',
    title: 'IWAI InGate / OutGate',
    kind: 'professional',
    tagline: 'Real-Time Vehicle Entry/Exit Monitoring System',
    role: 'Backend Developer',
    summary:
      'A desktop-based, real-time vehicle tracking system for port/terminal gates. QR codes drive entry/exit scanning, MQTT and Redis Pub/Sub carry live events, PostgreSQL stores the audit trail, and an Electron.js client gives gate operators a live dashboard.',
    stack: ['Node.js', 'PostgreSQL', 'Redis Pub/Sub', 'MQTT', 'Electron.js'],
    highlights: [
      'Real-time QR-based entry/exit monitoring with a live operator dashboard.',
      'MQTT ingest for gate hardware events; Redis Pub/Sub fans out live updates to clients.',
      'Node.js REST APIs consumed by an Electron.js desktop client.',
      'Structured logging for audit trails and system observability.',
    ],
    metrics: [
      { value: 'Real-time', label: 'MQTT events' },
      { value: 'QR-based', label: 'Gate scanning' },
      { value: 'Desktop', label: 'Electron client' },
    ],
    architecture: {
      name: 'Real-Time Event Pipeline',
      nodes: [
        { id: 'gate', label: 'Gate Scanner', sub: 'QR code', x: 40, y: 150, accent: 'blue' },
        { id: 'mqtt', label: 'MQTT Broker', sub: 'event ingress', x: 230, y: 150, accent: 'red' },
        { id: 'api', label: 'Node.js API', sub: 'processing', x: 430, y: 150, accent: 'cyan' },
        { id: 'redis', label: 'Redis Pub/Sub', sub: 'live fan-out', x: 430, y: 55, accent: 'red' },
        { id: 'db', label: 'PostgreSQL', sub: 'vehicle logs', x: 640, y: 150, accent: 'green' },
        { id: 'desktop', label: 'Electron App', sub: 'live dashboard', x: 430, y: 245, accent: 'purple' },
      ],
      edges: [
        { from: 'gate', to: 'mqtt', animated: true },
        { from: 'mqtt', to: 'api', animated: true },
        { from: 'api', to: 'redis', animated: true, dashed: true },
        { from: 'api', to: 'db', animated: true },
        { from: 'redis', to: 'desktop', animated: true, dashed: true },
      ],
    },
    journey: {
      title: 'A vehicle passing through the gate',
      stages: [
        { phase: 'Register', title: 'Vehicle issued QR', desc: 'Each vehicle/pass is assigned a unique QR code in the system.', accent: 'blue' },
        { phase: 'Scan', title: 'Gate scan', desc: 'Operator scans the QR at the InGate/OutGate terminal.', accent: 'cyan' },
        { phase: 'Ingest', title: 'Event over MQTT', desc: 'The scan event is published to the MQTT broker and accepted by the API.', accent: 'red' },
        { phase: 'Record', title: 'Persist + log', desc: 'Entry/exit is written to PostgreSQL with a structured audit trail.', accent: 'green' },
        { phase: 'Broadcast', title: 'Live update', desc: 'Redis Pub/Sub pushes the event to every connected Electron dashboard instantly.', accent: 'purple' },
      ],
    },
    docs: [
      {
        title: 'What it does',
        body: [
          'IWAI InGate/OutGate monitors vehicles entering and leaving a controlled facility (built for the Inland Waterways context). Operators scan a QR code at the gate; the system records a timestamped entry or exit and reflects it live on every connected dashboard.',
        ],
      },
      {
        title: 'Why MQTT + Redis Pub/Sub',
        body: [
          'Gate hardware is a natural fit for MQTT — a lightweight publish/subscribe protocol designed for unreliable field networks. Scan events are published to the broker and consumed by the Node.js API, which decouples the hardware from the application.',
          'For the operator UI, Redis Pub/Sub fans a processed event out to all subscribed Electron clients simultaneously, so a vehicle scanned at one gate appears on every dashboard without polling. PostgreSQL holds the durable, queryable audit trail.',
        ],
      },
    ],
  },

  // =========================================================================
  // 4. InvestIQ (personal — fintech)
  // =========================================================================
  {
    slug: 'investiq',
    title: 'InvestIQ',
    kind: 'personal',
    tagline: 'Real-Time Investment Analytics & Portfolio Intelligence',
    role: 'Solo build',
    summary:
      'A portfolio-analytics platform that ingests live market data, tracks multi-asset portfolios, computes risk/return analytics, and fires real-time price & threshold alerts. Built around an event-driven core: streaming quotes flow through Redis, heavy analytics run on BullMQ workers, and dashboards update live over WebSockets.',
    stack: ['Java','springboot', 'python', 'TypeScript', 'PostgreSQL', 'Redis Streams', 'BullMQ', 'Socket.IO', 'Market Data API'],
    highlights: [
      'Real-time quote ingestion via Redis Streams with consumer groups for reliable, replayable processing.',
      'Portfolio engine computes holdings valuation, P&L, allocation, and risk metrics (volatility, Sharpe, max drawdown).',
      'Rule-based alert engine — price targets, % moves, and threshold breaches pushed live over WebSockets.',
      'Time-series storage with rollups for fast historical charts; heavy back-tests offloaded to BullMQ workers.',
      'Clean layered architecture with JWT auth and per-user data isolation.',
    ],
    metrics: [
      { value: 'Real-time', label: 'Live quotes & alerts' },
      { value: 'Multi-asset', label: 'Equity · ETF · crypto' },
      { value: 'Event-driven', label: 'Streams + workers' },
    ],
    architecture: {
      name: 'Event-Driven Analytics Pipeline',
      nodes: [
        { id: 'market', label: 'Market Data API', sub: 'live quotes', x: 30, y: 150, accent: 'blue' },
        { id: 'ingest', label: 'Ingest Service', sub: 'normalize', x: 220, y: 150, accent: 'cyan' },
        { id: 'stream', label: 'Redis Streams', sub: 'consumer groups', x: 410, y: 150, accent: 'red' },
        { id: 'engine', label: 'Analytics Engine', sub: 'valuation · risk', x: 600, y: 150, accent: 'purple' },
        { id: 'alerts', label: 'Alert Engine', sub: 'rules → push', x: 600, y: 55, accent: 'cyan' },
        { id: 'db', label: 'PostgreSQL', sub: 'positions · rollups', x: 600, y: 250, accent: 'green' },
        { id: 'ws', label: 'Socket.IO', sub: 'live dashboard', x: 790, y: 55, accent: 'blue' },
      ],
      edges: [
        { from: 'market', to: 'ingest', animated: true },
        { from: 'ingest', to: 'stream', animated: true },
        { from: 'stream', to: 'engine', animated: true },
        { from: 'engine', to: 'db', animated: true },
        { from: 'engine', to: 'alerts', animated: true, dashed: true },
        { from: 'alerts', to: 'ws', animated: true, dashed: true },
      ],
    },
    journey: {
      title: 'From signup to a live, alerting portfolio',
      stages: [
        { phase: 'Sign up', title: 'Create account', desc: 'User registers; JWT-secured, per-user isolated workspace.', accent: 'blue' },
        { phase: 'Connect', title: 'Add holdings', desc: 'Import or enter positions across equities, ETFs, and crypto.', accent: 'cyan' },
        { phase: 'Stream', title: 'Live valuation', desc: 'Market quotes stream in; portfolio value and P&L update in real time.', accent: 'purple' },
        { phase: 'Analyze', title: 'Risk & allocation', desc: 'Engine computes volatility, Sharpe, drawdown, and allocation breakdowns.', accent: 'green' },
        { phase: 'Alert', title: 'Set rules', desc: 'Define price targets and % move triggers; alerts fire instantly when hit.', accent: 'red' },
        { phase: 'Review', title: 'Dashboards & history', desc: 'Interactive charts backed by time-series rollups; run back-tests on demand.', accent: 'blue' },
      ],
    },
    docs: [
      {
        title: 'What it does',
        body: [
          'InvestIQ gives retail investors an institutional-style view of their portfolio. It tracks multi-asset holdings, values them against live market data, and surfaces the risk and performance metrics that actually matter — not just a number that goes up and down.',
          'The headline features are: live portfolio valuation and P&L, risk analytics (volatility, Sharpe ratio, maximum drawdown), allocation breakdowns by asset class/sector, and a configurable alert engine for price and percentage-move triggers.',
        ],
      },
      {
        title: 'Event-driven architecture',
        body: [
          'Market data is high-volume and never stops, so InvestIQ is built around streams rather than request/response. An ingest service normalises incoming quotes and writes them to Redis Streams; consumer groups let multiple workers process the same stream reliably, with replay if a worker crashes.',
          'The analytics engine consumes those events to recompute affected portfolios, persists positions and time-series rollups to PostgreSQL for fast historical charts, and emits alert candidates. The alert engine evaluates user rules and pushes matches to the browser over Socket.IO — so a price target firing feels instant. Expensive jobs like back-tests run on BullMQ workers off the hot path.',
        ],
      },
      {
        title: 'Why it is on this portfolio',
        body: [
          'InvestIQ is a personal project that demonstrates the same backend patterns I use professionally — event-driven processing, Redis-backed streaming and queues, real-time WebSocket delivery, and clean layered architecture — applied to a domain (fintech) with hard correctness and latency requirements.',
        ],
      },
    ],
  },

  // =========================================================================
  // 5. RateGuard (personal)
  // =========================================================================
  {
    slug: 'rateguard',
    title: 'RateGuard',
    kind: 'personal',
    tagline: 'Distributed API Rate Limiter & Gateway',
    role: 'Solo build',
    summary:
      'A lightweight, distributed rate-limiting gateway for Node.js services. Sliding-window and token-bucket algorithms backed by Redis, with per-tenant quotas, graceful 429 handling, and observability — the cross-cutting layer SaaS platforms need.',
    stack: ['Node.js', 'Redis', 'Express.js', 'TypeScript', 'Docker'],
    highlights: [
      'Sliding-window and token-bucket algorithms using atomic Redis Lua scripts.',
      'Per-tenant and per-route quota configuration with hot reload.',
      'Horizontally scalable — all state lives in Redis, never in process memory.',
      'Exposes Prometheus-style metrics for throttled vs. allowed traffic.',
    ],
    metrics: [
      { value: 'O(1)', label: 'Per-request cost' },
      { value: 'Atomic', label: 'Redis Lua scripts' },
      { value: 'Multi-tenant', label: 'Per-key quotas' },
    ],
    architecture: {
      name: 'Stateless Gateway, Stateful Redis',
      nodes: [
        { id: 'client', label: 'Clients', sub: 'API consumers', x: 40, y: 150, accent: 'blue' },
        { id: 'gw', label: 'RateGuard', sub: 'middleware', x: 250, y: 150, accent: 'cyan' },
        { id: 'redis', label: 'Redis', sub: 'token buckets', x: 250, y: 55, accent: 'red' },
        { id: 'svc', label: 'Upstream Service', sub: 'protected API', x: 470, y: 150, accent: 'purple' },
        { id: 'metrics', label: 'Metrics', sub: 'observability', x: 470, y: 250, accent: 'green' },
      ],
      edges: [
        { from: 'client', to: 'gw', animated: true },
        { from: 'gw', to: 'redis', animated: true, dashed: true },
        { from: 'gw', to: 'svc', animated: true },
        { from: 'gw', to: 'metrics', animated: true, dashed: true },
      ],
    },
    journey: {
      title: 'How a request is throttled',
      stages: [
        { phase: 'Configure', title: 'Define quotas', desc: 'Set per-tenant / per-route limits; hot-reloaded without restart.', accent: 'blue' },
        { phase: 'Arrive', title: 'Request hits gateway', desc: 'RateGuard extracts the tenant/route key from the request.', accent: 'cyan' },
        { phase: 'Check', title: 'Atomic Redis check', desc: 'A Lua script decrements the token bucket atomically — O(1), race-free.', accent: 'red' },
        { phase: 'Decide', title: 'Allow or 429', desc: 'Tokens left → forward upstream; none left → graceful 429 with retry hints.', accent: 'purple' },
        { phase: 'Observe', title: 'Emit metrics', desc: 'Allowed/throttled counters exported for dashboards & alerting.', accent: 'green' },
      ],
    },
    workflow: {
      title: 'Request throttling decision',
      steps: [
        { label: 'Request arrives', sub: 'extract key', accent: 'blue' },
        { label: 'Check bucket', sub: 'atomic Redis', accent: 'red' },
        { label: 'Tokens left?', sub: 'decision', accent: 'cyan' },
        { label: 'Forward / 429', sub: 'allow or reject', accent: 'purple' },
        { label: 'Emit metric', sub: 'observability', accent: 'green' },
      ],
    },
    docs: [
      {
        title: 'The problem',
        body: [
          'Every SaaS API needs to protect itself from abuse and noisy neighbours, but rate limiting done in process memory breaks the moment you run more than one server instance — each node has its own counters. RateGuard centralises that state in Redis so limits hold across the whole fleet.',
        ],
      },
      {
        title: 'How it works',
        body: [
          'RateGuard sits as Express middleware in front of a protected service. For each request it derives a key (tenant, user, or route) and runs an atomic Redis Lua script implementing either a token-bucket or sliding-window counter. Because the check-and-decrement happens in a single Lua call, there are no race conditions even under heavy concurrency, and the per-request cost stays O(1).',
          'Quotas are configurable per tenant and per route and hot-reload without a restart. Allowed and throttled traffic is exported as Prometheus-style metrics so you can see exactly who is hitting limits.',
        ],
      },
    ],
  },

  // =========================================================================
  // 6. EventPulse (personal)
  // =========================================================================
  {
    slug: 'eventpulse',
    title: 'EventPulse',
    kind: 'personal',
    tagline: 'Real-Time Analytics Pipeline',
    role: 'Solo build',
    summary:
      'An event-driven analytics pipeline: ingests high-volume events into Redis Streams, processes them through consumer-group workers with windowed aggregation, and pushes live aggregates to dashboards over WebSockets — with PostgreSQL for durable rollups.',
    stack: ['Node.js', 'Redis Streams', 'Socket.IO', 'PostgreSQL', 'TypeScript'],
    highlights: [
      'Ingests events into Redis Streams with consumer groups for at-least-once processing.',
      'Windowed aggregation (counts, rates) computed in-stream and flushed to PostgreSQL.',
      'Live dashboards updated over Socket.IO without polling.',
      'Backpressure-aware workers that scale horizontally and recover via stream offsets.',
    ],
    metrics: [
      { value: 'At-least-once', label: 'Stream delivery' },
      { value: 'Real-time', label: 'WebSocket push' },
      { value: 'Windowed', label: 'Aggregation' },
    ],
    architecture: {
      name: 'Streaming Aggregation Pipeline',
      nodes: [
        { id: 'src', label: 'Event Sources', sub: 'apps · services', x: 40, y: 150, accent: 'blue' },
        { id: 'stream', label: 'Redis Streams', sub: 'consumer groups', x: 240, y: 150, accent: 'red' },
        { id: 'worker', label: 'Workers', sub: 'aggregation', x: 440, y: 150, accent: 'purple' },
        { id: 'db', label: 'PostgreSQL', sub: 'durable rollups', x: 640, y: 230, accent: 'green' },
        { id: 'ws', label: 'Socket.IO', sub: 'live dashboards', x: 640, y: 70, accent: 'cyan' },
      ],
      edges: [
        { from: 'src', to: 'stream', animated: true },
        { from: 'stream', to: 'worker', animated: true },
        { from: 'worker', to: 'db', animated: true },
        { from: 'worker', to: 'ws', animated: true, dashed: true },
      ],
    },
    journey: {
      title: 'An event from emit to dashboard',
      stages: [
        { phase: 'Emit', title: 'Source fires event', desc: 'Apps push events to the ingest endpoint at high volume.', accent: 'blue' },
        { phase: 'Buffer', title: 'Append to stream', desc: 'Events land in Redis Streams; consumer groups guarantee at-least-once.', accent: 'red' },
        { phase: 'Aggregate', title: 'Windowed compute', desc: 'Workers fold events into windowed counts and rates.', accent: 'purple' },
        { phase: 'Persist', title: 'Flush rollups', desc: 'Aggregates are written to PostgreSQL for durable history.', accent: 'green' },
        { phase: 'Push', title: 'Live dashboard', desc: 'Fresh aggregates stream to the UI over Socket.IO — no polling.', accent: 'cyan' },
      ],
    },
    docs: [
      {
        title: 'What it demonstrates',
        body: [
          'EventPulse is a compact, production-shaped take on real-time analytics. It shows how to absorb a firehose of events without losing data, compute useful aggregates continuously, and surface them live — the same shape as the event-driven systems behind dashboards, monitoring, and product analytics.',
        ],
      },
      {
        title: 'How it works',
        body: [
          'Events are appended to Redis Streams. Consumer groups let a pool of workers share the load with at-least-once delivery and crash recovery via stored offsets. Workers maintain windowed aggregates (counts, rates) and periodically flush them to PostgreSQL for durable history, while pushing the latest numbers to connected dashboards over Socket.IO.',
          'The workers are backpressure-aware and horizontally scalable: add more workers to the consumer group and throughput rises without code changes.',
        ],
      },
    ],
  },
];

export const featuredSlugs = ['emplaihrms', 'mediawall', 'investiq'];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
