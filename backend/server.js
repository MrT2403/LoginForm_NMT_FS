import express from "express";
import connectDB from "./config/db.config.js";
import cors from "cors";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api", routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Serrver started on port ${PORT}`));
