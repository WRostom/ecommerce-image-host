import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();
const port = 8080;

app.use(helmet());
app.use(compression());
app.use(cors());

app.use("/assets/", express.static("src/assets"));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
