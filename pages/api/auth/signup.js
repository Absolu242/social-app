import { hash } from "bcryptjs"
import MongoClient from "mongodb"
import { client } from "../../../mongoConfig/config"

async function handler(req, res) {
  console.log(client)

  if (req.method === "POST") {
    //getting email and password from body
    const { fullname, username, email, password, terms } = req.body

    //validate
    if (!fullname || !username || !email || !password || !terms) {
      res.status(442).json({ message: "Invalid Data" })
      return
    }

    //connect with database
    const client = await MongoClient.connect(process.env.MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    const db = client.db()

    //check existing

    const checkExisting = await db.collection("users").findOne({ email: email })
    //send error if duplicate user is found

    if (checkExisting) {
      res.status(442).json({ message: "User already exists" })
      client.close()
      return
    }

    //hash password
    const status = await db.collection("users").insertOne({
      fullname,
      username,
      email,
      password: await hash(password, 12),
      terms,
    })
    //send succes response
    res.status(201).json({ message: "User created", ...status })
    //close DB connection

    client.close()
  } else {
    //presponse for other that post method
    res.status(500).json({ message: "Route not valid" })
  }
}

export default handler
