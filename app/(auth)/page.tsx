import { Metadata } from 'next'
import Link from 'next/dist/client/link'

import AuthForm from '@/components/auth-form'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
}

export default async function AuthPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="relative flex min-w-full items-center justify-center gap-5 rounded-2xl bg-white p-4 opacity-75 shadow-2xl dark:bg-primary">
        <div className="flex h-full w-[400px] flex-col items-center justify-between rounded-2xl bg-card px-7 py-5 dark:bg-background/60">
          <div className="flex h-full w-full flex-col gap-2">
            <div className="h-20 w-full">
              <h1 className="text-5xl font-bold">Project X</h1>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center gap-8">
              <h2 className="text-3xl font-medium leading-none tracking-tight">
                Seja bem vindo ao mais novo ecommerce para você!
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-md font-medium">
                  Esse é o novo site/projeto feito pelo{' '}
                  <Link
                    href="https://www.linkedin.com/in/iury-franca-37873318b/"
                    target="_blank"
                  >
                    <span className="font-semibold text-primary-foreground underline">
                      Iury França
                    </span>
                  </Link>{' '}
                  para poder mostrar as vocês no o que ele esteve trabalhando.
                </p>
                <p className="text-md font-medium">
                  Todo o design UI foi feito usando{' '}
                  <Link href="https://ui.shadcn.com/" target="_blank">
                    <span className="font-semibold text-primary-foreground underline">
                      ui.shadcn.com
                    </span>
                  </Link>{' '}
                  como base, construído e disponibilizado pelo{' '}
                  <Link href="https://twitter.com/shadcn" target="_blank">
                    <span className="font-semibold text-primary-foreground underline">
                      shadcn
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="h-[250px] w-full">
            <div className="h-full w-full rounded-2xl bg-secondary"></div>
          </div>
        </div>
        <div className="mx-auto my-16 flex justify-center">
          <AuthForm />
        </div>
      </div>
    </div>
  )
}
