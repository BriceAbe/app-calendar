const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const formidable = require("express-formidable");
// Import des models
const Calendrier = require("../models/Calendrier");

// Recuperation de tous les formulaires
router.get("/", async (req, res) => {
  res.status(200).json({ janvier: "2020" });
  // console.log("tentative");
  // try {
  //   const allcalendar = await Calendrier.find();

  //   res.status(200).json({ janvier: "2020" });
  // } catch (error) {
  //   res.status(400).json(error.message);
  // }
});

// Sauvegarde d'un formulaire
router.post("/save", async (req, res) => {
  let title = "moi";
  let questions = "toi";
  try {
    // const { title, questions } = req.fields;
    const newform = new Calendrier({
      title,
      questions,
    });
    await newform.save();
    res.status(200).json(newform);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
