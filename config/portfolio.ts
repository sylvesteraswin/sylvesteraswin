import { PortfolioConfig } from "types"
import { aiConfig } from "@/config/ai"

export const portfolioConfig: PortfolioConfig = {
  mainNav: [
    /* {
      title: "Features",
      href: "/features",
      disabled: true,
    }, */
    {
      title: "GPT",
      href: aiConfig.sidebarNav.at(0)?.items?.at(0).href,
    },
  ],
}
