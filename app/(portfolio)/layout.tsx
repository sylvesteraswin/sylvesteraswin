import { cn } from "@/lib/utils"

import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"
import { portfolioConfig } from "@/config/portfolio"

interface PortfolioLayoutProps {
  children: React.ReactNode
}

export default async function PortfolioLayout({
  children,
}: PortfolioLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={portfolioConfig.mainNav} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
