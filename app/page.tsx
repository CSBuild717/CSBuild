import Link from "next/link";
import { ArrowRight, Factory, FolderKanban, Package, Users } from "lucide-react";
import { modules } from "@/lib/modules";

export default function Home() {
 return <>
   <section className="page-heading"><div className="eyebrow">OPERATIONS OVERVIEW</div><h1>Manufacturing dashboard</h1><p>A central workspace for managing Creative Steel. This first version is a visual preview. All real business data will be added securely later.</p></section>
   <div className="notice"><strong>Foundation build</strong><span>Navigation is working. Customers, jobs, and inventory have not been connected to Supabase yet. No metrics below represent real operations.</span></div>
   <div className="stat-grid">
     <article className="stat-card"><Users size={22}/><span>Customers</span><strong>—</strong><small>Awaiting database connection</small></article>
     <article className="stat-card"><FolderKanban size={22}/><span>Open jobs</span><strong>—</strong><small>Awaiting database connection</small></article>
     <article className="stat-card"><Factory size={22}/><span>Production operations</span><strong>—</strong><small>Awaiting database connection</small></article>
     <article className="stat-card"><Package size={22}/><span>Inventory items</span><strong>—</strong><small>Awaiting database connection</small></article>
   </div>
   <section className="section-heading"><div><h2>Application modules</h2><p>Explore the sections we will build into a complete manufacturing system.</p></div></section>
   <div className="module-grid">{modules.map(m=><Link href={`/${m.slug}`} key={m.slug} className="module-card"><div className="module-top"><span className="module-symbol">CS</span><ArrowRight size={18}/></div><h3>{m.label}</h3><p>{m.description}</p><span className="module-state">Layout ready · Features coming soon</span></Link>)}</div>
 </>;
}
