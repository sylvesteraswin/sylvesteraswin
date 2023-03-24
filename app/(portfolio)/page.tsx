import { cn } from "@/lib/utils"
import Image from "next/image"

export default async function IndexPage() {
  return (
    <>
      <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
          <Image
            src="https://res.cloudinary.com/memoriesbysylvester/image/upload/v1679639649/portfolio/IMG_0318_eaiqsf.jpg"
            alt="Sylvester Aswin"
            width={300}
            height={300}
            className="mb-5 rounded-full"
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Hello! I&apos;m Sylvester Aswin
          </h1>
          <p className="max-w-[42rem] scroll-m-20 text-3xl font-extrabold leading-normal tracking-tight text-gray-500 sm:leading-8 lg:text-4xl">
            Frontend Engineer, Apple Fanboy, Traveller, and Techno head.
          </p>
        </div>
      </section>
    </>
  )
}
