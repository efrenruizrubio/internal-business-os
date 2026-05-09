export const LoginHeader = () => {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="bg-primary text-primary-foreground shadow-soft mb-6 flex size-12 items-center justify-center rounded-sm">
        <svg
          aria-hidden="true"
          className="size-7"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 7V5.75A1.75 1.75 0 0 1 10.75 4h2.5A1.75 1.75 0 0 1 15 5.75V7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M5.75 7h12.5A1.75 1.75 0 0 1 20 8.75v8.5A1.75 1.75 0 0 1 18.25 19H5.75A1.75 1.75 0 0 1 4 17.25v-8.5A1.75 1.75 0 0 1 5.75 7Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path
            d="M4 12.25a18.8 18.8 0 0 0 16 0M12 11.5v1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </div>
      <h1 className="text-[28px] leading-[1.2] font-bold">BizOS</h1>
      <p className="text-muted-foreground mt-1 text-sm leading-5">Internal Operations Suite</p>
    </header>
  )
}
