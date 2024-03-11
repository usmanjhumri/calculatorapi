import express from "express";
import json from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
const port = process.env.PORT || 3001;
app.use(json());
app.post("/calculate", (req, res) => {
  const { num1, num2, operator } = req.body;
  let result;
  switch (operator) {
    case "addition":
      result = num1 + num2;
      break;
    case "subtraction":
      result = num1 - num2;
      break;
    case "multiplication":
      result = num1 * num2;
      break;
    default:
      result = "Invalid operator";
  }
  res.json({ result });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
