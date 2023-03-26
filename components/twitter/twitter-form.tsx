"use client"

import * as React from "react"

import { capitalize } from "lodash"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { buildPrompt } from "@/lib/tw-prompt"
import { TwitterBioTabs } from "@/components/twitter/twitter-bio-tabs"

const styleList = ["informational", "professional", "casual", "funny"]

export function TwitterForm() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [textStyle, setTextStyle] = React.useState<string>(styleList[0])
  const [currentBio, setCurrentBio] = React.useState<string>("")
  const [generatedBio, setGeneratedBio] = React.useState<string>("")
  const tabRef = React.useRef<HTMLDivElement>(null)

  const scrollToTab = () => {
    if (tabRef.current !== null) {
      tabRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const elem = e.currentTarget
    const value = elem.value

    setCurrentBio(value)
  }
  const handleOnSelectChange = (value: string) => {
    setTextStyle(value)
  }

  const handleButtonClick = React.useCallback(async () => {
    setGeneratedBio("")
    setLoading(true)

    const response = await fetch("/api/tw-generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: buildPrompt(currentBio, textStyle),
      }),
    })

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    // This data is a ReadableStream
    const data = response.body
    if (!data) {
      return
    }

    const reader = data.getReader()
    const decoder = new TextDecoder()
    let done = false

    while (!done) {
      const { value, done: doneReading } = await reader.read()
      done = doneReading
      const chunkValue = decoder.decode(value)
      setGeneratedBio((prev) => prev + chunkValue)
    }
    setLoading(false)

    scrollToTab()
  }, [textStyle, currentBio])

  return (
    <>
      <div className="mt-4 grid w-full gap-1.5">
        <Label htmlFor="message">
          Copy your current bio{" "}
          <span className="text-slate-500">
            (or write a few sentences about yourself)
          </span>
        </Label>
        <Textarea
          onChange={handleTextareaChange}
          placeholder="e.g. Software engineer @microsoft. with a focus on creating beautiful, user-friendly applications."
          id="message"
        />
      </div>
      <div className="mt-4 grid w-full gap-1.5">
        <Label htmlFor="message">Select a style</Label>
        <Select
          defaultValue={styleList[0]}
          onValueChange={handleOnSelectChange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {styleList.map((style, index) => (
              <SelectItem value={style} key={index}>
                {capitalize(style)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <Button onClick={handleButtonClick}>
          Generate your new Bio{" "}
          {!loading ? (
            <Icons.arrowRight className="ml-2" size={16} />
          ) : (
            <Icons.spinner className="ml-2 animate-spin" size={16} />
          )}
        </Button>
      </div>
      <hr className="border-slate-200" />
      {generatedBio && (
        <TwitterBioTabs ref={tabRef} generatedBios={generatedBio} />
      )}
    </>
  )
}
