import { MongoClient } from "mongodb"

export const client = await MongoClient.connect(process.env.MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err))
