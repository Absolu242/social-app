import React from "react"

export default function AuthGuard({ children }) {
  const { user, initializing, setRedirect } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!initializing) {
      if (!user) {
        //remember the page that user tried to access
        setRedirect(router.route)
        router.push("/auth/login")
      }
    }
  }, [initializing, router, user, setRedirect])

  /* show loading indicator while the auth provider is still initializing */
  if (initializing) {
    return <h1>App Loading</h1>
  }

  // if auth initialized with a valid user show protected page
  if (!initializing && user) {
    return <>{children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}
