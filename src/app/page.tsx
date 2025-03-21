import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Raj Palace and Convention',
  description: 'Welcome to Raj Palace and Convention - Your Premier Event Destination',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Welcome to Raj Palace and Convention</h1>
      </div>
    </main>
  )
} 