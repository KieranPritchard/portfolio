"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react"
import { MotionConfig } from "framer-motion"

/**
 * Context for managing animation preferences across the application.
 */
const MotionContext = createContext({
  /** Whether animations are currently enabled. */
  isAnimationEnabled: true,
  /** Function to toggle the animation state. */
  toggleAnimation: () => {},
})

/**
 * Provider component that wraps the application and manages the animation preference state.
 *
 * @param children - The child components that will have access to the motion context.
 */
export const MotionProvider = ({ children }: { children: ReactNode }) => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(true)

  /**
   * Toggles the current animation state between enabled and disabled.
   */
  const toggleAnimation = () => setIsAnimationEnabled((prev) => !prev)

  /**
   * Adds or removes a class on the root element so plain CSS transitions
   * and animations (like Tailwind's duration classes) can be switched off too.
   */
  useEffect(() => {
    document.documentElement.classList.toggle(
      "no-animations",
      !isAnimationEnabled
    )
  }, [isAnimationEnabled])

  return (
    <MotionContext.Provider value={{ isAnimationEnabled, toggleAnimation }}>
      {/* Tells framer-motion to skip transform and layout animations when disabled */}
      <MotionConfig reducedMotion={isAnimationEnabled ? "never" : "always"}>
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  )
}

/**
 * Hook to access the current motion preference and its toggle function.
 *
 * @returns The MotionContext value containing isAnimationEnabled and toggleAnimation.
 */
export const useMotionPreference = () => useContext(MotionContext)
