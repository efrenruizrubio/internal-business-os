export const LoginForm = () => {
  return (
    <article className="bg-card text-card-foreground border-border w-full rounded-md border px-8 py-8 shadow-sm">
      <div className="mb-6">
        <h2 id="login-title" className="text-xl leading-[1.3] font-semibold">
          Welcome back
        </h2>
        <p className="text-muted-foreground mt-1 max-w-65 text-sm leading-5">
          Enter your credentials to access your dashboard.
        </p>
      </div>

      <form className="flex flex-col gap-6">
        <div className="field">
          <label className="text-base leading-6 font-semibold" htmlFor="email">
            Email address
          </label>
          <div className="relative">
            <svg
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75 6.75h14.5v10.5H4.75V6.75Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="m5 7 7 5.25L19 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
            <input
              className="input min-h-12 rounded-sm px-10 text-base"
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
        </div>

        <div className="field">
          <div className="flex items-center justify-between gap-4">
            <label className="text-base leading-6 font-semibold" htmlFor="password">
              Password
            </label>
            <a className="text-sm leading-5" href="/forgot-password">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <svg
              aria-hidden="true"
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 10V8.25a4.5 4.5 0 0 1 9 0V10"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
              <path
                d="M6.75 10h10.5v8.25H6.75V10Z"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M12 13.5v1.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.7"
              />
            </svg>
            <input
              className="input min-h-12 rounded-sm px-10 pr-12 text-base"
              id="password"
              name="password"
              placeholder="********"
              type="password"
            />
            <button
              aria-label="Show password"
              className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-sm transition-colors"
              type="button"
            >
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.75 12s3.25-5.25 9.25-5.25S21.25 12 21.25 12 18 17.25 12 17.25 2.75 12 2.75 12Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
                <path
                  d="M12 14.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
            </button>
          </div>
        </div>

        <label className="text-muted-foreground flex items-center gap-2 text-sm leading-5">
          <input
            className="border-border text-primary size-4 rounded-[4px]"
            name="remember-device"
            type="checkbox"
          />
          <span>Remember this device for 30 days</span>
        </label>

        <button className="btn btn-primary min-h-13 gap-2 rounded-sm text-base" type="submit">
          <span>Login</span>
          <svg
            aria-hidden="true"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12h14m-6-6 6 6-6 6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </form>

      <footer className="border-border mt-6 border-t pt-6 text-center">
        <p className="text-muted-foreground text-sm leading-5">
          Need help?{' '}
          <a className="font-medium" href="/support">
            Contact Support
          </a>
        </p>
      </footer>
    </article>
  )
}
