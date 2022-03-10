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

const Food = mongoose.model("CRUD_data", FoodSchema);
module.exports = Food;
