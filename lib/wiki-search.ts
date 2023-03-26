import { removeStopWords } from "@/lib/remove-stopwords"
import { convert } from "html-to-text"

const searchLimit = 1

interface WikiPage {
  ns: number
  title: string
  pageid: number
  size: number
  wordcount: number
  snippet: string
  timestamp: Date
}

export interface Article {
  batchcomplete: string
  warnings: Warnings
  query: Query
}

export interface Query {
  pages: Pages
}

export interface Pages {
  [key: string]: Page
}

export interface Page {
  pageid: number
  ns: number
  title: string
  extract: string
}

export interface Warnings {
  extracts: Extracts
}

export interface Extracts {
  "*": string
}

export const wikiExtract = async (wikiPage: WikiPage): Promise<string> => {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&pageids=${wikiPage.pageid}&format=json&origin=*&prop=extracts`

  return await fetch(endpoint)
    .then(async (res) => {
      return (await res.json()) as Article
    })
    .then((article) => {
      const pageNum = Object.keys(article.query.pages)[0]
      const htmlContent = article.query.pages[pageNum].extract
      return convert(htmlContent, {
        wordWrap: 130,
      })
    })
}

export const wikiSearch = async (userInput: string): Promise<WikiPage[]> => {
  const keywords = removeStopWords(userInput)

  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${searchLimit}&srsearch=${userInput}`

  return await fetch(endpoint)
    .then(async (res) => {
      return await res.json()
    })
    .then((data) => data.query.search as WikiPage[])
}

export const basePrompt =
  "I am a highly intelligent bot with whom you can talk. I try to reply saying the truth, but sometimes I might make up some stuff. I work by integrating GPT-3 as a brain with web APIs for speech recognition and speech synthesis.;Q: What is human life expectancy in the United States?;A: Human life expectancy in the United States is 78 years.;Q: Who was president of the United States in 1955?;A: Dwight D. Eisenhower was president of the United States in 1955.;Q: Which party did he belong to?;A: He belonged to the Republican Party.;Q: How does a telescope work?;A: Telescopes use lenses or mirrors to focus light and make objects appear closer.;Q: Where were the 1992 Olympics held?;A: The 1992 Olympics were held in Barcelona, Spain.;Q: Who developed you?;A: I was developed by Luciano Abriata."

export const buildPrompt = (content: string, userInput: string) => {
  return `
        ${basePrompt}
        ${content.substring(0, 2000)}. Q: ${userInput} ???
    `
}
