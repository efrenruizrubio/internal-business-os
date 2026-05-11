export default function ForbiddenPage() {
  return (
    <section>
      <header className="flex flex-col-reverse">
        <h3>Error 403</h3>
        <h2>Access Forbidden</h2>
      </header>
      <p>
        Your current user role doesn't have the necessary permissions to access this specific
        module. Please contact your system administrator if you believe this is an error.
      </p>
    </section>
  )
}
