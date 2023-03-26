interface TwitterProfileSkeletonProps {
  title: string
}

export function TwitterProfileSkeleton({ title }: TwitterProfileSkeletonProps) {
  return (
    <div>
      <div className="mb-4 h-24 w-24 rounded-full bg-neutral-200" />
      <div className="mb-2 flex flex-col gap-2">
        <div className="h-6 w-1/3 rounded-md bg-neutral-800" />
        <div className="h-4 w-[8rem] rounded-md bg-neutral-400 leading-tight" />
      </div>
      <div className="mt-3">
        <p className="mb-2 leading-tight">{title}</p>
        <div className="mb-2 h-4 w-1/3 rounded-md bg-neutral-200 leading-tight" />
      </div>
      <div className="flex gap-2">
        <div className="mb-2 h-4 w-1/3 rounded-md bg-blue-600 leading-tight" />
        <div className="mb-2 h-4 w-1/3 rounded-md bg-neutral-200 leading-tight" />
      </div>
    </div>
  )
}
