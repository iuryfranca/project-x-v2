import * as React from 'react'

import { cn } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'

const SignInSkeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(className)} {...props}>
    <div className="flex h-full w-[400px] flex-col gap-2 rounded-2xl border-2 border-slate-400/10 bg-slate-200 p-[3rem_2rem] shadow-none">
      <Skeleton className="h-6 w-[100px] bg-slate-400/80" />
      <Skeleton className="h-4 w-[200px] bg-slate-400/80" />
      <div className="my-5 flex flex-col gap-2">
        <Skeleton className="h-10 w-full border-2 border-slate-500/25 bg-slate-400/80" />
        <Skeleton className="h-10 w-full border-2 border-slate-500/25 bg-slate-400/80" />
      </div>
      <Skeleton className="mt-3 h-1 w-full bg-slate-400/80" />
      <div className="my-2 flex flex-col gap-5">
        <div className="mt-5 flex flex-col gap-2">
          <Skeleton className="h-4 w-[200px] bg-slate-400/80" />
          <Skeleton className="h-8 w-full border-2 border-slate-500/25 bg-slate-400/80" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[200px] bg-slate-400/80" />
          <Skeleton className="h-8 w-full border-2 border-slate-500/25 bg-slate-400/80" />
        </div>
        <Skeleton className="h-10 w-full bg-slate-400/80" />
        <Skeleton className="mt-2 h-3 w-[150px] bg-slate-400/80" />
      </div>
    </div>
  </div>
))

SignInSkeleton.displayName = 'SignInSkeleton'

export { SignInSkeleton }
