import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-slate-700">Hello Next.js + shadcn!</h1>
      <Button>Click me</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  )
}