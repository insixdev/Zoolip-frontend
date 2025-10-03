
import '../front/src/styles/index.css'; // Tailwind + DaisyUI
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
