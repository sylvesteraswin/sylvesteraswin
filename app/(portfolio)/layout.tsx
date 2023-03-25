import { cn } from "@/lib/utils"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import MainNav from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { Icons } from "@/components/icons"
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
          <nav>
            <Link
              href={siteConfig.links.resume}
              target={"_blank"}
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "px-4"
              )}
            >
              <Icons.resume size={16} className="mr-1.5" /> Resume
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
