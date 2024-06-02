import express from "express";
import cors from "cors";
import connectDB from "./config/db.config";

import routes from "./routes/routes";
const PORT = parseInt(process.env.PORT || "8000");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

connectDB();

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
});
