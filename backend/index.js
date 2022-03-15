const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@crud.6jyvd.mongodb.net/crud?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.post("/insert", async (req, res) => {
  const foodName = req.body.food;
  const days = req.body.days;

  const food = new FoodModel({ foodName: foodName, daysSinceAte: days });
  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001...");
});
