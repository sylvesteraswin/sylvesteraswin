"use client"

import * as React from "react"

import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function WikipediaForm() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [search, setSearch] = React.useState<string>("")
  const [generatedBio, setGeneratedBio] = React.useState<string>("")

  const handleTextareaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const elem = e.currentTarget
    const value = elem.value

    setSearch(value)
  }

  const handleButtonClick = React.useCallback(async () => {
    setLoading(true)
    setGeneratedBio("")
    const response = await fetch("/api/wiki-summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInput: search,
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
  }, [search])

  return (
    <>
      <div className="mt-4 grid w-full gap-1.5">
        <Label htmlFor="message">
          What would you like to learn from wikipedia today?
        </Label>
        <Textarea
          onChange={handleTextareaChange}
          placeholder="What would you like to learn from wikipedia today?"
          id="message"
        />
      </div>
      <div className="mt-4">
        <Button onClick={handleButtonClick} disabled={search.length === 0}>
          Search now{" "}
          {!loading ? (
            <Icons.search className="ml-2" size={16} />
          ) : (
            <Icons.spinner className="ml-2 animate-spin" size={16} />
          )}
        </Button>
      </div>
      <hr className="border-slate-200" />
      {generatedBio}
    </>
  )
}
