import '@/styles/globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  creator: 'Iury França',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
  },
}

const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/Larsseit.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Larsseit-Light.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Larsseit-Bold.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Larsseit-Medium.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ClerkProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col">
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    </>
  )
}
