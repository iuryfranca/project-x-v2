'use client'

import { useEffect, useState } from 'react'
import { SignIn, useClerk } from '@clerk/nextjs'
import { motion, useAnimation } from 'framer-motion'

import { cn } from '@/lib/utils'
import { SaleSvg } from '@/components/images/sales'
import { WomanHoldingHeartSvg } from '@/components/images/woman-holding-a-heart'
import { SignInSkeleton } from '@/components/skeleton/signin-skeleton'

export default function AuthForm() {
  const { loaded } = useClerk()
  const [loadingTest, setLoadingTest] = useState(loaded)

  const imgAnimation = useAnimation()

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    const offsetFactor = 50
    imgAnimation.set({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingTest(loaded)
    }, 1000)
  }, [loaded])
  return (
    <>
      <div
        className={cn('relative', {
          hidden: !loadingTest,
          block: loadingTest,
        })}
      >
        <motion.div
          onMouseMove={(e) => handleMouseMove(e)}
          className="h-full w-full"
        >
          <SignIn />
          <motion.div
            animate={imgAnimation}
            onMouseMove={(e) => handleMouseMove(e)}
            className="absolute top-0 -z-10 h-full w-full"
          >
            <WomanHoldingHeartSvg className="absolute -right-24 -top-16 h-56 w-56 rotate-[30deg] text-secondary" />
            <SaleSvg className="absolute -bottom-8 -left-36 h-56 w-56 -rotate-45 text-secondary" />
          </motion.div>
        </motion.div>
      </div>

      <SignInSkeleton
        className={cn('relative', {
          hidden: loadingTest,
          block: !loadingTest,
        })}
      />
    </>
  )
}
