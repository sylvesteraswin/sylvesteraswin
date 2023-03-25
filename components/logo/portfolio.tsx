import { cn } from "@/lib/utils"
import { SVGProps } from "react"

export default function SylLogo({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2281.84 1994"
      className={cn("fill-current", "w-[1em]", "p-0.5", className)}
      {...rest}
    >
      <path d="M286.34 1148h361.44l-307.66 532h615.31l-307.65-533.27-180.72-313.8L947.83 0h385.87l948.14 1643.05L2079.99 1994h-269.82l-180.77-314h312.22L1140.87 293.01 828.29 833.79 1497.65 1994H201.76L0 1643.88 286.34 1148z" />
    </svg>
  )
}
