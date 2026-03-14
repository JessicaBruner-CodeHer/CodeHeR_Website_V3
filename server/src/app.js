import express from "express";
import cors from "cors";
import quoteRoutes from "./routes/quoteRoutes.js";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is running"
  });
});

app.use("/api/quotes", quoteRoutes);

export default app;