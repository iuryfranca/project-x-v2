import { Metadata } from 'next'

import AuthForm from '@/components/auth-form'

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
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
