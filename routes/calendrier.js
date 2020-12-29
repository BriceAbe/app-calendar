const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const formidable = require("express-formidable");
// Import des models
const Calendrier = require("../models/Calendrier");

// Recuperation de tous les formulaires
router.get("/", async (req, res) => {
  try {
    const allcalendar = await Calendrier.find();

    res.status(200).json(allcalendar);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Sauvegarde d'un formulaire
router.post("/save", async (req, res) => {
  let { choice } = req.fields;
  try {
    // const { title, questions } = req.fields;
    const newDate = await new Calendrier({
      dateGlobal: choice,
    });
    await newDate.save();
    res.status(200).json(newDate);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
