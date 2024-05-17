
require("dotenv").config();
const express = require("express");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();
const PORT = 3500;

connection();
app.use(cors());
app.use(express.json());

// app.get("/", (request, response) => {
//   response.send("Hello bhai!!");
// });

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.post("/api/register", (request, response) => {
  console.log(request.body);
  response.json({ status: "ok" });
});
const port = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server has started litening on ${PORT}`);
});
