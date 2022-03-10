const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food");

app.use(express.json());

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@crud.6jyvd.mongodb.net/crud?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "orange", daysSinceAte: 3 });
  try {
    await food.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001...");
});
