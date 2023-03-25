import TwitterIllustration from "@/components/illustration/twtitter"
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

export default function TwitterBioPage() {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto flex w-full min-w-0 flex-col gap-6">
        <TwitterIllustration className="w-48 xl:w-60" />
        <h1 className="max-w-[42rem] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Generate your next Twitter bio using chatGPT
        </h1>
        <div className="mt-4 grid w-full gap-1.5">
          <Label htmlFor="message">
            Copy your current bio{" "}
            <span className="text-slate-500">
              (or write a few sentences about yourself)
            </span>
          </Label>
          <Textarea
            placeholder="e.g. Software engineer @microsoft. with a focus on creating beautiful, user-friendly applications."
            id="message"
          />
        </div>
        <div className="mt-4 grid w-full gap-1.5">
          <Label htmlFor="message">Select a style</Label>
          <Select defaultValue="professional">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="funnt">Funny</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-4">
          <Button>
            Generate your new Bio{" "}
            <Icons.arrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </main>
  )
}
