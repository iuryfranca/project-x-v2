import { Metadata } from 'next'
import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'

import { Skeleton } from '@/components/ui/skeleton'
import { SaleSvg } from '@/components/images/sales'
import { WomanHoldingHeartSvg } from '@/components/images/woman-holding-a-heart'

// import { UserAuthForm } from "@/components/user-auth-form"

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

export default async function AuthPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative flex min-w-full items-center justify-center rounded-2xl bg-card bg-white opacity-75 shadow-2xl">
        <div className="h-full w-[400px] rounded-l-2xl bg-muted"></div>
        <div className="mx-auto my-16 flex justify-center">
          <ClerkLoaded>
            <div className="relative">
              <SignIn />
              {/* <div className="absolute left-14 top-14 h-40 w-40 rounded-full bg-cyan-300" /> */}
              {/* <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-violet-600" /> */}
              <WomanHoldingHeartSvg className="absolute -right-32 -top-16 h-56 w-56 rotate-[30deg] text-secondary" />
              <SaleSvg className="absolute -bottom-10 -left-36 h-56 w-56 -rotate-45 text-secondary" />
            </div>
          </ClerkLoaded>
          <ClerkLoading>
            <div className="flex h-full w-[400px] flex-col gap-2 rounded-2xl border-2 border-muted/50 bg-background/30 p-[3rem_2rem] text-foreground shadow-none">
              <Skeleton className="h-6 w-[100px]" />
              <Skeleton className="h-4 w-[200px]" />
              <div className="my-5 flex flex-col gap-2">
                <Skeleton className="h-10 w-full border-2 border-muted bg-transparent" />
                <Skeleton className="h-10 w-full border-2 border-muted bg-transparent" />
              </div>
              <Skeleton className="mt-3 h-1 w-full" />
              <div className="my-2 flex flex-col gap-5">
                <div className="mt-5 flex flex-col gap-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-8 w-full border-2 border-muted bg-muted/95" />
                </div>
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-8 w-full border-2 border-muted bg-muted/95" />
                </div>
                <Skeleton className="h-10 w-full" />
                <Skeleton className="mt-2 h-3 w-[150px]" />
              </div>
            </div>
          </ClerkLoading>
        </div>
      </div>
    </div>
  )
}
