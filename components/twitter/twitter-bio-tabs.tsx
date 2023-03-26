import { capitalize } from "lodash"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import * as React from "react"
import { TwitterProfileSkeleton } from "@/components/twitter/twitter-profile-skeleton"

interface TwitterBioTabsProps {
  generatedBios: string
}

const tabList = ["option-1", "option-2"]

export const TwitterBioTabs = React.forwardRef<
  HTMLDivElement,
  TwitterBioTabsProps
>(({ generatedBios }, ref) => {
  const content = React.useMemo(
    () => generatedBios.substring(generatedBios.indexOf("1") + 3).split("2."),
    [generatedBios]
  )
  return (
    <>
      <h2 className="mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700">
        Your new twitter bio
      </h2>
      <Tabs defaultValue={tabList[0]} ref={ref}>
        <TabsList>
          {tabList.map((tab, index) => (
            <TabsTrigger key={index} value={tab}>
              {capitalize(tab.replace(/-/, ""))}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabList.map((map, index) => (
          <TabsContent value={map} key={index}>
            <TwitterProfileSkeleton title={content[index]} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
})

TwitterBioTabs.displayName = "TwitterBioTabs"
