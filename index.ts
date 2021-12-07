import express from "express";
import sampleRouter from "./routes/sample.routes";

const app = express();
const PORT = 3000;
const BASE_URL = "/api/v1";
app.get(BASE_URL + "/", (req, res) => res.send("Cord Cutting Backend"));

app.use(BASE_URL + "/sample", sampleRouter);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
