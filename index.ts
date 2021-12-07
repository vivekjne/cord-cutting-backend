import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => res.send("Cord Cutting Backend"));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
