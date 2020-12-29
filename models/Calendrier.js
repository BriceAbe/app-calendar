const mongoose = require("mongoose");

//Model calendrier
const Calendrier = mongoose.model("Calendrier", {
  dateGlobal: Object,
});
module.exports = Calendrier;
