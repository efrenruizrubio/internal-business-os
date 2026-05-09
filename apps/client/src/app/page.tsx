import { LoginFooter, LoginForm, LoginHeader } from '@modules/login/components'

export default function LoginPage() {
  return (
    <main className="bg-background text-foreground relative flex flex-1 flex-col justify-center gap-4 p-4">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </main>
  )
}
