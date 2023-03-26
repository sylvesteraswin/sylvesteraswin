import { OpenAIStream, type OpenAIStreamPayload } from "@/lib/open-ai-stream"

import { wikiSearch, wikiExtract, buildPrompt } from "@/lib/wiki-search"

export const config = {
  runtime: "edge",
}

const handler = async (req: Request): Promise<Response> => {
  const { userInput } = (await req.json()) as {
    userInput?: string
  }

  if (!userInput) {
    return new Response("No userInput in the request", {
      status: 400,
    })
  }

  const searchResults = await wikiSearch(userInput)
  const articles = await Promise.all(
    searchResults.map((result) => wikiExtract(result))
  )
  const prompt = buildPrompt(articles[0], userInput)

  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    stream: true,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}

export default handler
