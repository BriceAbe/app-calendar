const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(formidable());
const calendrier = require("./routes/calendrier");
app.use(calendrier);

app.listen(process.env.PORT, () => {
  console.log("server connecté");
});
