import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { notFound } from "next/navigation";
import { modules } from "@/lib/modules";

export function generateStaticParams() { return modules.map(m=>({module:m.slug})); }
export default async function ModulePage({params}:{params:Promise<{module:string}>}) {
 const {module:slug} = await params;
 const selected = modules.find(m=>m.slug===slug);
 if (!selected) notFound();
 return <><Link className="back-link" href="/"><ArrowLeft size={17}/> Back to dashboard</Link><section className="page-heading"><div className="eyebrow">CREATIVE STEEL / MODULE</div><h1>{selected.label}</h1><p>{selected.description}</p></section><section className="empty-state"><div className="empty-icon"><Construction size={28}/></div><h2>{selected.label} foundation is ready</h2><p>This section is a working page. Database tables, forms, permissions, and actual workflows will be added during the next building stages.</p><div className="notice"><strong>No real records</strong><span>This page is deliberately not collecting or exposing business information.</span></div></section></>;
}
