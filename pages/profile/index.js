import Link from "next/link"
import { getSession } from "next-auth/client"
import { signOut } from "next-auth/client"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Profile() {
  const { session, status } = useSession()

  if (session) {
    return (
      <>
        <p>Signed in as absolu</p>

        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      <p>Sign in </p>
    </>
  )
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      session: await getSession(ctx),
    },
  }
}

Profile.auth = true
