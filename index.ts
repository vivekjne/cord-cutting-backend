import express from "express";
import sampleRouter from "./routes/sample.routes";
import languageRouter from "./routes/language.routes";
import channelRouter from "./routes/channel.routes";

const app = express();
app.use(express.json());
const PORT = 3000;
const BASE_URL = "/api/v1";
app.get(BASE_URL + "/", (req, res) => res.send("Cord Cutting Backend"));

app.use(BASE_URL + "/sample", sampleRouter);
app.use(BASE_URL + "/languages", languageRouter);
app.use(BASE_URL + "/channels", channelRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
