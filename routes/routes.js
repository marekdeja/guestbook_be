const express = require("express");
const Model = require("../models/model");

const router = express.Router();

//Post entry Method
router.post("/postEntry", async (req, res) => {
  const data = new Model({
    userName: req.body.userName,
    userText: req.body.userText,
    entryDate: req.body.entryDate,
  });

  try {
    const dataToSave = await data.save();
    const allData = await Model.find();
    const responseData = { ...dataToSave, allData };
    res.status(200).json(responseData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all results Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
