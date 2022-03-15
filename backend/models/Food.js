const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  foodName: {
    type: String,
    required: true,
  },
  daysSinceAte: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("last", FoodSchema);
module.exports = Food;
