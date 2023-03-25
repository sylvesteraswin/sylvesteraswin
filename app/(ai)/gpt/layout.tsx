import MainNav from "@/components/main-nav"
import { aiConfig } from "@/config/ai"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"

interface AILayoutProps {
  children: React.ReactNode
}

export default function AILayout({ children }: AILayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav logoText="GPT Playground" items={aiConfig.mainNav}>
            <DocsSidebarNav items={aiConfig.sidebarNav} />
          </MainNav>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <SiteFooter />
    </div>
  )
}
