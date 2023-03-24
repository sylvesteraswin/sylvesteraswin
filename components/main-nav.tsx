"use client"

import * as React from "react"
import Link from "next/link"

import PortfolioLogo from "@/components/logo/portfolio"
import { siteConfig } from "@/config/site"

interface MainNavProps {
  children?: React.ReactNode
}

export default function MainNav({ children }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <PortfolioLogo className="h-6 w-6" width="24px" height="24px" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}
