'use client'

import { UserButton, useUser } from '@clerk/nextjs'

export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser()
  console.log('testing build [ignore this commit]')
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <h1>Hello World</h1>
      <UserButton />
      {isSignedIn && <p>{user!.firstName}</p>}
    </div>
  )
}
