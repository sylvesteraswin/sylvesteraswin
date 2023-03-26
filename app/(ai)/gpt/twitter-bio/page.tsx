import * as React from "react"

import TwitterIllustration from "@/components/illustration/twtitter"
import { TwitterForm } from "@/components/twitter-form"

export default function TwitterBioPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto flex w-full min-w-0 flex-col gap-6">
        <TwitterIllustration className="w-48 xl:w-60" />
        <h1 className="max-w-[42rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Generate your next Twitter bio using chatGPT
        </h1>
        <TwitterForm />
      </div>
    </main>
  )
}
