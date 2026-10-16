import { companies, sites, hub } from '../data/work';
import type { Lang } from './ui';

// Traduções do conteúdo dos projetos. Imagens e IDs são os mesmos nos dois idiomas.
const co: Record<string, { sector: string; desc: string; titles: string[] }> = {
  result: {
    sector: 'Public health management consultancy',
    desc: 'A daily editorial calendar for municipal health managers. Technical topics become short, direct carousels, always in the brand’s green and petrol identity.',
    titles: ['SIAPS access', 'Good practices for community health agents', 'LC 217/2025 · idle funds', 'Offices in Belo Horizonte and Brasília', 'Municipal Health Plan', 'SIAPS deadline', 'Nursing salary floor'],
  },
  maxima: {
    sector: 'Electronic security and monitoring',
    desc: 'A month of content in four themed weeks. Each week has a cover post and a carousel that explains the technology without jargon.',
    titles: ['Week 2 · Asset protection', 'Week 3 · Trust in the service', 'Week 4 · Business efficiency', 'Week 1 · Family protection', 'Week 2 · cover', 'Week 4 · cover'],
  },
  nobre: {
    sector: 'Paid traffic and UGC creatives',
    desc: 'The agency’s own content: a proof carousel with operating numbers, offer posts and the visuals that later became the Método Nobre landing page.',
    titles: ['Proof of operation', 'WhatsApp that sells', 'Digital presence', 'Landing visual · brief', 'Landing visual · proof'],
  },
  bsa: {
    sector: 'Corporate gifts',
    desc: 'A product series for the corporate gifts catalog. Product and usage scenes enhanced with AI from the supplier’s photo, then composed with the brand and the sales message.',
    titles: ['Cap', 'Notebook', 'Barbecue grill', 'Glass cup', 'Headphones', 'Thermal bottle', 'Coloring book', 'Backpack'],
  },
};
const st: Record<string, { kind: string; desc: string; facts: string[] }> = {
  vizu: {
    kind: 'Corporate website',
    desc: 'Presents the VIZU Labs thesis: websites that learn a brand’s identity and adapt to the market. An editorial page in seven sections, with an illustrated product demo and a waitlist.',
    facts: ['Plain HTML, CSS and JavaScript', 'Automated Playwright tests at 1440, 768, 375 and 320px'],
  },
  nobre: {
    kind: 'Lead generation landing page',
    desc: 'An application page for Nobre’s paid traffic service with UGC creatives. Hero with a brief collage, hook script and A/B test, a strip of served brands and a confirmation page.',
    facts: ['Astro 5', 'Visuals first created in Photoshop, for the Nobre series'],
  },
  rdf: {
    kind: 'Sales landing page',
    desc: 'Sells entry to the RDF Importados partner program. Explains the operation, leads to the Shopify checkout and has a post-purchase page that routes confirmation to WhatsApp.',
    facts: ['React, TypeScript and Vite', 'Content tests with Vitest'],
  },
};
const hubEn = [
  ['CRM', 'A sales funnel in columns, with drag and drop between stages.'],
  ['Lead 360°', 'Everything about a client in one place: conversations, deals, projects and files.'],
  ['Inbox', 'WhatsApp conversations in a WhatsApp Web style, with audio and message templates.'],
  ['Dashboard', 'Leads, sales, deliveries and deadlines at a glance in a single panel.'],
  ['Strategic', 'Internal projects with subtasks, priorities and deadlines.'],
  ['Notes', 'Collaborative notes with real-time presence.'],
  ['Social media', 'Contract control and the post schedule for each client.'],
  ['Team', 'Internal chat, profiles and goals per department.'],
];
const hubMoreEn: { more: string; tags: string[] }[] = [
  {
    "more": "The sales funnel sits in columns and a lead changes stage when you drag its card. Each card shows name, company, estimated value, last message and tags, and you can filter by owner or search by name. Sales and after-sales have separate funnels, and the admin creates, renames and reorders the stages.",
    "tags": [
      "Drag and drop",
      "Sales and after-sales funnels",
      "Editable stages",
      "Filter by owner"
    ]
  },
  {
    "more": "The client’s full record in a single window: contact details, conversations, deals, projects, files, tags and custom fields, with a timeline of everything that happened. The button that sends a closed deal to production lives here, so nobody has to pass information along by hand. When a lead is lost, the reason is recorded.",
    "tags": [
      "Timeline",
      "Custom fields",
      "Send to production",
      "Loss reason"
    ]
  },
  {
    "more": "All of the team’s WhatsApp conversations inside the system, in a format close to WhatsApp Web. You can send text, audio, images and documents, use ready-made message templates, schedule messages and see the lead’s context next to the conversation. Each conversation can be taken by an agent or transferred to another.",
    "tags": [
      "Text, audio and files",
      "Message templates",
      "Scheduling",
      "Transfer conversations"
    ]
  },
  {
    "more": "An overview of the operation in a single panel: active clients, delivered and overdue projects, average delivery time, this week’s deadlines and productivity. Below it, lead growth, sales metrics and lead sources, with a period filter. Each department sees the numbers that matter for its work.",
    "tags": [
      "Period filter",
      "Leads and sales",
      "Deliveries and deadlines",
      "Per-department view"
    ]
  },
  {
    "more": "The agency’s internal projects, with two-level subtasks, color-coded priorities, tags, owners and deadlines. A progress bar shows how much of each project is done, so leadership can see what is moving and what is stuck.",
    "tags": [
      "Subtasks",
      "Color-coded priorities",
      "Deadlines",
      "Progress bar"
    ]
  },
  {
    "more": "An Obsidian-style note editor with live formatting and task lists. Several people edit the same document at once and you can see who is present at that moment, so meetings and planning live in one place.",
    "tags": [
      "Team editing",
      "Real-time presence",
      "Task lists"
    ]
  },
  {
    "more": "Control of the social media accounts the agency serves. Each client shows its contract status (active, warning or expired) and Instagram link, and an interactive calendar organizes each day’s posts, with delivery tracked by status.",
    "tags": [
      "Contract status",
      "Post calendar",
      "Delivery by status"
    ]
  },
  {
    "more": "The team’s members organized by department, with each person’s profile, role and status. The internal chat works like WhatsApp, with direct conversations, groups created by the admin and file and audio sharing. Access to each menu depends on the role.",
    "tags": [
      "Profiles by department",
      "Internal chat",
      "Groups",
      "Role permissions"
    ]
  }
];

export function getWork(lang: Lang) {
  if (lang === 'pt') return { companies, sites, hub };
  return {
    companies: companies.map((c) => {
      const t = co[c.id]; let i = 0;
      return {
        ...c, sector: t.sector, desc: t.desc,
        carousels: c.carousels.map((k) => ({ ...k, title: t.titles[i++] })),
        posts: c.posts.map((p) => ({ ...p, title: t.titles[i++] })),
      };
    }),
    sites: sites.map((s) => { const t = st[s.id]; return { ...s, kind: t.kind, desc: t.desc, facts: s.facts.map((f, i) => ({ k: ['Stack', 'Quality', 'Origin'][['Stack', 'Qualidade', 'Origem'].indexOf(f.k)], v: t.facts[i] })) }; }),
    hub: hub.map((h, i) => ({ ...h, title: hubEn[i][0], desc: hubEn[i][1], ...hubMoreEn[i] })),
  };
}
