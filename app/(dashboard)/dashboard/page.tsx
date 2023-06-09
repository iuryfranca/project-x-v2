'use client'

import { UserButton, useUser } from '@clerk/nextjs'

export default function DashboardPage() {
  const { isSignedIn, user } = useUser()
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <h1>Hello World</h1>
      <UserButton />
      {isSignedIn && <p>{user!.firstName}</p>}
    </div>
  )
}
