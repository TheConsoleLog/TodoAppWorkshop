import env from "./util/env.util"
import e, { json } from "express"
import router from "./routes";
import cors from "cors";
import mongoose from "mongoose";

const app = e();

app.use(cors())
app.use(json())
app.use(router)

app.listen(env.PORT, async () => {
  await mongoose.connect(env.MONGO_CON);
  console.log(`🚀 Server started on PORT ${env.PORT}`)
});