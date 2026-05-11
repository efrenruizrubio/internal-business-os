import { SessionGuard } from './session-guard'

export default function ApplicationLayout({ children }: { children: React.ReactNode }) {
  return <SessionGuard>{children}</SessionGuard>
}
