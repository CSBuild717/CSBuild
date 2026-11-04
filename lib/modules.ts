export const modules = [
  {slug:"customers", label:"Customers", description:"Manage customer relationships and contact details.", icon:"Users", count:"Not connected"},
  {slug:"quotes", label:"Quotes & Estimates", description:"Prepare and review manufacturing estimates.", icon:"FileText", count:"Not connected"},
  {slug:"jobs", label:"Jobs & Work Orders", description:"Follow jobs from approval through production.", icon:"ClipboardList", count:"Not connected"},
  {slug:"production", label:"Shop Floor (MES)", description:"Record operations at machines and work centers.", icon:"Factory", count:"Not connected"},
  {slug:"inventory", label:"Inventory", description:"Track stock, materials, parts, and storage locations.", icon:"Boxes", count:"Not connected"},
  {slug:"purchasing", label:"Purchasing", description:"Organize suppliers, purchase orders, and receiving.", icon:"ShoppingCart", count:"Not connected"},
  {slug:"scheduling", label:"Scheduling", description:"Plan work centers, deadlines, and capacity.", icon:"CalendarDays", count:"Not connected"},
  {slug:"quality", label:"Quality", description:"Prepare inspection, traceability, and quality workflows.", icon:"ShieldCheck", count:"Not connected"},
  {slug:"shipping", label:"Shipping", description:"Prepare finished orders for dispatch.", icon:"Truck", count:"Not connected"},
  {slug:"reports", label:"Reports", description:"Build manufacturing, cost, and performance reports.", icon:"ChartNoAxesCombined", count:"Not connected"},
] as const;
