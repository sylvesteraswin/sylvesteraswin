import { AIConfig } from "types"

export const aiConfig: AIConfig = {
  mainNav: [],
  sidebarNav: [
    {
      title: "Text generation",
      items: [
        {
          title: "Twitter Bio",
          href: "/gpt/twitter-bio",
        },
      ],
    },
    {
      title: "Chatbot",
      items: [
        {
          title: "Wikipedia",
          href: "/gpt/wikipedia",
        },
      ],
    },
  ],
}
