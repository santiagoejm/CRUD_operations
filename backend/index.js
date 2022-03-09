const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://admin:${process.env.MONGO_DB_STRING}@crud.6jyvd.mongodb.net/crud?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

app.listen(3001, () => {
  console.log("Server listening on port 3001...");
});
