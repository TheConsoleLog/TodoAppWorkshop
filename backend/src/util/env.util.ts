import { coerce, object, string } from "zod";
import { config } from "dotenv";
config();

const envSchema = object({
  PORT: coerce.number({
    message: "Port must be a number"
  }).min(0).max(65536),
  MONGO_USER: string(),
  MONGO_PWD: string(),
  MONGO_CON: string({ message: 'MONGO_URL must be defined!'})
})

export default envSchema.parse(process.env);