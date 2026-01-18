'use client'
import Box from "@/components/Box"

 // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <Box>
          <span>Global Error</span>
          <p>{error.message}</p>
          <button onClick={() => reset()}>Try again</button>
        </Box>
      </body>
    </html>
  )
}