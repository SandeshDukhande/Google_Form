const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3500;

app.use(cors());
app.use(express.json());

// app.get("/", (request, response) => {
//   response.send("Hello bhai!!");
// });

app.post("/api/register", (request, response) => {
  console.log(request.body);
  response.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server has started litening on ${PORT}`);
});
