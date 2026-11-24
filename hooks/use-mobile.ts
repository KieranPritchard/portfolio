import * as React from "react"

/**
 * Breakpoint for mobile devices in pixels.
 */
const MOBILE_BREAKPOINT = 768

/**
 * Hook to detect if the current viewport is a mobile device based on width.
 * 
 * @returns A boolean indicating whether the device is mobile.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Media query to match the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    /**
     * Handler for media query change events.
     */
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add listener and set initial state
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

