import dotenv from "dotenv";
import express from "express";
import connection from "./db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import contactUsRoute from "./routes/contactUsRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;

connection();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactUsRoute);

app.post("/api/register", (request, response) => {
  console.log(request.body);
  response.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
