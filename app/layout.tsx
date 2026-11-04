import type { Metadata } from "next";
import Link from "next/link";
import { Factory, LayoutDashboard, Menu } from "lucide-react";
import { modules } from "@/lib/modules";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Steel | Manufacturing Workspace",
  description: "Creative Steel manufacturing workspace preview",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>
    <div className="shell">
      <aside className="sidebar">
        <Link className="brand" href="/"><span className="brand-icon"><Factory size={22}/></span><span><strong>CREATIVE STEEL</strong><small>Manufacturing Workspace</small></span></Link>
        <div className="nav-title">WORKSPACE</div>
        <nav aria-label="Main navigation"><Link className="nav-link" href="/"><LayoutDashboard size={18}/> Dashboard</Link>{modules.map(m=><Link key={m.slug} className="nav-link" href={`/${m.slug}`}><span className="nav-dot"/>{m.label}</Link>)}</nav>
        <div className="sidebar-foot">PREVIEW MODE<br/><span>No live business data connected</span></div>
      </aside>
      <div className="content"><header className="topbar"><span className="mobile-label"><Menu size={18}/> Creative Steel</span><span className="desktop-label">CREATIVE STEEL / OPERATIONS</span><span className="status"><span className="green-dot"/> Public layout preview</span></header><main>{children}</main><footer className="footer">Creative Steel · Foundation build · Demo interface only</footer></div>
    </div></body></html>;
}
