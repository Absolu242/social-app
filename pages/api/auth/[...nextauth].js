import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { compare } from "bcryptjs"
import MongoClient from "mongodb"

export default NextAuth({
  //configure JWT

  session: {
    jwt: true,
    updateAge: 24 * 60 * 60,
  },
  //specify provider
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        console.log(credentials)

        const client = await MongoClient.connect(process.env.MongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })

        //get  all the users
        const users = await client.db().collection("users")
        //find user width the email or username
        const result = await users.findOne({
          email: credentials.email,
        })
        //Not found - send error response

        if (!result) {
          client.close()
          throw new Error("No user found with this email or username")
        }

        //check hashed password width DB password
        const checkPassword = await compare(
          credentials.password,
          result.password
        )

        if (!checkPassword) {
          client.close()
          throw new Error("Password does not match")
        }
        //else end succes response

        client.close()
        return { email: result.email }
      },
    }),
  ],
})
