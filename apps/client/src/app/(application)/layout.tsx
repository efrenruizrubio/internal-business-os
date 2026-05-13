import Navbar from '@/modules/shared/components/navbar'
import { SessionGuard } from './session-guard'
import { Header } from '@/modules/shared/components/header'

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionGuard>
      <main className="bg-primary-foreground flex w-full flex-col">
        <Header />
        <section className="flex-1 overflow-auto">{children}</section>
        <Navbar />
      </main>
    </SessionGuard>
  )
}
