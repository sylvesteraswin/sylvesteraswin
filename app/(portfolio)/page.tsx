import { cn } from "@/lib/utils"
import Image from "next/image"

export default async function IndexPage() {
  return (
    <>
      <section className="container grid h-[calc(100vh-64px)] items-center justify-start gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <div className="mx-auto flex flex-col items-start justify-start gap-2 lg:w-[52rem]">
          <Image
            src="http://sasw.in/profile-photo"
            alt="Sylvester Aswin"
            width={300}
            height={300}
            className="mb-5 h-44 w-44 rounded-full"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello!
          </h1>
          <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            I&apos;m Sylvester Aswin
          </h1>
          {/* <p className="max-w-[42rem] leading-normal text-slate-700 dark:text-slate-400 sm:text-xl sm:leading-8">
            Frontend Engineer, Apple Fanboy, Traveller, and Techno head.
          </p> */}
          <p className="max-w-[42rem] leading-normal text-slate-700 dark:text-slate-400 sm:text-xl sm:leading-8">
            Currently working as a Frontend Engineer at Microsoft.
          </p>
        </div>
      </section>
    </>
  )
}
