import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export default async function IndexPage() {
  return (
    <>
      <section className="w container grid h-[calc(100vh-10rem)] items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <div className="mx-auto flex flex-col items-start justify-start gap-4 lg:w-[52rem]">
          <Image
            src="http://sasw.in/profile-photo"
            alt="Sylvester Aswin"
            width={300}
            height={300}
            className="mb-5 h-44 w-44 rounded-full"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello! I&apos;m Sylvester Aswin
          </h1>
          <p className="max-w-[40rem] leading-normal text-slate-700 dark:text-slate-400 sm:text-xl sm:leading-8">
            Frontend Engineer{" "}
            <Link
              href={siteConfig.links.work}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              @Microsoft
            </Link>{" "}
            with a focus on creating beautiful, user-friendly applications. I am
            obsessed with clean code and always looking to learn and grow.
          </p>
        </div>
      </section>
    </>
  )
}
