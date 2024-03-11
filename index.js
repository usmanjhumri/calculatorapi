import express from "express";
import json from "body-parser";
const app = express();
const port = process.env.PORT || 3001;
app.use(json());
app.post("/calculate", (req, res) => {
  res.json(req.body);
  // const { num1, num2, operator } = req.body;
  // let result;
  // switch (operator) {
  //   case "addition":
  //     result = num1 + num2;
  //     break;
  //   case "subtraction":
  //     result = num1 - num2;
  //     break;
  //   case "multiplication":
  //     result = num1 * num2;
  //     break;
  //   default:
  //     result = "Invalid operator";
  // }
  // res.json({ result });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
