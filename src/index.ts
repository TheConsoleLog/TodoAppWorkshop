import env from "./util/env.util"
import e, { json, urlencoded } from "express"
import router from "./routes";
import cors from "cors";

const app = e();

app.use(cors())
app.use(json())
app.use(router)

app.listen(env.PORT, () => console.log(`🚀 Server started on PORT ${env.PORT}`));