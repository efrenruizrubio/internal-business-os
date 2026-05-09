export const LoginFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="justify flex w-full flex-col items-center gap-6">
      <p className="text-muted-foreground text-center text-sm leading-5">
        &copy; {currentYear} BizOS. Secure Enterprise Access.
      </p>
    </footer>
  )
}
