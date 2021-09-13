import { useRouter } from "next/router"
import { getSession, useSession } from "next-auth/client"
import { useEffect, useState } from "react"
import { Login } from "../../auth/login"

export function AuthPage({ children }) {
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // console.log(session)

  useEffect(() => {
    if (!session) {
      router.push("/auth/login")
    } else {
      setIsLoading(false)
    }
  }, [session, router])

  if (isLoading) {
    return <p>loading</p>
  }

  return children
}

export function Auth({ children }) {
  const { data: session, loading } = useSession()
  const router = useRouter()

  const isUser = !!session?.user

  console.log(session)

  useEffect(() => {
    if (loading) return // Do nothing while loading
    if (!isUser) router.push("/auth/login") // If not authenticated, force log in
  }, [isUser, loading, router])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}
