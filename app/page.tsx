import AuthOverlay from "@/components/auth-overlay"
import HalftoneWaves from "@/components/halftone-waves"

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <HalftoneWaves />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <AuthOverlay />
      </div>
    </main>
  )
}

